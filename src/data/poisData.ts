import type { POI } from '../types';

export const pois: POI[] = [
  {
    id: 'albergue-de-peregrinos-de-braganca',
    category: 'sleep',
    contact: '+351 273 240 020',
    latlng: [41.8038025, -6.7505367],
    i18n: {
      pt: { name: 'Albergue de Peregrinos de Bragança', categoryLabel: 'Albergue' },
      en: { name: 'Peregrino\'s Guesthouse Bragança', categoryLabel: 'Guesthouse' },
      es: { name: 'Albergue de Peregrinos Bragança', categoryLabel: 'Albergue' }
    },
    url: 'https://turismo.cm-braganca.pt/paisagens-e-biodiversidade/percursos-e-rotas/caminho-de-santiago',
    pathSlugs: ['ecopista-do-tua', 'linha-do-tua', 'via-da-prata']
  },
  {
    id: 'albergue-de-peregrinos-de-quintanilha',
    category: 'sleep',
    contact: '+351 966 048 612 (Sr. Álvaro Lopes)',
    latlng: [41.7507436, -6.5715525],
    i18n: {
      pt: { name: 'Albergue de Peregrinos de Quintanilha', categoryLabel: 'Albergue' },
      en: { name: 'Peregrino\'s Guesthouse Quintanilha', categoryLabel: 'Guesthouse' },
      es: { name: 'Albergue de Peregrinos Quintanilha', categoryLabel: 'Albergue' }
    },
    url: 'https://turismo.cm-braganca.pt/paisagens-e-biodiversidade/percursos-e-rotas/caminho-de-santiago',
    pathSlugs: ['via-da-prata']
  },
  {
    id: 'albufeira-do-azibo',
    category: 'camp',
    contact: '',
    latlng: [41.5613894, -6.8832964],
    i18n: {
      pt: { name: 'Albufeira do Azibo', categoryLabel: 'Abrigo' },
      en: { name: 'Albufeira do Azibo', categoryLabel: 'Shelter' },
      es: { name: 'Albufeira do Azibo', categoryLabel: 'Refugio' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['ecopista-do-tua']
  },
  {
    id: 'bar-da-capela',
    category: 'eat',
    contact: '',
    latlng: [41.2671647, -7.142925],
    i18n: {
      pt: { name: 'Bar da Capela', categoryLabel: 'Café' },
      en: { name: 'Bar da Capela', categoryLabel: 'Coffee Shop' },
      es: { name: 'Bar da Capela', categoryLabel: 'Chiringuito' }
    },
    url: 'https://www.tripadvisor.pt/Restaurants-g1022881-Vila_Flor_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['alem-douro', 'vilarica']
  },
  {
    id: 'cafe-generic-vila-flor',
    category: 'eat',
    contact: '',
    latlng: [41.3191656, -7.1336156],
    i18n: {
      pt: { name: 'Café ', categoryLabel: 'Café' },
      en: { name: 'Café ', categoryLabel: 'Coffee Shop' },
      es: { name: 'Café ', categoryLabel: 'Chiringuito' }
    },
    pathSlugs: ['vila-flor']
  },
  {
    id: 'cafe-vale-frechoso',
    category: 'eat',
    contact: '',
    latlng: [41.3591022, -7.1216444],
    i18n: {
      pt: { name: 'Café (Vale Frechoso)', categoryLabel: 'Café' },
      en: { name: 'Café (Vale Frechoso)', categoryLabel: 'Coffee Shop' },
      es: { name: 'Café (Vale Frechoso)', categoryLabel: 'Chiringuito' }
    },
    pathSlugs: ['alem-douro', 'vila-flor']
  },
  {
    id: 'cafe-vila-flor',
    category: 'eat',
    contact: '',
    latlng: [41.3191656, -7.1336156],
    i18n: {
      pt: { name: 'Café (Vila Flor)', categoryLabel: 'Café' },
      en: { name: 'Café (Vila Flor)', categoryLabel: 'Coffee Shop' },
      es: { name: 'Café (Vila Flor)', categoryLabel: 'Chiringuito' }
    },
    pathSlugs: ['alem-douro']
  },
  {
    id: 'cafe-reboledo',
    category: 'eat',
    contact: '',
    latlng: [41.6629528, -6.827815],
    i18n: {
      pt: { name: 'Café Reboledo', categoryLabel: 'Café' },
      en: { name: 'Café Reboledo', categoryLabel: 'Coffee Shop' },
      es: { name: 'Café Reboledo', categoryLabel: 'Chiringuito' }
    },
    url: 'https://www.tripadvisor.pt/Restaurant_Review-g1024346-d25435017-Reviews-Cafe_Reboledo-Santa_Comba_de_Rossas_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['ecopista-do-tua', 'linha-do-tua']
  },
  {
    id: 'cafe-restaurante-o-lombardes',
    category: 'eat',
    contact: '',
    latlng: [41.8217636, -6.6012194],
    i18n: {
      pt: { name: 'Café Restaurante O Lombardês', categoryLabel: 'Café Restaurante' },
      en: { name: 'O Lombardês Café Restaurant', categoryLabel: 'Café Restaurant' },
      es: { name: 'Café Restaurante O Lombardês', categoryLabel: 'Café Restaurante' }
    },
    pathSlugs: ['via-da-prata']
  },
  {
    id: 'cafe-vilarica',
    category: 'eat',
    contact: '',
    latlng: [41.2321956, -7.1217131],
    i18n: {
      pt: { name: 'Café Vilariça', categoryLabel: 'Café' },
      en: { name: 'Café Vilariça', categoryLabel: 'Coffee Shop' },
      es: { name: 'Café Vilariça', categoryLabel: 'Chiringuito' }
    },
    url: 'https://www.tripadvisor.pt/Restaurants-g1022881-Vila_Flor_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['alem-douro', 'vilarica']
  },
  {
    id: 'cafe-da-santa-joana',
    category: 'eat',
    contact: '',
    latlng: [41.5518339, -6.8741514],
    i18n: {
      pt: { name: 'Café da Santa Joana', categoryLabel: 'Café' },
      en: { name: 'Café da Santa Joana', categoryLabel: 'Coffee Shop' },
      es: { name: 'Café da Santa Joana', categoryLabel: 'Chiringuito' }
    },
    url: 'https://www.tripadvisor.pt/Restaurant_Review-g1022879-d15025983-Reviews-Santa_Joana-Macedo_de_Cavaleiros_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['albufeira-do-azibo', 'ecopista-do-tua']
  },
  {
    id: 'capela-nossa-senhora-da-cabeca',
    category: 'see',
    contact: '',
    latlng: [41.7795681, -6.8221033],
    i18n: {
      pt: { name: 'Capela Nossa Senhora da Cabeça', categoryLabel: 'Capela' },
      en: { name: 'Our Lady of Cabeça Chapel', categoryLabel: 'Chapel' },
      es: { name: 'Capilla Nuestra Señora de la Cabeza', categoryLabel: 'Capilla' }
    },
    url: 'https://www.rotaterrafria.com/pages/222/?geo_article_id=6857',
    pathSlugs: ['ecopista-do-tua', 'linha-do-tua']
  },
  {
    id: 'capela-nossa-senhora-da-ribeira',
    category: 'see',
    contact: '',
    latlng: [41.7341153, -6.5759631],
    i18n: {
      pt: { name: 'Capela Nossa Senhora da Ribeira', categoryLabel: 'Capela' },
      en: { name: 'Our Lady of Ribeira Chapel', categoryLabel: 'Chapel' },
      es: { name: 'Capilla Nuestra Señora de la Ribera', categoryLabel: 'Capilla' }
    },
    url: 'https://www.rotaterrafria.com/geo_artigo-49/capela-de-nossa-senhora-da-ribeira-santuario-de-nossa-senhora-da-ribeira',
    pathSlugs: ['via-da-prata']
  },
  {
    id: 'capela-nossa-senhora-do-pereiro',
    category: 'see',
    contact: '',
    latlng: [41.6725189, -6.8319211],
    i18n: {
      pt: { name: 'Capela Nossa Senhora do Pereiro', categoryLabel: 'Capela' },
      en: { name: 'Our Lady of Pereiro Chapel', categoryLabel: 'Chapel' },
      es: { name: 'Capilla Nuestra Señora del Pereiro', categoryLabel: 'Capilla' }
    },
    url: 'https://www.rotaterrafria.com/geo_artigo-49/parque-de-merendas-de-santa-comba-de-rossas',
    pathSlugs: ['ecopista-do-tua', 'linha-do-tua']
  },
  {
    id: 'cascata-de-vilar-de-ledra',
    category: 'camp',
    contact: '',
    latlng: [41.5008561, -7.1219225],
    i18n: {
      pt: { name: 'Cascata de Vilar de Ledra', categoryLabel: 'Cascata' },
      en: { name: 'Cascata de Vilar de Ledra', categoryLabel: 'Waterfall' },
      es: { name: 'Cascata de Vilar de Ledra', categoryLabel: 'Cascada' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['ecopista-do-tua']
  },
  {
    id: 'castelo-de-braganca',
    category: 'see',
    contact: '',
    latlng: [41.8042503, -6.7492964],
    i18n: {
      pt: { name: 'Castelo de Bragança', categoryLabel: 'Castelo' },
      en: { name: 'Bragança Castle', categoryLabel: 'Castle' },
      es: { name: 'Castillo de Bragança', categoryLabel: 'Castillo' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['ecopista-do-tua', 'linha-do-tua', 'via-da-prata']
  },
  {
    id: 'castelo-de-longroiva',
    category: 'see',
    contact: '',
    latlng: [40.9637622, -7.2085858],
    i18n: {
      pt: { name: 'Castelo de Longroiva', categoryLabel: 'Monumento' },
      en: { name: 'Castelo de Longroiva', categoryLabel: 'Monument' },
      es: { name: 'Castelo de Longroiva', categoryLabel: 'Monumento' }
    },
    url: 'https://www.cm-fozcboa.pt/visitar/castelodemarialva/',
    pathSlugs: ['aldeias-historicas']
  },
  {
    id: 'castelo-de-marialva',
    category: 'see',
    contact: '',
    latlng: [40.9138597, -7.2322206],
    i18n: {
      pt: { name: 'Castelo de Marialva', categoryLabel: 'Monumento' },
      en: { name: 'Castelo de Marialva', categoryLabel: 'Monument' },
      es: { name: 'Castelo de Marialva', categoryLabel: 'Monumento' }
    },
    url: 'https://www.cm-fozcboa.pt/visitar/castelodemarialva/',
    pathSlugs: ['aldeias-historicas']
  },
  {
    id: 'cervejaria-dom',
    category: 'eat',
    contact: '967983398',
    latlng: [41.5433628, -6.8982536],
    i18n: {
      pt: { name: 'Cervejaria Dom', categoryLabel: 'Cervejaria' },
      en: { name: 'Cervejaria Dom', categoryLabel: 'Pub' },
      es: { name: 'Cervejaria Dom', categoryLabel: 'Cervejaria' }
    },
    url: 'https://www.tripadvisor.pt/Restaurant_Review-g1022879-d12140409-Reviews-Cervejaria_Dom-Macedo_de_Cavaleiros_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['albufeira-do-azibo', 'ecopista-do-tua']
  },
  {
    id: 'cervejaria-loreiro',
    category: 'eat',
    contact: '',
    latlng: [41.5086356, -7.0400039],
    i18n: {
      pt: { name: 'Cervejaria Loreiro', categoryLabel: 'Café' },
      en: { name: 'Cervejaria Loreiro', categoryLabel: 'Coffee Shop' },
      es: { name: 'Cervejaria Loreiro', categoryLabel: 'Chiringuito' }
    },
    url: 'https://www.tripadvisor.pt/Restaurant_Review-g1022879-d15025981-Reviews-Cervejaria_Loreiro-Macedo_de_Cavaleiros_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['carvalhais', 'ecopista-do-tua']
  },
  {
    id: 'douro-elegance-suites',
    category: 'sleep',
    contact: '',
    latlng: [41.1800289, -7.1123531],
    i18n: {
      pt: { name: 'Douro Elegance Suites', categoryLabel: 'Hotel' },
      en: { name: 'Douro Elegance Suites', categoryLabel: 'Hotel' },
      es: { name: 'Douro Elegance Suites', categoryLabel: 'Hotel' }
    },
    url: 'https://www.booking.com/hotel/pt/quintinha-do-casal-douro-elegance-suites.pt-pt.html',
    pathSlugs: ['vilarica']
  },
  {
    id: 'etapa-1',
    category: 'see',
    contact: '',
    latlng: [41.7341153, -6.5759631],
    i18n: {
      pt: { name: 'Etapa 1', categoryLabel: 'Quintanilha > Bragança' },
      en: { name: 'Stage 1', categoryLabel: 'Quintanilha > Bragança' },
      es: { name: 'Etapa 1', categoryLabel: 'Quintanilha > Bragança' }
    },
    url: '/path/caminho-noiva-real/via-da-prata',
    pathSlugs: ['caminho-noiva-real']
  },
  {
    id: 'etapa-2',
    category: 'see',
    contact: '',
    latlng: [41.8042503, -6.7492964],
    i18n: {
      pt: { name: 'Etapa 2', categoryLabel: 'Bragança > Santa Comba de Rossas' },
      en: { name: 'Stage 2', categoryLabel: 'Bragança > Santa Comba de Rossas' },
      es: { name: 'Etapa 2', categoryLabel: 'Bragança > Santa Comba de Rossas' }
    },
    url: '/path/caminho-noiva-real/linha-do-tua',
    pathSlugs: ['caminho-noiva-real']
  },
  {
    id: 'etapa-3',
    category: 'see',
    contact: '',
    latlng: [41.6687511, -6.8243661],
    i18n: {
      pt: { name: 'Etapa 3', categoryLabel: 'Santa Comba de Rossas > Macedo de Cavaleiros' },
      en: { name: 'Stage 3', categoryLabel: 'Santa Comba de Rossas > Macedo de Cavaleiros' },
      es: { name: 'Etapa 3', categoryLabel: 'Santa Comba de Rossas > Macedo de Cavaleiros' }
    },
    url: '/path/caminho-noiva-real/albufeira-do-azibo',
    pathSlugs: ['caminho-noiva-real']
  },
  {
    id: 'etapa-4',
    category: 'see',
    contact: '',
    latlng: [41.5356639, -6.9582678],
    i18n: {
      pt: { name: 'Etapa 4', categoryLabel: 'Macedo de Cavaleiros > Mirandela' },
      en: { name: 'Stage 4', categoryLabel: 'Macedo de Cavaleiros > Mirandela' },
      es: { name: 'Etapa 4', categoryLabel: 'Macedo de Cavaleiros > Mirandela' }
    },
    url: '/path/caminho-noiva-real/carvalhais',
    pathSlugs: ['caminho-noiva-real']
  },
  {
    id: 'etapa-5',
    category: 'see',
    contact: '',
    latlng: [41.4852383, -7.1865272],
    i18n: {
      pt: { name: 'Etapa 5', categoryLabel: 'Mirandela > Vila Flor' },
      en: { name: 'Stage 5', categoryLabel: 'Mirandela > Vila Flor' },
      es: { name: 'Etapa 5', categoryLabel: 'Mirandela > Vila Flor' }
    },
    url: '/path/caminho-noiva-real/vila-flor',
    pathSlugs: ['caminho-noiva-real']
  },
  {
    id: 'etapa-6',
    category: 'see',
    contact: '',
    latlng: [41.3087581, -7.1605386],
    i18n: {
      pt: { name: 'Etapa 6', categoryLabel: 'Vila Flor > Vila Nova de Foz Côa' },
      en: { name: 'Stage 6', categoryLabel: 'Vila Flor > Vila Nova de Foz Côa' },
      es: { name: 'Etapa 6', categoryLabel: 'Vila Flor > Vila Nova de Foz Côa' }
    },
    url: '/path/caminho-noiva-real/vila-flor',
    pathSlugs: ['caminho-noiva-real']
  },
  {
    id: 'etapa-7',
    category: 'see',
    contact: '',
    latlng: [41.0932089, -7.1403022],
    i18n: {
      pt: { name: 'Etapa 7', categoryLabel: 'Vila Nova de Foz Côa > Marialva' },
      en: { name: 'Stage 7', categoryLabel: 'Vila Nova de Foz Côa > Marialva' },
      es: { name: 'Etapa 7', categoryLabel: 'Vila Nova de Foz Côa > Marialva' }
    },
    url: '/path/caminho-noiva-real/vila-flor',
    pathSlugs: ['caminho-noiva-real']
  },
  {
    id: 'etapa-8',
    category: 'see',
    contact: '',
    latlng: [40.9138597, -7.2322206],
    i18n: {
      pt: { name: 'Etapa 8', categoryLabel: 'Marialva > Trancoso' },
      en: { name: 'Stage 8', categoryLabel: 'Marialva > Trancoso' },
      es: { name: 'Etapa 8', categoryLabel: 'Marialva > Trancoso' }
    },
    url: '/path/caminho-noiva-real/vila-flor',
    pathSlugs: ['caminho-noiva-real']
  },
  {
    id: 'final',
    category: 'see',
    contact: '',
    latlng: [40.7772222, -7.3508333],
    i18n: {
      pt: { name: 'Final', categoryLabel: 'Trancoso' },
      en: { name: 'Final', categoryLabel: 'Trancoso' },
      es: { name: 'Final', categoryLabel: 'Trancoso' }
    },
    url: '/path/caminho-noiva-real/vila-flor',
    pathSlugs: ['caminho-noiva-real']
  },
  {
    id: 'fonte-da-concelha',
    category: 'camp',
    contact: '',
    latlng: [40.9615086, -7.2146467],
    i18n: {
      pt: { name: 'Fonte da Concelha', categoryLabel: 'Área de descanso' },
      en: { name: 'Fonte da Concelha', categoryLabel: 'Rest Area' },
      es: { name: 'Fonte da Concelha', categoryLabel: 'Área de descanso' }
    },
    url: 'https://www.cm-fozcboa.pt/visitar/fontedaconcelha/',
    pathSlugs: ['aldeias-historicas']
  },
  {
    id: 'glamping-hills',
    category: 'sleep',
    contact: '',
    latlng: [41.6687511, -6.8243661],
    i18n: {
      pt: { name: 'Glamping Hills', categoryLabel: 'Glamping' },
      en: { name: 'Glamping Hills', categoryLabel: 'Glamping' },
      es: { name: 'Glamping Hills', categoryLabel: 'Glamping' }
    },
    url: 'https://www.booking.com/hotel/pt/glamping-hills.html',
    pathSlugs: ['albufeira-do-azibo', 'linha-do-tua']
  },
  {
    id: 'grande-hotel-dom-dinis',
    category: 'sleep',
    contact: '',
    latlng: [41.4852383, -7.1865272],
    i18n: {
      pt: { name: 'Grande Hotel Dom Dinis', categoryLabel: 'Hotel' },
      en: { name: 'Grande Hotel Dom Dinis', categoryLabel: 'Hotel' },
      es: { name: 'Grande Hotel Dom Dinis', categoryLabel: 'Hotel' }
    },
    url: 'https://www.booking.com/hotel/pt/grande-dom-dinis.html',
    pathSlugs: ['alem-douro', 'carvalhais', 'ecopista-do-tua', 'vila-flor']
  },
  {
    id: 'hotel-alendouro',
    category: 'sleep',
    contact: '+351 278 421 236',
    latlng: [41.5356639, -6.9582678],
    i18n: {
      pt: { name: 'Hotel Alendouro', categoryLabel: 'Hotel' },
      en: { name: 'Hotel Alendouro', categoryLabel: 'Hotel' },
      es: { name: 'Hotel Alendouro', categoryLabel: 'Hotel' }
    },
    url: 'https://www.booking.com/hotel/pt/alendouro.html',
    pathSlugs: ['albufeira-do-azibo', 'carvalhais']
  },
  {
    id: 'hotel-povoa-d-alem-sabor',
    category: 'sleep',
    contact: '',
    latlng: [41.3087581, -7.1605386],
    i18n: {
      pt: { name: 'Hotel Póvoa D\'Além Sabor', categoryLabel: 'Hotel' },
      en: { name: 'Hotel Póvoa D\'Além Sabor', categoryLabel: 'Hotel' },
      es: { name: 'Hotel Póvoa D\'Além Sabor', categoryLabel: 'Hotel' }
    },
    url: 'https://www.booking.com/hotel/pt/povoa-dalem-sabor.pt-pt.html',
    pathSlugs: ['vila-flor', 'vilarica']
  },
  {
    id: 'mosteiro-de-castro-de-avelas',
    category: 'see',
    contact: '',
    latlng: [41.7989544, -6.8045408],
    i18n: {
      pt: { name: 'Mosteiro de Castro de Avelãs', categoryLabel: 'Mosteiro' },
      en: { name: 'Monastery of Castro de Avelãs', categoryLabel: 'Monastery' },
      es: { name: 'Monasterio de Castro de Avelãs', categoryLabel: 'Monasterio' }
    },
    url: 'https://www.rotaterrafria.com/geo_artigo-49/igreja-mosteiro-de-castro-de-avelas',
    pathSlugs: ['ecopista-do-tua', 'linha-do-tua']
  },
  {
    id: 'necropole-de-antas-de-moreira-de-rei',
    category: 'see',
    contact: '',
    latlng: [40.8299464, -7.3197639],
    i18n: {
      pt: { name: 'Necrópole de Antas de Moreira de Rei', categoryLabel: 'Monumento' },
      en: { name: 'Necrópole de Antas de Moreira de Rei', categoryLabel: 'Monument' },
      es: { name: 'Necrópole de Antas de Moreira de Rei', categoryLabel: 'Monumento' }
    },
    pathSlugs: ['aldeias-historicas']
  },
  {
    id: 'parque-de-campismo-3-rios-maravilha',
    category: 'camp',
    contact: '',
    latlng: [41.5065744, -7.1973061],
    i18n: {
      pt: { name: 'Parque de Campismo 3 Rios Maravilha', categoryLabel: 'Parque de Campismo' },
      en: { name: '3 Rios Maravilha Campsite', categoryLabel: 'Campsite' },
      es: { name: 'Parque de Campismo 3 Rios Maravilha', categoryLabel: 'Parque de Campismo' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['ecopista-do-tua']
  },
  {
    id: 'parque-de-campismo-municipal-de-braganca',
    category: 'camp',
    contact: '',
    latlng: [41.8437164, -6.7472542],
    i18n: {
      pt: { name: 'Parque de Campismo Municipal de Bragança', categoryLabel: 'Parque de Campismo' },
      en: { name: 'Bragança Municipal Campsite', categoryLabel: 'Campsite' },
      es: { name: 'Parque de Campismo Municipal de Bragança', categoryLabel: 'Parque de Campismo' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['ecopista-do-tua', 'via-da-prata']
  },
  {
    id: 'parque-de-campismo-de-meda',
    category: 'camp',
    contact: '',
    latlng: [40.9695625, -7.2593847],
    i18n: {
      pt: { name: 'Parque de Campismo de Mêda', categoryLabel: 'Parque de Campismo' },
      en: { name: 'Parque de Campismo de Mêda', categoryLabel: 'Campsite' },
      es: { name: 'Parque de Campismo de Mêda', categoryLabel: 'Parque de Campismo' }
    },
    url: 'https://www.cm-fozcboa.pt/visitar/fontedaconcelha/',
    pathSlugs: ['aldeias-historicas']
  },
  {
    id: 'parque-de-merendas-entre-as-pontes',
    category: 'camp',
    contact: '',
    latlng: [41.5395614, -6.8926325],
    i18n: {
      pt: { name: 'Parque de Merendas Entre as Pontes', categoryLabel: 'Parque de Merendas' },
      en: { name: 'Parque de Merendas Entre as Pontes', categoryLabel: 'Picnic Area' },
      es: { name: 'Parque de Merendas Entre as Pontes', categoryLabel: 'Parque de Merendas' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['ecopista-do-tua']
  },
  {
    id: 'pedra-do-solisticio',
    category: 'see',
    contact: '',
    latlng: [40.9944672, -7.1764589],
    i18n: {
      pt: { name: 'Pedra do Solistício', categoryLabel: 'Monumento Natural' },
      en: { name: 'Solstice Stone', categoryLabel: 'Natural Monument' },
      es: { name: 'Piedra del Solsticio', categoryLabel: 'Monumento Natural' }
    },
    url: 'https://www.cm-fozcboa.pt/visitar/pedradosolistio/',
    pathSlugs: ['aldeias-historicas']
  },
  {
    id: 'pousada-da-juventude-de-braganca',
    category: 'sleep',
    contact: '',
    latlng: [41.8047794, -6.7666436],
    i18n: {
      pt: { name: 'Pousada da Juventude de Bragança', categoryLabel: 'Pousada' },
      en: { name: 'Youth Hostel Bragança', categoryLabel: 'Youth Hostel' },
      es: { name: 'Albergue de Juventud Bragança', categoryLabel: 'Albergue de Juventud' }
    },
    url: 'https://www.booking.com/Share-9cqSbu',
    pathSlugs: ['ecopista-do-tua', 'linha-do-tua', 'via-da-prata']
  },
  {
    id: 'pousada-da-juventude-de-vila-nova-de-foz-coa',
    category: 'sleep',
    contact: '',
    latlng: [41.0932089, -7.1403022],
    i18n: {
      pt: { name: 'Pousada da Juventude de Vila Nova de Foz Côa', categoryLabel: 'Pousada' },
      en: { name: 'Pousada da Juventude de Vila Nova de Foz Côa', categoryLabel: 'Hostel' },
      es: { name: 'Pousada da Juventude de Vila Nova de Foz Côa', categoryLabel: 'Albergue' }
    },
    url: 'https://www.booking.com/hotel/pt/pousada-de-juventude-de-vila-nova-de-foz-coa.pt-pt.html',
    pathSlugs: ['aldeias-historicas', 'alem-douro', 'casamento', 'castelos', 'vilarica']
  },
  {
    id: 'praia-fluvial-do-colado',
    category: 'camp',
    contact: '',
    latlng: [41.7516603, -6.5638403],
    i18n: {
      pt: { name: 'Praia Fluvial do Colado', categoryLabel: 'Praia Fluvial' },
      en: { name: 'Colado River Beach', categoryLabel: 'River Beach' },
      es: { name: 'Playa Fluvial del Colado', categoryLabel: 'Playa Fluvial' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['via-da-prata']
  },
  {
    id: 'restaurante-lombada',
    category: 'eat',
    contact: '',
    latlng: [41.8175611, -6.629425],
    i18n: {
      pt: { name: 'Restaurante Lombada', categoryLabel: 'Restaurante' },
      en: { name: 'Lombada Restaurant', categoryLabel: 'Restaurant' },
      es: { name: 'Restaurante Lombada', categoryLabel: 'Restaurante' }
    },
    url: 'https://www.tripadvisor.pt/Restaurant_Review-g189172-d7099427-Reviews-Restaurante_Lombada-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['via-da-prata']
  },
  {
    id: 'restaurante-o-abel',
    category: 'eat',
    contact: '',
    latlng: [41.8013253, -6.6975608],
    i18n: {
      pt: { name: 'Restaurante O Abel', categoryLabel: 'Restaurante' },
      en: { name: 'O Abel Restaurant', categoryLabel: 'Restaurant' },
      es: { name: 'Restaurante O Abel', categoryLabel: 'Restaurante' }
    },
    url: 'https://www.tripadvisor.pt/Restaurant_Review-g7067429-d3853386-Reviews-Restaurante_O_Abel-Gimonde_Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['via-da-prata']
  },
  {
    id: 'restaurante-o-gaveto',
    category: 'eat',
    contact: '',
    latlng: [41.1305511, -7.1220975],
    i18n: {
      pt: { name: 'Restaurante O Gaveto', categoryLabel: 'Restaurante' },
      en: { name: 'O Gaveto Restaurant', categoryLabel: 'Restaurant' },
      es: { name: 'Restaurante O Gaveto', categoryLabel: 'Restaurante' }
    },
    url: 'https://www.tripadvisor.pt/Restaurant_Review-g1022883-d14144415-Reviews-Restaurante_O_Gaveto-Vila_Nova_de_Foz_Coa_Guarda_District_Central_Portugal.html',
    pathSlugs: ['alem-douro', 'vilarica']
  },
  {
    id: 'serra-de-nogueira',
    category: 'eat',
    contact: '+351 273 313 074',
    latlng: [41.7645117, -6.8031222],
    i18n: {
      pt: { name: 'Serra de Nogueira', categoryLabel: 'Restaurante' },
      en: { name: 'Serra de Nogueira', categoryLabel: 'Restaurant' },
      es: { name: 'Serra de Nogueira', categoryLabel: 'Restaurante' }
    },
    url: 'https://www.tripadvisor.es/Restaurant_Review-g15239495-d8842309-Reviews-Serra_Da_Nogueira-Nogueira_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['linha-do-tua']
  },
  {
    id: 'solar-de-almeidinha-trancoso',
    category: 'sleep',
    contact: '',
    latlng: [40.7772222, -7.3508333],
    i18n: {
      pt: { name: 'Solar de Almeidinha (Trancoso)', categoryLabel: 'Turismo de Habitação' },
      en: { name: 'Solar de Almeidinha (Trancoso)', categoryLabel: 'Guesthouse' },
      es: { name: 'Solar de Almeidinha (Trancoso)', categoryLabel: 'Turismo de Habitación' }
    },
    url: 'https://www.booking.com/hotel/pt/solar-de-almeidinha.pt-pt.html',
    pathSlugs: ['aldeias-historicas']
  },
  {
    id: 'parque-merendas-frechas',
    category: 'camp',
    contact: '',
    latlng: [41.4075975, -7.1626200],
    i18n: {
      pt: { name: 'Parque Merendas Frechas', categoryLabel: 'Parque Merendas' },
      en: { name: 'Parque Merendas Frechas', categoryLabel: 'Picnic Area' },
      es: { name: 'Parque Merendas Frechas', categoryLabel: 'Parque Merendas' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['vila-flor', 'alem-douro']
  },
  {
    id: 'cafe-praia-fluvial-frechas',
    category: 'eat',
    contact: '',
    latlng: [41.4090561, -7.1634719],
    i18n: {
      pt: { name: 'Café Praia Fluvial Frechas', categoryLabel: 'Café' },
      en: { name: 'Café Praia Fluvial Frechas', categoryLabel: 'Café' },
      es: { name: 'Café Praia Fluvial Frechas', categoryLabel: 'Café' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['vila-flor', 'alem-douro']
  },
  {
    id: 'capeça-nossa-senhora-do-aviso',
    category: 'see',
    contact: '',
    latlng: [41.4024694, -7.1381892],
    i18n: {
      pt: { name: 'Cabeça Nossa Senhora do Aviso', categoryLabel: 'Santuário' },
      en: { name: 'Cabeça Nossa Senhora do Aviso', categoryLabel: 'Sanctuary' },
      es: { name: 'Cabeça Nossa Senhora do Aviso', categoryLabel: 'Santuario' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['vila-flor', 'alem-douro']
  },
  {
    id: 'cafe-madureira',
    category: 'eat',
    contact: '',
    latlng: [41.3588267, -7.1196881],
    i18n: {
      pt: { name: 'Café Madureira', categoryLabel: 'Café' },
      en: { name: 'Café Madureira', categoryLabel: 'Café' },
      es: { name: 'Café Madureira', categoryLabel: 'Café' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['vila-flor', 'alem-douro']
  },
  {
    id: 'parque-campismo-vila-flor',
    category: 'camp',
    contact: '',
    latlng: [41.2924725, -7.1713483],
    i18n: {
      pt: { name: 'Parque Campismo Vila Flor', categoryLabel: 'Parque Campismo' },
      en: { name: 'Parque Campismo Vila Flor', categoryLabel: 'Campsite' },
      es: { name: 'Parque Campismo Vila Flor', categoryLabel: 'Parque Campismo' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['alem-douro']
  },
  {
    id: 'albufeira-do-arco-e-ribeiro-grande',
    category: 'see',
    contact: '',
    latlng: [41.2462406, -7.1295147],
    i18n: {
      pt: { name: 'Albufeira do Arco e Ribeiro Grande', categoryLabel: 'Barragem' },
      en: { name: 'Albufeira do Arco e Ribeiro Grande', categoryLabel: 'Dam' },
      es: { name: 'Albufeira do Arco e Ribeiro Grande', categoryLabel: 'Presa' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['alem-douro', 'vilarica']
  },
  {
    id: 'cafe-primavera',
    category: 'eat',
    contact: '',
    latlng: [41.1867469, -7.1221517],
    i18n: {
      pt: { name: 'Café Primavera', categoryLabel: 'Café' },
      en: { name: 'Café Primavera', categoryLabel: 'Café' },
      es: { name: 'Café Primavera', categoryLabel: 'Café' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['vilarica', 'alem-douro']
  },
  {
    id: 'cafe-lameirinho',
    category: 'eat',
    contact: '',
    latlng: [41.1850972, -7.1176189],
    i18n: {
      pt: { name: 'Café Lameirinho', categoryLabel: 'Café' },
      en: { name: 'Café Lameirinho', categoryLabel: 'Café' },
      es: { name: 'Café Lameirinho', categoryLabel: 'Café' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['vilarica', 'alem-douro']
  },
  {
    id: 'cafe-foz-sabor',
    category: 'eat',
    contact: '',
    latlng: [41.1776800, -7.1119644],
    i18n: {
      pt: { name: 'Café Foz Sabor', categoryLabel: 'Café' },
      en: { name: 'Café Foz Sabor', categoryLabel: 'Café' },
      es: { name: 'Café Foz Sabor', categoryLabel: 'Café' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['vilarica', 'alem-douro']
  },
  {
    id: 'parque-merendas-foz-sabor',
    category: 'camp',
    contact: '',
    latlng: [41.1781969, -7.1092894],
    i18n: {
      pt: { name: 'Parque Merendas Foz Sabor', categoryLabel: 'Parque Merendas' },
      en: { name: 'Parque Merendas Foz Sabor', categoryLabel: 'Picnic Area' },
      es: { name: 'Parque Merendas Foz Sabor', categoryLabel: 'Parque Merendas' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['alem-douro']
  },
  {
    id: 'albufeira-azibo',
    category: 'see',
    contact: '',
    latlng: [41.5630722, -6.8891061],
    i18n: {
      pt: { name: 'Albufeira do Azibo', categoryLabel: 'Barragem' },
      en: { name: 'Albufeira do Azibo', categoryLabel: 'Dam' },
      es: { name: 'Albufeira do Azibo', categoryLabel: 'Presa' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['albufeira-do-azibo', 'ecopista-do-tua']
  },
  {
    id: 'parque-merendas-fermentaos',
    category: 'camp',
    contact: '',
    latlng: [41.6200931, -6.8211461],
    i18n: {
      pt: { name: 'Parque Merendas Fermentaos', categoryLabel: 'Parque Merendas' },
      en: { name: 'Parque Merendas Fermentaos', categoryLabel: 'Picnic Area' },
      es: { name: 'Parque Merendas Fermentaos', categoryLabel: 'Parque Merendas' }
    },
    url: 'https://www.tripadvisor.pt/Attraction_Review-g189172-d2394650-Reviews-Castelo_de_Braganca-Braganca_Braganca_District_Northern_Portugal.html',
    pathSlugs: ['ecopista-do-tua']
  }
];

/** Get all POIs for a given path or stage slug */
export function getPoisForSlug(slug: string): POI[] {
  return pois.filter(poi => poi.pathSlugs?.includes(slug));
}
