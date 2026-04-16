import puppeteer from 'puppeteer';
import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PATH = path.join(__dirname, 'dist');
const PUBLIC_PATH = path.join(__dirname, 'public');
const PORT = 3333;
const SITE_URL = "https://caminhos-rainha-santa.onrender.com";

const baseRoutes = [
  '/',
  '/paths',
  '/path/caminho-noiva-real',
  '/path/caminho-noiva-real/via-da-prata',
  '/path/caminho-noiva-real/linha-do-tua',
  '/path/caminho-noiva-real/albufeira-do-azibo',
  '/path/caminho-noiva-real/carvalhais',
  '/path/caminho-noiva-real/vila-flor',
  '/path/caminho-noiva-real/vilarica',
  '/path/caminho-noiva-real/castelos',
  '/path/caminho-noiva-real/casamento',
  '/path/aventura-gravel',
  '/path/aventura-gravel/via-da-prata',
  '/path/aventura-gravel/ecopista-do-tua',
  '/path/aventura-gravel/alem-douro',
  '/path/aventura-gravel/aldeias-historicas',
];

const languages = ['pt', 'en', 'es'];

async function generateSitemap() {
  console.log('Generating automated sitemap...');
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  // Adiciona a rota raiz (/) com x-default
  xml += `  <url>\n`;
  xml += `    <loc>${SITE_URL}/</loc>\n`;
  languages.forEach(l => {
    xml += `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}/${l}/" />\n`;
  });
  xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />\n`;
  xml += `    <changefreq>weekly</changefreq><priority>1.0</priority>\n`;
  xml += `  </url>\n`;

  // Adiciona todas as combinações de língua e rota
  languages.forEach(lang => {
    baseRoutes.forEach(route => {
      // Para PT, usamos a rota sem prefixo (pois é a canónica)
      // Se lang for PT, e o sitemap já processou a raiz (route === '/') na secção anterior,
      // devemos evitar duplicar a entrada da raiz se necessário, mas aqui o loop baseRoutes
      // já cobre tudo.
      
      const isDefaultLang = (lang === 'pt');
      const langPath = isDefaultLang ? '' : `/${lang}`;
      const fullPath = route === '/' ? `${langPath}/` : `${langPath}${route}`;
      
      // Evitar duplicar a entrada da raiz (/) que já foi adicionada acima se route for '/' e lang for PT
      if (isDefaultLang && route === '/') return;

      const priority = route === '/' ? '1.0' : (route.split('/').length > 2 ? '0.7' : '0.9');
      
      xml += `  <url>\n`;
      xml += `    <loc>${SITE_URL}${fullPath.replace(/\/$/, '') || '/'}</loc>\n`;
      
      // Hreflang links para as outras línguas da mesma página
      languages.forEach(l => {
        const altLangPath = (l === 'pt') ? '' : `/${l}`;
        const altPath = route === '/' ? `${altLangPath}/` : `${altLangPath}${route}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${altPath.replace(/\/$/, '') || '/'}" />\n`;
      });
      
      // Adiciona x-default sempre a apontar para a versão sem prefixo (PT)
      const xDefaultPath = route === '/' ? '/' : route;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${xDefaultPath.replace(/\/$/, '') || '/'}" />\n`;
      
      xml += `    <changefreq>weekly</changefreq><priority>${priority}</priority>\n`;
      xml += `  </url>\n`;
    });
  });

  xml += '</urlset>';
  
  await fs.writeFile(path.join(DIST_PATH, 'sitemap.xml'), xml);
  await fs.writeFile(path.join(PUBLIC_PATH, 'sitemap.xml'), xml);
  console.log('✅ Sitemap.xml generated successfully!');
}

async function prerender() {
  const app = express();
  app.use(express.static(DIST_PATH));
  app.use((req, res) => {
    res.sendFile(path.join(DIST_PATH, 'index.html'));
  });

  const server = app.listen(PORT, async () => {
    console.log(`Temporary server started at http://localhost:${PORT}`);
    
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    for (const lang of languages) {
      console.log(`\n--- Prerendering: ${lang.toUpperCase()} ---`);
      
      for (const route of baseRoutes) {
        const langRoute = route === '/' ? `/${lang}` : `/${lang}${route}`;
        console.log(`Crawling: ${langRoute}`);
        
        await page.goto(`http://localhost:${PORT}${langRoute}`, { waitUntil: 'networkidle0' });
        const content = await page.content();
        
        const outputPath = path.join(DIST_PATH, lang, route === '/' ? 'index.html' : `${route}/index.html`);
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, content);

        if (lang === 'pt') {
          const rootPath = path.join(DIST_PATH, route === '/' ? 'index.html' : `${route}/index.html`);
          await fs.mkdir(path.dirname(rootPath), { recursive: true });
          await fs.writeFile(rootPath, content);
        }
      }
    }

    await browser.close();
    await generateSitemap();
    server.close();
    console.log('\n✅ Multi-language build with automated sitemap completed!');
    process.exit(0);
  });
}

prerender().catch(err => {
  console.error('❌ Prerender error:', err);
  process.exit(1);
});
