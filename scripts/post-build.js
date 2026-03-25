import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const TEMPLATE_FILE = path.join(DIST_DIR, 'index.html');
const SITE_URL = 'https://caminhos-rainha-santa.onrender.com';

// Rotas e dados de SEO (Extraídos do seu pathsData.ts)
const routes = [
  {
    path: 'path/caminho-noiva-real',
    title: 'Caminho da Noiva Real',
    description: 'Onde a lenda floresceu. Siga os passos da jovem Isabel na sua entrada em Portugal de Quintanilha a Trancoso.',
    image: '/caminho-noiva-real.png'
  },
  {
    path: 'path/aventura-gravel',
    title: 'Rota da Noiva Real em Bikepacking',
    description: 'A história sobre duas rodas. Conquiste o horizonte de Quintanilha a Trancoso em bikepacking.',
    image: '/mirandela.jpg'
  },
  {
    path: 'path/aventura-gravel/ecopista-do-tua',
    title: 'Ecopista do Tua | Aventura Gravel',
    description: 'Uma travessia épica de 81km que une Bragança a Mirandela pela antiga linha do Tua.',
    image: '/mirandela.jpg'
  },
  {
    path: 'path/caminho-noiva-real/via-da-prata',
    title: 'Via da Prata | Caminho da Noiva Real',
    description: 'Onde Isabel conheceu o seu povo. Cruze a fronteira de Quintanilha e sinta a emoção do primeiro encontro.',
    image: '/via-da-prata.jpg'
  },
  {
    path: 'path/caminho-noiva-real/linha-do-tua',
    title: 'Linha do Tua | Caminho da Noiva Real',
    description: 'Uma etapa de contrastes que une o Castelo de Bragança à serenidade de Santa Comba de Rossas.',
    image: '/linha-do-tua.jpg'
  },
  {
    path: 'path/caminho-noiva-real/albufeira-do-azibo',
    title: 'Albufeira do Azibo | Caminho da Noiva Real',
    description: 'Uma travessia que liga o mundo rural e místico à pureza da natureza no Geopark Terras de Cavaleiros.',
    image: '/albufeira-do-azibo.png'
  },
  {
    path: 'path/caminho-noiva-real/carvalhais',
    title: 'Carvalhais | Caminho da Noiva Real',
    description: 'Um percurso de declive suave até à Cidade Jardim, Mirandela.',
    image: '/mirandela.jpg'
  },
  {
    path: 'path/caminho-noiva-real/vila-flor',
    title: 'Vila Flor | Caminho da Noiva Real',
    description: 'Um percurso de ascensão onde o olhar da Rainha transformou uma povoação num jardim eterno.',
    image: '/vila-flor.png'
  },
  {
    path: 'path/caminho-noiva-real/vilarica',
    title: 'Vila da Vilariça | Caminho da Noiva Real',
    description: 'Atravesse o Egito Transmontano até ao encontro épico com o Rio Douro.',
    image: '/vilarica.png'
  },
  {
    path: 'path/caminho-noiva-real/castelos',
    title: 'Aldeias Históricas | Caminho da Noiva Real',
    description: 'Mergulhe no coração fortificado do reino entre Marialva e Longroiva.',
    image: '/castelos.png'
  },
  {
    path: 'path/caminho-noiva-real/casamento',
    title: 'Bodas de Trancoso | Caminho da Noiva Real',
    description: 'O capítulo final da jornada da noiva no altar da Beira.',
    image: '/caminho-noiva-real.png'
  }
];

async function prerender() {
  if (!fs.existsSync(TEMPLATE_FILE)) {
    console.error('ERRO: dist/index.html não encontrado. Corre primeiro npm run build.');
    return;
  }

  const template = fs.readFileSync(TEMPLATE_FILE, 'utf-8');

  console.log('--- A iniciar Injeção de Meta Tags Estáticas ---');

  for (const route of routes) {
    console.log(`A processar: /${route.path}`);

    const absoluteImage = `${SITE_URL}${route.image}`;
    const absoluteUrl = `${SITE_URL}/${route.path}`;

    let html = template;

    // Substituir Título
    html = html.replace(/<title>.*?<\/title>/, `<title>${route.title} | Caminhos da Rainha Santa</title>`);
    
    // Substituir Meta Descrição
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`);

    // Substituir OG Tags
    html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`);
    html = html.replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${absoluteImage}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${absoluteUrl}" />`);

    // Substituir Twitter Tags
    html = html.replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${route.title}" />`);
    html = html.replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${route.description}" />`);
    html = html.replace(/<meta property="twitter:image" content=".*?" \/>/, `<meta property="twitter:image" content="${absoluteImage}" />`);

    // Criar diretório
    const routeDir = path.join(DIST_DIR, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    // Salvar index.html na nova pasta
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  }

  console.log('--- Injeção Concluída com Sucesso! ---');
}

prerender();
