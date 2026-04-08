import puppeteer from 'puppeteer';
import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PATH = path.join(__dirname, 'dist');
const PORT = 3333;

// Lista de rotas (baseada no teu pathsData.ts)
const routes = [
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

async function prerender() {
  const app = express();
  app.use(express.static(DIST_PATH));
  
  // Middleware de fallback para rotas SPA (serve o index.html se nada for encontrado)
  app.use((req, res) => {
    res.sendFile(path.join(DIST_PATH, 'index.html'));
  });

  const server = app.listen(PORT, async () => {
    console.log(`Servidor temporário iniciado em http://localhost:${PORT}`);
    
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    for (const route of routes) {
      console.log(`Renderizando: ${route}`);
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });
      
      const content = await page.content();
      const outputPath = path.join(DIST_PATH, route === '/' ? 'index.html' : `${route}/index.html`);
      
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await fs.writeFile(outputPath, content);
    }

    await browser.close();
    server.close();
    console.log('✅ Pre-rendering concluído com sucesso!');
    process.exit(0);
  });
}

prerender().catch(err => {
  console.error('❌ Erro no pre-rendering:', err);
  process.exit(1);
});
