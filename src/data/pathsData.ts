import type { Path } from '../types';

export const paths: Path[] = [
  {
    slug: 'caminho-noiva-real',
    type: 'hiking',
    image: '/caminho-noiva-real.png',
    details: {
      duration: 8,
      durationUnit: 'days',
      distance: 236,
      elevation: 4079,
      minAltitude: 110,
      maxAltitude: 900,
      difficultyKey: 'common.difficulty.hard',
      i18n: {
        pt: {
          title: 'Caminho da Noiva Real',
          badge: 'Recomendado',
          description: 'Onde a lenda floresceu. Siga os passos da jovem Isabel na sua entrada em Portugal: uma jornada de Quintanilha a Trancoso que transformou paisagens em jardins e uma Infanta em Rainha.',
          narrativeTitle: 'O Caminho que Floresceu com a Passagem da Rainha',
          content: [
            'Em Junho de 1282, as águas do Rio Maçãs, em Quintanilha, testemunharam a entrada de uma comitiva que mudaria o destino de Portugal. A jovem Isabel de Aragão atravessava a Raia para encontrar o seu destino e o seu futuro esposo, o Rei Poeta, D. Dinis.',
            'Este percurso não é apenas uma travessia geográfica; é uma imersão na lenda. Ao passar por Vila Flor (então chamada Póvoa do Além-Sabor), conta a tradição que a beleza da futura rainha e o seu encanto pelas paisagens foram de tal ordem que o próprio Rei, mais tarde, rebatizou a vila em sua honra. É um trilho marcado pelo aroma do mato e pela dureza do granito, que suaviza ao chegar às imponentes muralhas de Trancoso, onde o casamento foi ratificado com o esplendor das núpcias reais.',
            'Ao percorrer este caminho, não está apenas a caminhar por Trás-os-Montes e pelas Beiras; está a refazer a logística de uma comitiva medieval, a sentir a brisa que sopra no planalto e a descobrir por que razão, 700 anos depois, ainda chamamos "Santa" àquela que entrou por estas terras como noiva.'
          ]
        },
        en: {
          title: "Royal Bride's Way",
          badge: 'Recommended',
          description: 'Where the legend blossomed. Follow the steps of young Elizabeth on her entry into Portugal: a journey from Quintanilha to Trancoso that transformed landscapes into gardens and an Infanta into a Queen.',
          narrativeTitle: "The Way that Blossomed with the Queen's Passing",
          content: [
            "In June 1282, the waters of the Maçãs River in Quintanilha witnessed the entrance of a retinue that would change the destiny of Portugal. Young Elizabeth of Aragon crossed the Raia to meet her destiny and her future husband, the Poet King, Denis.",
            "This route is not just a geographical crossing; it is an immersion in legend. When passing through Vila Flor (then called Póvoa do Além-Sabor), tradition says that the beauty of the future queen and her enchantment with the landscapes were such that the King himself later renamed the village in her honor. It is a trail marked by the scent of the scrubland and the hardness of the granite, which softens as it reaches the imposing walls of Trancoso, where the marriage was ratified with the splendor of the royal nuptials.",
            "By walking this path, you are not just walking through Trás-os-Montes and the Beiras; you are redoing the logistics of a medieval retinue, feeling the breeze blowing on the plateau and discovering why, 700 years later, we still call 'Saint' that who entered these lands as a bride."
          ]
        },
        es: {
          title: 'Camino de la Novia Real',
          badge: 'Recomendado',
          description: 'Donde la leyenda floreció. Siga los pasos de la joven Isabel en su entrada a Portugal: una jornada de Quintanilha a Trancoso que transformó paisajes en jardines y una Infanta en Reina.',
          narrativeTitle: 'El Camino que Floreció con el Paso de la Reina',
          content: [
            'En junio de 1282, las aguas del río Maçãs, en Quintanilha, testemunharam la entrada de una comitiva que cambiaría el destino de Portugal. La joven Isabel de Aragón cruzaba la Raya para encontrar su destino y su futuro esposo, el Rey Poeta, D. Dinis.',
            'Este percurso no es solo una travesía geográfica; es una inmersión en la leyenda. Al pasar por Vila Flor (entonces llamada Póvoa do Além-Sabor), cuenta la tradición que la belleza de la futura reina y su encanto por los paisajes fueron de tal orden que el propio Rey, más tarde, rebautizó la villa en su honor. Es un sendero marcado por el aroma del monte y por la dureza del granito, que se suaviza al llegar a las imponentes murallas de Trancoso, donde el matrimonio fue ratificado con el esplendor de las nupcias reales.',
            'Al recorrer este camino, no está simplemente caminando por Trás-os-Montes y las Beiras; está rehaciendo la logística de una comitiva medieval, sintiendo la brisa que sopla en la meseta y descubriendo por qué razón, 700 después, todavía llamamos "Santa" a la que entró por estas tierras como novia.'
          ]
        }
      },
      pois: [],
    }
  },
  {
    slug: 'via-da-prata',
    type: 'hiking',
    image: '/via-da-prata.jpg',
    parentSlug: 'caminho-noiva-real',
    details: {
      duration: 8,
      durationUnit: 'hours',
      distance: 27.2,
      elevation: 628,
      minAltitude: 516,
      maxAltitude: 880,
      difficultyKey: 'common.difficulty.moderate',
      i18n: {
        pt: {
          title: '1. Via da Prata',
          badge: 'Peregrinação',
          description: 'Onde Isabel conheceu o seu povo. Cruze a fronteira de Quintanilha e sinta a emoção do primeiro encontro da Rainha com as terras e as gentes de Portugal. Percurso comum com a variante portuguesa da rota da prata do caminho de santiago',
          narrativeTitle: 'O Caminho que Floresceu com a Passagem da Rainha',
          content: [
            'Em Junho de 1282, as águas do Rio Maçãs, em Quintanilha, testemunharam a entrada de uma comitiva que mudaria o destino de Portugal. A jovem Isabel de Aragão atravessava a Raia para encontrar o seu destino e o seu futuro esposo, o Rei Poeta, D. Dinis.',
            'Este percurso não é apenas uma travessia geográfica; é uma imersão na lenda. Ao passar por Vila Flor (então chamada Póvoa do Além-Sabor), conta a tradição que a beleza da futura rainha e o seu encanto pelas paisagens foram de tal ordem que o próprio Rei, mais tarde, rebatizou a vila em sua honra. É um trilho marcado pelo aroma do mato e pela dureza do granito, que suaviza ao chegar às imponentes muralhas de Trancoso, onde o casamento foi ratificado com o esplendor das núpcias reais.',
            'Ao percorrer este caminho, não está apenas a caminhar por Trás-os-Montes e pelas Beiras; está a refazer a logística de uma comitiva medieval, a sentir a brisa que sopra no planalto e a descobrir por que razão, 700 anos depois, ainda chamamos "Santa" àquela que entrou por estas terras como noiva.'
          ]
        },
        en: {
          title: "1. Silver Path",
          badge: 'Peregrination',
          description: 'Where a Queen met her people. Cross the border at Quintanilha and relive the emotion of Isabel’s first encounter with the land and people of Portugal. Common path with the Portuguese variant of the silver path of the Santiago pilgrimage',
          narrativeTitle: "The Way that Blossomed with the Queen's Passing",
          content: [
            "In June 1282, the waters of the Maçãs River in Quintanilha witnessed the entrance of a retinue that would change the destiny of Portugal. Young Elizabeth of Aragon crossed the Raia to meet her destiny and her future husband, the Poet King, Denis.",
            "This route is not just a geographical crossing; it is an immersion in legend. When passing through Vila Flor (then called Póvoa do Além-Sabor), tradition says that the beauty of the future queen and her enchantment with the landscapes were such that the King himself later renamed the village in her honor. It is a trail marked by the scent of the scrubland and the hardness of the granite, which softens as it reaches the imposing walls of Trancoso, where the marriage was ratified with the splendor of the royal nuptials.",
            "By walking this path, you are not just walking through Trás-os-Montes and the Beiras; you are redoing the logistics of a medieval retinue, feeling the breeze blowing on the plateau and discovering why, 700 years later, we still call 'Saint' that who entered these lands as a bride."
          ]
        },
        es: {
          title: '1. Vía de la Plata',
          badge: 'Peregrinação',
          description: 'Donde Isabel conoció a su pueblo. Cruce la frontera de Quintanilha y sienta la emoción del primer encuentro de la Reina con las tierras y las gentes de Portugal. Ruta común con la variante portuguesa de la ruta de la plata del camino de Santiago',
          narrativeTitle: 'El Camino que Floreció con el Paso de la Reina',
          content: [
            'En junio de 1282, las aguas del río Maçãs, en Quintanilha, testemunharam la entrada de una comitiva que cambiaría el destino de Portugal. La joven Isabel de Aragón cruzaba la Raya para encontrar su destino y su futuro esposo, el Rey Poeta, D. Dinis.',
            'Este percurso no es solo una travesía geográfica; es una inmersión en la leyenda. Al pasar por Vila Flor (entonces llamada Póvoa do Além-Sabor), cuenta la tradición que la belleza de la futura reina y su encanto por los paisajes fueron de tal orden que el propio Rey, más tarde, rebautizó la villa en su honor. Es un sendero marcado por el aroma del monte y por la dureza del granito, que se suaviza al llegar a las imponentes murallas de Trancoso, donde el matrimonio fue ratificado con el esplendor de las nupcias reales.',
            'Al recorrer este camino, no está simplemente caminando por Trás-os-Montes y las Beiras; está rehaciendo la logística de una comitiva medieval, sintiendo la brisa que sopla en la meseta y descubriendo por qué razón, 700 después, todavía llamamos "Santa" a la que entró por estas tierras como novia.'
          ]
        }
      },
      pois: [
        {
          category: 'sleep',
          contact: '+351 966 048 612 (Sr. Álvaro Lopes)',
          latlng: [41.7507436, -6.5715525],
          i18n: {
            pt: { name: 'Albergue de Peregrinos de Quintanilha', categoryLabel: 'Albergue' },
            en: { name: "Peregrino's Guesthouse Quintanilha", categoryLabel: 'Guesthouse' },
            es: { name: 'Albergue de Peregrinos Quintanilha', categoryLabel: 'Albergue' }
          },
          url: 'https://turismo.cm-braganca.pt/paisagens-e-biodiversidade/percursos-e-rotas/caminho-de-santiago'
        },
        {
          category: 'sleep',
          contact: '+351 273 240 020',
          latlng: [41.8038025, -6.7505367],
          i18n: {
            pt: { name: 'Albergue de Peregrinos de Bragança', categoryLabel: 'Albergue' },
            en: { name: "Peregrino's Guesthouse Bragança", categoryLabel: 'Guesthouse' },
            es: { name: 'Albergue de Peregrinos Bragança', categoryLabel: 'Albergue' }
          },
          url: 'https://turismo.cm-braganca.pt/paisagens-e-biodiversidade/percursos-e-rotas/caminho-de-santiago'
        },
        {
          category: 'eat',
          contact: '',
          latlng: [41.8013253, -6.6975608],
          i18n: {
            pt: { name: 'Restaurante O Abel', categoryLabel: 'Restaurante' },
            en: { name: "O Abel Restaurant", categoryLabel: 'Restaurant' },
            es: { name: 'Restaurante O Abel', categoryLabel: 'Restaurante' }
          },
          url: 'https://www.tripadvisor.pt/Restaurant_Review-g7067429-d3853386-Reviews-Restaurante_O_Abel-Gimonde_Braganca_Braganca_District_Northern_Portugal.html'
        },
        {
          category: 'eat',
          contact: '',
          latlng: [41.8175611, -6.6294250],
          i18n: {
            pt: { name: 'Restaurante Lombada', categoryLabel: 'Restaurante' },
            en: { name: "Lombada Restaurant", categoryLabel: 'Restaurant' },
            es: { name: 'Restaurante Lombada', categoryLabel: 'Restaurante' }
          },
          url: 'https://www.tripadvisor.pt/Restaurant_Review-g189172-d7099427-Reviews-Restaurante_Lombada-Braganca_Braganca_District_Northern_Portugal.html'
        }
      ]
    }
  },
  {
    slug: 'linha-do-tua',
    type: 'hiking',
    image: '/linha-do-tua.jpg',
    parentSlug: 'caminho-noiva-real',
    details: {
      duration: 8,
      durationUnit: 'hours',
      distance: 27.6,
      elevation: 518,
      minAltitude: 657,
      maxAltitude: 860,
      difficultyKey: 'common.difficulty.moderate',
      i18n: {
        pt: {
          title: '2. Linha do Tua',
          badge: 'Ecopista',
          description: 'Uma etapa de contrastes que une o Castelo de Bragança à serenidade de Santa Comba de Rossas. Destaque para o misticismo do Mosteiro de Castro de Avelãs e a fluidez da Ecopista da Linha do Tua, num percurso acessível e carregado de história.',
          narrativeTitle: 'Deixe as muralhas para trás e abrace o silêncio dos claustros. Siga o caminho onde a antiga Linha do Tua e a hospitalidade milenar dos monges se unem para guiar os seus passos',
          content: [
            'A jornada começa sob a sombra da Torre de Menagem de Bragança, mas rapidamente o cenário muda para a espiritualidade do Mosteiro de Castro de Avelãs.',
            'Este é, possivelmente, o ponto mais importante da etapa: um exemplar único em Portugal de arquitetura românica em tijolo, onde se acredita que a jovem ',
            'Rainha Santa Isabel tenha encontrado repouso e abrigo na sua primeira noite após Bragança. O silêncio dos seus absides circulares convida a uma pausa contemplativa.',
            'O caminho segue por onde outrora o vapor e o ferro da Linha do Tua rasgavam a paisagem, agora convertido em ecopista, um caminho suave, plano e rodeado de natureza. Caminhar ou pedalar por este antigo traçado ferroviário é deslizar pela história, ',
            'O percurso segue depois pela Capela de Pereiro, um pequeno tesouro de devoção local, onde dizem as gentes que a Rainha Santa Isabel tenha feito uma paragem para rezar.',
            'Terminando na tranquilidade rural de Santa Comba de Rossas, onde o tempo parece ter outra velocidade.'
          ]
        },
        en: {
          title: "2. Tua Line",
          badge: 'Old Railway',
          description: 'A stage of contrasts connecting Bragança Castle to the serenity of Santa Comba de Rossas. Highlights include the mysticism of the Castro de Avelãs Monastery and the smooth flow of the Tua Line Ecopista, on an accessible and history-filled path.',
          narrativeTitle: "Leave the fortress walls behind and embrace the silence of the cloisters. Follow the path where the historic Tua Railway line and the ancient hospitality of monks unite to guide your journey.",
          content: [
            'The journey begins under the shadow of Bragança\'s Keep, but the scenery quickly shifts towards the spirituality of the Castro de Avelãs Monastery. This is arguably the most significant point of the stage: a unique example in Portugal of brick Romanesque architecture, where it is believed the young Saint Queen Isabel found rest and shelter on her first night after Bragança. The silence of its circular apses invites a contemplative pause.',
            'The path then leads to the Pereiro Chapel, a small gem of local devotion, before merging with the modernity of the Ecopista. Where the steam and iron of the Tua Railway Line once cut through the landscape, there is now a smooth, flat path surrounded by nature. Walking or cycling along this former railway track is like gliding through history, ending in the rural tranquility of Santa Comba de Rossas, where time seems to move at a different pace.'
          ]
        },
        es: {
          title: '2. Línea del Tua',
          badge: 'Vía verde',
          description: 'Una etapa de contrastes que une el Castillo de Braganza con la serenidad de Santa Comba de Rossas. Destaca el misticismo del Monasterio de Castro de Avelãs y la fluidez de la Vía Verde del Tua, en un recorrido accesible y cargado de historia.',
          narrativeTitle: 'Deje atrás las murallas y abrace el silencio de los claustros. Siga el camino donde la antigua Vía del Tua y la hospitalidad milenaria de los monjes se unen para guiar sus pasos.',
          content: [
            'La jornada comienza bajo la sombra de la Torre del Homenaje de Braganza, pero el escenario cambia rápidamente hacia la espiritualidad del Monasterio de Castro de Avelãs. Este es, posiblemente, el punto más relevante de la etapa: un ejemplar único en Portugal de arquitectura románica en ladrillo, donde se cree que la joven Reina Santa Isabel encontró reposo y cobijo en su primera noche tras dejar Braganza. El silencio de sus ábsides circulares invita a una pausa contemplativa.',
            'El recorrido continúa por la Capilla de Pereiro, un pequeño tesoro de devoción local, antes de entregarse a la modernidad de la Vía Verde (Ecopista). Donde antaño el vapor y el hierro de la Línea del Tua surcaban el paisaje, hoy existe un camino suave, llano y rodeado de naturaleza. Caminar o pedalear por este antiguo trazado ferroviario es deslizarse por la historia, terminando en la tranquilidad rural de Santa Comba de Rossas, donde el tiempo parece transcurrir a otra velocidad.'
          ]
        }
      },
      pois: [
        {
          category: 'sleep',
          contact: '+351 273 240 020',
          latlng: [41.8038025, -6.7505367],
          i18n: {
            pt: { name: 'Albergue de Peregrinos de Bragança', categoryLabel: 'Albergue' },
            en: { name: "Peregrino's Guesthouse Bragança", categoryLabel: 'Guesthouse' },
            es: { name: 'Albergue de Peregrinos Bragança', categoryLabel: 'Albergue' }
          },
          url: 'https://www.booking.com/hotel/pt/pousada-de-juventude-de-braganca.html'
        },
        {
          category: 'sleep',
          contact: '+351 938 712 419',
          latlng: [41.6687511, -6.8243661],
          i18n: {
            pt: { name: 'Glamping Hills', categoryLabel: 'Glamping' },
            en: { name: "Glamping Hills", categoryLabel: 'Glamping' },
            es: { name: 'Glamping Hills', categoryLabel: 'Glamping' }
          },
          url: 'https://www.booking.com/hotel/pt/glamping-hills.html'
        },
        {
          category: 'eat',
          contact: '+351 273 313 074',
          latlng: [41.7645117, -6.8031222],
          i18n: {
            pt: { name: 'Serra de Nogueira', categoryLabel: 'Restaurante' },
            en: { name: "Serra de Nogueira", categoryLabel: 'Restaurant' },
            es: { name: 'Serra de Nogueira', categoryLabel: 'Restaurante' }
          },
          url: 'https://www.tripadvisor.pt/Restaurant_Review-g189172-d12304859-Reviews-Restaurante_Serra_de_Nogueira-Braganca_Braganca_District_Northern_Portugal.html'
        },
        {
          category: 'eat',
          contact: '',
          latlng: [41.6629528, -6.8278150],
          i18n: {
            pt: { name: 'Café Reboledo', categoryLabel: 'Café' },
            en: { name: "Café Reboledo", categoryLabel: 'Coffee Shop' },
            es: { name: 'Café Reboledo', categoryLabel: 'Chiringuito' }
          },
          url: 'https://www.tripadvisor.pt/Restaurant_Review-g1024346-d25435017-Reviews-Cafe_Reboledo-Santa_Comba_de_Rossas_Braganca_District_Northern_Portugal.html'
        }
      ]
    }
  },
  {
    slug: 'albufeira-do-azibo',
    type: 'hiking',
    image: '/albufeira-do-azibo.png',
    parentSlug: 'caminho-noiva-real',
    details: {
      duration: 7,
      durationUnit: 'hours',
      distance: 28.5,
      elevation: 172,
      minAltitude: 550,
      maxAltitude: 900,
      difficultyKey: 'common.difficulty.easy',
      i18n: {
        pt: {
          title: '3. Entre Máscaras e Águas Azuis',
          badge: 'Paisagem Protegida',
          description: 'Uma travessia que liga o mundo rural e místico à pureza da natureza. Passando pelas aldeias típicas de Salsas e Salselas, o percurso culmina na Albufeira do Azibo, um oásis de biodiversidade no coração do Geopark Terras de Cavaleiros.',
          narrativeTitle: 'Siga o brilho no horizonte. Deixe as tradições ancestrais de Salsas e Salselas guiarem os seus passos até ao encontro mágico com as águas serenas do Azibo.',
          content: [
            'Partindo de Santa Comba de Rossas, o caminho entra numa zona onde a terra respira tradição. A primeira paragem é Salsas, terra de rituais pagãos e dos icónicos Caretos, cujos chocalhos e máscaras coloridas mantêm viva uma energia que a Rainha Santa certamente teria achado fascinante. Logo adiante, Salselas recebe-nos com o seu Museu Rural, um guardião da memória transmontana que preserva os ciclos da agricultura e da vida comunitária.',
            'Mas o grande "clímax" desta etapa é a chegada à Albufeira do Azibo. Classificada como Paisagem Protegida e parte do Geopark Terras de Cavaleiros (UNESCO), este espelho de água é um santuário de paz. Onde outrora os pastores guiavam os rebanhos, hoje o caminhante encontra praias fluviais de águas límpidas e uma fauna vibrante. O percurso termina em Macedo de Cavaleiros, a cidade que serve de porta de entrada para este paraíso natural, unindo o conforto moderno à força da terra.'
          ]
        },
        en: {
          title: "3. Between Masks and Blue Waters",
          badge: 'Protected Landscape',
          description: 'A journey connecting the rural and mystical world to the purity of nature. Passing through the traditional villages of Salsas and Salselas, the trail culminates at the Azibo Reservoir, an oasis of biodiversity in the heart of the Terras de Cavaleiros Geopark.',
          narrativeTitle: "Follow the glow on the horizon. Let the ancestral traditions of Salsas and Salselas guide your steps toward a magical encounter with the serene waters of Azibo.",
          content: [
            'Starting from Santa Comba de Rossas, the path enters an area where the land breathes tradition. The first stop is Salsas, a land of pagan rituals and the iconic Caretos, whose cowbells and colorful masks keep alive an energy that the Saint Queen would surely have found fascinating. Shortly after, Salselas welcomes us with its Rural Museum, a guardian of Transmontano memory that preserves the cycles of agriculture and community life.',
            'However, the great climax of this stage is the arrival at the Azibo Reservoir. Classified as a Protected Landscape and part of the UNESCO Terras de Cavaleiros Geopark, this mirror of water is a sanctuary of peace. Where shepherds once guided their flocks, travelers now find river beaches with crystal-clear waters and vibrant wildlife. The journey ends in Macedo de Cavaleiros, the gateway town to this natural paradise, blending modern comfort with the raw power of the land.'
          ]
        },
        es: {
          title: '3. Entre Máscaras y Águas Azules',
          badge: 'Paisaje Protegido',
          description: 'A journey connecting the rural and mystical world to the purity of nature. Passing through the traditional villages of Salsas and Salselas, the trail culminates at the Azibo Reservoir, an oasis of biodiversity in the heart of the Terras de Cavaleiros Geopark.',
          narrativeTitle: 'Siga el brillo en el horizonte. Deje que las tradiciones ancestrales de Salsas y Salselas guíen sus pasos hasta el encuentro mágico con las serenas aguas del Azibo.',
          content: [
            'Partiendo de Santa Comba de Rossas, el camino se adentra en una zona donde la tierra respira tradición. La primera parada es Salsas, tierra de rituales paganos y de los icónicos Caretos, cuyos cencerros y máscaras coloridas mantienen viva una energía que la Reina Santa seguramente habría encontrado fascinante. Poco después, Salselas nos recibe con su Museo Rural, un guardián de la memoria transmontana que preserva los ciclos de la agricultura y la vida comunitaria.',
            'Pero el gran "clímax" de esta etapa es la llegada al Embalse del Azibo. Clasificado como Paisaje Protegido y parte del Geopark Terras de Cavaleiros (UNESCO), este espejo de agua es un santuario de paz. Donde antaño los pastores guiaban sus rebaños, hoy el caminante encuentra playas fluviales de aguas cristalinas y una fauna vibrante. El recorrido termina en Macedo de Cavaleiros, la ciudad que sirve de puerta de entrada a este paraíso natural, uniendo el confort moderno con la fuerza de la tierra.'
          ]
        }
      },
      pois: [
        {
          category: 'sleep',
          contact: '+351 938 712 419',
          latlng: [41.6687511, -6.8243661],
          i18n: {
            pt: { name: 'Glamping Hills', categoryLabel: 'Glamping' },
            en: { name: "Glamping Hills", categoryLabel: 'Glamping' },
            es: { name: 'Glamping Hills', categoryLabel: 'Glamping' }
          },
          url: 'https://www.booking.com/hotel/pt/glamping-hills.html'
        },
        {
          category: 'eat',
          contact: '967983398',
          latlng: [41.5433628, -6.8982536],
          i18n: {
            pt: { name: 'Cervejaria Dom', categoryLabel: 'Cervejaria' },
            en: { name: 'Cervejaria Dom', categoryLabel: 'Pub' },
            es: { name: 'Cervejaria Dom', categoryLabel: 'Cervejaria' }
          },
          url: 'https://www.tripadvisor.pt/Restaurant_Review-g1022879-d12140409-Reviews-Cervejaria_Dom-Macedo_de_Cavaleiros_Braganca_District_Northern_Portugal.html'
        },
        {
          category: 'eat',
          contact: '',
          latlng: [41.5518339, -6.8741514],
          i18n: {
            pt: { name: 'Café da Santa Joana', categoryLabel: 'Café' },
            en: { name: 'Café da Santa Joana', categoryLabel: 'Coffee Shop' },
            es: { name: 'Café da Santa Joana', categoryLabel: 'Chiringuito' }
          },
          url: 'https://www.tripadvisor.pt/Restaurant_Review-g1022879-d15025983-Reviews-Santa_Joana-Macedo_de_Cavaleiros_Braganca_District_Northern_Portugal.html'
        },
        {
          category: 'sleep',
          contact: '+351 278 421 236',
          latlng: [41.5356639, -6.9582678],
          i18n: {
            pt: { name: 'Hotel Alendouro', categoryLabel: 'Hotel' },
            en: { name: 'Hotel Alendouro', categoryLabel: 'Hotel' },
            es: { name: 'Hotel Alendouro', categoryLabel: 'Hotel' }
          },
          url: 'https://www.booking.com/hotel/pt/alendouro.html'
        }
      ]
    }
  },
  {
    slug: 'carvalhais',
    type: 'hiking',
    image: '/mirandela.jpg',
    parentSlug: 'caminho-noiva-real',
    details: {
      duration: 6,
      durationUnit: 'hours',
      distance: 26,
      elevation: 202,
      minAltitude: 220,
      maxAltitude: 560,
      difficultyKey: 'common.difficulty.easy',
      i18n: {
        pt: {
          title: '4. Carvalhais até ao Tua',
          badge: 'Gastronomia',
          description: 'Um percurso de declive suave que acompanha a Ribeira de Carvalhais até ao encontro com o Rio Tua. Atravessando as aldeias típicas de Cernadela, Vila Verdinho e Vale de Lobo, a etapa termina na "Cidade Jardim", Mirandela, famosa pela sua ponte medieval e pela Alheira.',
          narrativeTitle: 'Siga o curso das águas e o perfume das oliveiras. Do vale silencioso de Carvalhais até à icónica ponte de Mirandela, descubra um caminho feito de calma e tradição.',
          content: [
            'Deixando Macedo de Cavaleiros, o trilho mergulha no vale da Ribeira de Carvalhais, um corredor natural de frescura e sombra. O caminho é pontuado por pequenas aldeias onde o tempo parece ter parado: em Cernadela, o granito das casas conta histórias de pastores; em Vila Verdinho e Vale de Lobo, as oliveiras dominam a paisagem, produzindo o "ouro líquido" (azeite) que é a alma da região.',
            'Ao chegar a Mirandela, o cenário abre-se para o majestoso Rio Tua. A entrada na cidade faz-se sob o olhar da histórica Ponte Velha, cujos arcos medievais teriam sido familiares à época da Rainha Santa. Mas Mirandela é, acima de tudo, um destino de sabores. Foi aqui que a Alheira nasceu — uma invenção astuta dos cristãos-novos para escaparem à Inquisição, fingindo comer carne de porco. Hoje, este enchido é o ex-líbris de uma cidade que recebe o caminhante com mesas fartas e jardins floridos à beira-rio.'
          ]
        },
        en: {
          title: "4. Carvalhais to Tua",
          badge: 'Gastronomy',
          description: 'A gentle downhill path following the Carvalhais Stream until it meets the Tua River. Crossing the traditional villages of Cernadela, Vila Verdinho, and Vale de Lobo, the stage ends in the "Garden City" of Mirandela, famous for its medieval bridge and the Alheira sausage.',
          narrativeTitle: "Follow the flow of the waters and the scent of the olive trees. From the silent Carvalhais valley to the iconic bridge of Mirandela, discover a path of peace and tradition.",
          content: [
            'Leaving Macedo de Cavaleiros behind, the trail plunges into the Carvalhais Stream valley, a natural corridor of coolness and shade. The path is dotted with small villages where time seems to have stood still: in Cernadela, the granite houses tell stories of shepherds; in Vila Verdinho and Vale de Lobo, olive groves dominate the landscape, producing the "liquid gold" (olive oil) that is the soul of the region.',
            'As you arrive in Mirandela, the scenery opens up to the majestic Tua River. You enter the city under the gaze of the historic Old Bridge, whose medieval arches would have been familiar during the Saint Queen\'s era. But Mirandela is, above all, a destination of flavors. It was here that the Alheira was born—a clever invention by New Christians to escape the Inquisition by pretending to eat pork. Today, this smoked sausage is the hallmark of a city that welcomes travelers with hearty meals and blooming gardens by the river.'
          ]
        },
        es: {
          title: '4. Carvalhais hasta el Tua',
          badge: 'Gastronomía',
          description: 'Un recorrido de pendiente suave que acompaña la Ribera de Carvalhais hasta su encuentro con el Río Tua. Atravesando las aldeas típicas de Cernadela, Vila Verdinho y Vale de Lobo, la etapa termina en la "Ciudad Jardín", Mirandela, famosa por su puente medieval y su Alheira.',
          narrativeTitle: 'Siga el curso de las aguas y el perfume de los olivos. Desde el valle silencioso de Carvalhais hasta el icónico puente de Mirandela, descubra un camino hecho de calma y tradición.',
          content: [
            'Saliendo de Macedo de Cavaleiros, el sendero se sumerge en el valle de la Ribera de Carvalhais, un corredor natural de frescura y sombra. El camino está salpicado de pequeñas aldeas donde el tiempo parece haberse detenido: en Cernadela, el granito de las casas cuenta historias de pastores; en Vila Verdinho y Vale de Lobo, los olivos dominan el paisaje, produciendo el "oro líquido" (aceite) que es el alma de la región.',
            'Al llegar a Mirandela, el escenario se abre al majestuoso Río Tua. La entrada a la ciudad se realiza bajo la mirada del histórico Puente Viejo, cuyos arcos medievales habrían sido familiares en la época de la Reina Santa. Pero Mirandela es, ante todo, un destino de sabores. Fue aquí donde nació la Alheira, un ingenioso invento de los cristianos nuevos para escapar de la Inquisición, fingiendo comer carne de cerdo. Hoy, este embutido es el estandarte de una ciudad que recibe al caminante con mesas generosas y jardines floridos junto al río.'
          ]
        }
      },
      pois: [
        {
          category: 'sleep',
          contact: '+351 278 421 236',
          latlng: [41.5356639, -6.9582678],
          i18n: {
            pt: { name: 'Hotel Alendouro', categoryLabel: 'Hotel' },
            en: { name: 'Hotel Alendouro', categoryLabel: 'Hotel' },
            es: { name: 'Hotel Alendouro', categoryLabel: 'Hotel' }
          },
          url: 'https://www.booking.com/hotel/pt/alendouro.html'
        },
        {
          category: 'eat',
          contact: '',
          latlng: [41.5086356, -7.0400039],
          i18n: {
            pt: { name: 'Cervejaria Loreiro', categoryLabel: 'Café' },
            en: { name: 'Cervejaria Loreiro', categoryLabel: 'Coffee Shop' },
            es: { name: 'Cervejaria Loreiro', categoryLabel: 'Chiringuito' }
          },
          url: 'https://www.tripadvisor.pt/Restaurant_Review-g1022879-d15025981-Reviews-Cervejaria_Loreiro-Macedo_de_Cavaleiros_Braganca_District_Northern_Portugal.html'
        },
        {
          category: 'sleep',
          contact: '',
          latlng: [41.4852383, -7.1865272],
          i18n: {
            pt: { name: 'Grande Hotel Dom Dinis', categoryLabel: 'Hotel' },
            en: { name: 'Grande Hotel Dom Dinis', categoryLabel: 'Hotel' },
            es: { name: 'Grande Hotel Dom Dinis', categoryLabel: 'Hotel' }
          },
          url: 'https://www.booking.com/hotel/pt/grande-dom-dinis.html'
        },
      ]
    }
  },
  {
    slug: 'vila-flor',
    type: 'hiking',
    image: '/vila-flor.png',
    parentSlug: 'caminho-noiva-real',
    details: {
      duration: 8,
      durationUnit: 'hours',
      distance: 30.5,
      elevation: 865,
      minAltitude: 200,
      maxAltitude: 646,
      difficultyKey: 'common.difficulty.hard',
      i18n: {
        pt: {
          title: '5. Da Cidade Jardim a Vila Flor',
          badge: 'Romântico',
          description: 'Um percurso de ascensão e revelação. Começando pelas margens serenas do Rio Tua, o caminho sobe pelas aldeias de Vale de Sancha e Roios, culminando no Santuário de Nossa Senhora da Lapa, antes da descida triunfal para Vila Flor.',
          narrativeTitle: 'Siga os passos da Rainha que renomeou o horizonte. Deixe as margens do Tua e suba até onde o olhar de Isabel transformou uma povoação num jardim eterno.',
          content: [
            'A jornada começa com a frescura do Rio Tua, seguindo o percurso pedestre que serpenteia as margens antes de iniciar a subida para o coração do concelho de Vila Flor. À medida que ganhamos altitude, passamos por aldeias que são autênticos guardiões do tempo, como Vale de Sancha, com a sua capela isolada, e Vale Frechoso, onde as oliveiras e amendoeiras começam a pintar a paisagem.',
            'O ponto alto — literal e emocional — é a chegada ao Santuário de Nossa Senhora da Lapa. Construído numa zona de penedos dramáticos, este lugar oferece uma visão total sobre a vila. Diz a lenda que, ao chegar aqui em 1281, a Rainha Santa Isabel ficou tão deslumbrada com a beleza do vale florido que exclamou: "Oh, que bela flor!". Naquele instante, a antiga Póvoa de Além-Sabor morreu para dar lugar a Vila Flor. Terminar esta etapa é descer em direção a esse batismo real, sentindo a mesma brisa que encantou a "Rainha da Paz".'
          ]
        },
        en: {
          title: "5. From the Garden City to Vila Flor",
          badge: 'Romantic',
          description: 'A journey of ascent and revelation. Starting from the serene banks of the Tua River, the path climbs through the villages of Vale de Sancha and Roios, reaching its peak at the Sanctuary of Our Lady of Lapa before the triumphal descent into Vila Flor.',
          narrativeTitle: "Follow the footsteps of the Queen who renamed the horizon. Leave the banks of the Tua and climb to where Isabel's gaze transformed a village into an eternal garden.",
          content: [
            'The day begins with the cool breeze of the Tua River, following the riverside path before starting the climb toward the heart of Vila Flor. As you gain altitude, you pass through villages that are true guardians of time, such as Vale de Sancha and Vale Frechoso, where olive and almond trees begin to define the landscape.',
            'The high point—both literally and emotionally—is the arrival at the Sanctuary of Our Lady of Lapa. Built among dramatic boulders, this site offers a breathtaking view of the town below. Legend has it that upon arriving here in 1281, Saint Queen Isabel was so dazzled by the beauty of the flowering valley that she exclaimed: "Oh, what a beautiful flower!". In that moment, the old Póvoa de Além-Sabor was renamed Vila Flor. Ending this stage means descending into that royal legacy, feeling the same breeze that once enchanted the Queen.'
          ]
        },
        es: {
          title: '5. De la Ciudad Jardín a Vila Flor',
          badge: 'Romántico',
          description: 'Un recorrido de ascensión y revelación. Comenzando por las serenas orillas del Río Tua, el camino sube por las aldeas de Vale de Sancha y Roios, culminando en el Santuario de Nuestra Señora de la Lapa, antes del descenso triunfal hacia Vila Flor.',
          narrativeTitle: 'Siga los pasos de la Reina que renombró el horizonte. Deje las orillas del Tua y suba hasta donde la mirada de Isabel transformó un pueblo en un jardín eterno.',
          content: [
            'La jornada comienza con el frescor del Río Tua, siguiendo el sendero que serpentea por sus orillas antes de iniciar la subida hacia el corazón del municipio de Vila Flor. A medida que ganamos altura, atravesamos aldeas que son auténticos guardianes del tiempo, como Vale de Sancha y Vale Frechoso, donde los olivos y almendros empiezan a pintar el paisaje.',
            'El punto culminante es la llegada al Santuario de Nuestra Señora de la Lapa. Construido entre rocas dramáticas, este lugar ofrece una vista panorámica de la villa. Cuenta la leyenda que, al llegar aquí en 1281, Isabel de Aragón quedó tan deslumbrada por la belleza del valle que exclamó: "¡Oh, qué bella flor!". En ese instante, la antigua Póvoa de Além-Sabor desapareció para dar lugar a Vila Flor. Terminar esta etapa es descender hacia ese bautismo real, sintiendo la misma brisa que encantó a la Reina.'
          ]
        }
      },
      pois: [
        {
          category: 'sleep',
          contact: '',
          latlng: [41.4852383, -7.1865272],
          i18n: {
            pt: { name: 'Grande Hotel Dom Dinis', categoryLabel: 'Hotel' },
            en: { name: 'Grande Hotel Dom Dinis', categoryLabel: 'Hotel' },
            es: { name: 'Grande Hotel Dom Dinis', categoryLabel: 'Hotel' }
          },
          url: 'https://www.booking.com/hotel/pt/grande-dom-dinis.pt-pt.html'
        },
        {
          category: 'eat',
          contact: '',
          latlng: [41.3191656, -7.1336156],
          i18n: {
            pt: { name: 'Café ', categoryLabel: 'Café' },
            en: { name: 'Café ', categoryLabel: 'Coffee Shop' },
            es: { name: 'Café ', categoryLabel: 'Chiringuito' }
          }
        },
        {
          category: 'eat',
          contact: '',
          latlng: [41.3591022, -7.1216444],
          i18n: {
            pt: { name: 'Café ', categoryLabel: 'Café' },
            en: { name: 'Café ', categoryLabel: 'Coffee Shop' },
            es: { name: 'Café ', categoryLabel: 'Chiringuito' }
          }
        },
        {
          category: 'sleep',
          contact: '',
          latlng: [41.3087581, -7.1605386],
          i18n: {
            pt: { name: 'Hotel Póvoa D\'Além Sabor', categoryLabel: 'Hotel' },
            en: { name: 'Hotel Póvoa D\'Além Sabor', categoryLabel: 'Hotel' },
            es: { name: 'Hotel Póvoa D\'Além Sabor', categoryLabel: 'Hotel' }
          },
          url: 'https://www.booking.com/hotel/pt/povoa-dalem-sabor.pt-pt.html'
        },
      ]
    }
  },
  {
    slug: 'vilarica',
    type: 'hiking',
    image: '/vilarica.png',
    parentSlug: 'caminho-noiva-real',
    details: {
      duration: 10,
      durationUnit: 'hours',
      distance: 34.3,
      elevation: 621,
      minAltitude: 110,
      maxAltitude: 580,
      difficultyKey: 'common.difficulty.hard',
      i18n: {
        pt: {
          title: '6. O Vale dos Reis: De Vila Flor ao Douro',
          badge: 'Cortejo Real',
          description: 'A primeira jornada de D. Dinis e Isabel lado a lado. Das encostas de Vila Flor à fertilidade da Vilariça, culminando na mística travessia do Rio Douro em barcas rumo a Vila Nova de Foz Côa.',
          narrativeTitle: 'Sinta o pulsar do reino sob o olhar do casal real. Deixe-se encantar pela abundância do vale e pela força do rio que outrora se cruzava apenas com a coragem das barcas.',
          content: [
            'Descendo de Vila Flor, o percurso atravessa aldeias de fé e lenda como o Arco e o Nabo, onde o misticismo da Senhora do Campo parece abençoar o novo casal. Entramos então no Vale da Vilariça, o "Egito Transmontano", uma falha geológica que criou uma das terras mais férteis do mundo. É aqui, entre pomares e hortas de abundância bíblica, que a jovem Rainha e o Rei Poeta partilham os seus primeiros diálogos sobre o futuro de Portugal, enquanto o horizonte se abre lentamente para a grandiosidade do Douro.',
            'A chegada à Foz do Sabor marca o encontro épico das águas, mas o momento mais solene espera no Pocinho: a travessia do Rio Douro. Naquele tempo, sem as pontes que hoje conhecemos, a comitiva real cruzava o rio em barcas, um exercício de paciência e deslumbramento sobre o "rio de ouro". Ao atingir a margem sul, o caminho sobe até Vila Nova de Foz Côa, terra de gravuras e de xisto, que recebe os noivos como a porta de entrada para um território onde a arte e a história se fundem há milénios.'
          ]
        },
        en: {
          title: "6. The Valley of Kings: From Vila Flor to Douro",
          badge: 'Royal Procession',
          description: "The first journey of King Dinis and Queen Isabel side by side. From the slopes of Vila Flor to the fertility of Vilariça, culminating in the mystical crossing of the Douro River by ferry towards Vila Nova de Foz Côa.",
          narrativeTitle: "Feel the pulse of the kingdom through the eyes of the royal couple. Be enchanted by the abundance of the valley and the strength of the river that was once crossed only by the courage of the ferries.",
          content: [
            'Descending from Vila Flor, the path crosses villages of faith and legend such as Arco and Nabo, where the mysticism of Our Lady of the Field seems to bless the newlywed couple. We then enter the Vilariça Valley, the "Transmontano Egypt," a geological fault that created some of the most fertile lands in the world. Here, amidst orchards and vegetable gardens of biblical abundance, the young Queen and the Poet King shared their first dialogues about the future of Portugal, as the horizon slowly opened to the grandeur of the Douro.',
            'The arrival at Foz do Sabor marks the epic meeting of waters, but the most solemn moment awaits in Pocinho: the crossing of the Douro River. In those days, without the bridges we know today, the royal entourage crossed the river in ferries ("barcas"), an exercise in patience and awe over the "river of gold." Reaching the southern bank, the path climbs to Vila Nova de Foz Côa, a land of engravings and schist, which welcomed the betrothed as the gateway to a territory where art and history have merged for millennia.'
          ]
        },
        es: {
          title: '6. El Valle de los Reyes: De Vila Flor al Duero',
          badge: 'Cortejo Real',
          description: 'La primera jornada de Don Dinís e Isabel lado a lado. De las laderas de Vila Flor a la fertilidad de Vilariça, culminando en la mística travesía del río Duero en barcas hacia Vila Nova de Foz Côa.',
          narrativeTitle: 'Sienta el pulso del reino bajo la mirada de la pareja real. Déjese encantar por la abundancia del valle y la fuerza del río que antaño solo se cruzaba con la valentía de las barcas.',
          content: [
            'Descendiendo de Vila Flor, el recorrido atraviesa aldeas de fe y leyenda como Arco y Nabo, donde el misticismo de la Virgen del Campo parece bendecir a la nueva pareja. Entramos entonces en el Valle de Vilariça, el "Egipto Transmontano", una falla geológica que creó una de las tierras más fértiles del mundo. Es aquí, entre huertos y campos de abundancia bíblica, donde la joven Reina y el Rey Poeta comparten sus primeros diálogos sobre el futuro de Portugal, mientras el horizonte se abre lentamente ante la grandiosidad del Duero.',
            'La llegada a Foz do Sabor marca el encuentro épico de las aguas, pero el momento más solemne espera en Pocinho: el cruce del río Duero. En aquel tiempo, sin los puentes que hoy conocemos, la comitiva real cruzaba el río en barcas, un ejercicio de paciencia y asombro sobre el "río de oro". Al alcanzar la margen sur, el camino sube hasta Vila Nova de Foz Côa, tierra de grabados y esquisto, que recibe a los novios como la puerta de entrada a un territorio donde el arte y la historia se funden desde hace milenios.'
          ]
        }
      },
      pois: [
        {
          category: 'sleep',
          contact: '',
          latlng: [41.3087581, -7.1605386],
          i18n: {
            pt: { name: 'Hotel Póvoa D\'Além Sabor', categoryLabel: 'Hotel' },
            en: { name: 'Hotel Póvoa D\'Além Sabor', categoryLabel: 'Hotel' },
            es: { name: 'Hotel Póvoa D\'Além Sabor', categoryLabel: 'Hotel' }
          },
          url: 'https://www.booking.com/hotel/pt/povoa-dalem-sabor.pt-pt.html'
        },
        {
          category: 'eat',
          contact: '',
          latlng: [41.2671647, -7.1429250],
          i18n: {
            pt: { name: 'Bar da Capela', categoryLabel: 'Café' },
            en: { name: 'Bar da Capela', categoryLabel: 'Coffee Shop' },
            es: { name: 'Bar da Capela', categoryLabel: 'Chiringuito' }
          },
          url: 'https://www.tripadvisor.pt/Restaurants-g1022881-Vila_Flor_Braganca_District_Northern_Portugal.html'
        },
        {
          category: 'eat',
          contact: '',
          latlng: [41.2321956, -7.1217131],
          i18n: {
            pt: { name: 'Café Vilariça', categoryLabel: 'Café' },
            en: { name: 'Café Vilariça', categoryLabel: 'Coffee Shop' },
            es: { name: 'Café Vilariça', categoryLabel: 'Chiringuito' }
          },
          url: 'https://www.tripadvisor.pt/Restaurants-g1022881-Vila_Flor_Braganca_District_Northern_Portugal.html'
        },
        {
          category: 'sleep',
          contact: '',
          latlng: [41.1800289, -7.1123531],
          i18n: {
            pt: { name: 'Douro Elegance Suites', categoryLabel: 'Hotel' },
            en: { name: 'Douro Elegance Suites', categoryLabel: 'Hotel' },
            es: { name: 'Douro Elegance Suites', categoryLabel: 'Hotel' }
          },
          url: 'https://www.booking.com/hotel/pt/quintinha-do-casal-douro-elegance-suites.pt-pt.html'
        },
        {
          category: 'eat',
          contact: '',
          latlng: [41.1305511, -7.1220975],
          i18n: {
            pt: { name: 'Restaurante O Gaveto', categoryLabel: 'Restaurante' },
            en: { name: 'O Gaveto Restaurant', categoryLabel: 'Restaurant' },
            es: { name: 'Restaurante O Gaveto', categoryLabel: 'Restaurante' }
          },
          url: 'https://www.tripadvisor.pt/Restaurant_Review-g1022883-d14144415-Reviews-Restaurante_O_Gaveto-Vila_Nova_de_Foz_Coa_Guarda_District_Central_Portugal.html'
        },
        {
          category: 'sleep',
          contact: '',
          latlng: [41.0932089, -7.1403022],
          i18n: {
            pt: { name: 'Pousada da Juventude de Vila Nova de Foz Côa', categoryLabel: 'Pousada' },
            en: { name: 'Pousada da Juventude de Vila Nova de Foz Côa', categoryLabel: 'Hostel' },
            es: { name: 'Pousada da Juventude de Vila Nova de Foz Côa', categoryLabel: 'Albergue' }
          },
          url: 'https://www.booking.com/hotel/pt/pousada-de-juventude-de-vila-nova-de-foz-coa.pt-pt.html'
        },
      ]
    }
  },
  {
    slug: 'castelos',
    type: 'hiking',
    image: '/castelos.png',
    parentSlug: 'caminho-noiva-real',
    details: {
      duration: 9,
      durationUnit: 'hours',
      distance: 30.2,
      elevation: 785,
      minAltitude: 240,
      maxAltitude: 620,
      difficultyKey: 'common.difficulty.hard',
      i18n: {
        pt: {
          title: '7. Entre Muralhas e Memórias: De Côa a Marialva',
          badge: 'Cidadelas',
          description: 'Um mergulho no coração fortificado do reino. Deixe as margens do Côa para conquistar as alturas de Longroiva e a mística Marialva, onde o granito e a história se fundem sob o olhar de D. Dinis e Isabel.',
          narrativeTitle: 'Onde as pedras sussurram segredos de reis e cavaleiros. Siga o cortejo real por caminhos que unem as águas curativas de Longroiva à imponência eterna de Marialva.',
          content: [
            'Partindo de Vila Nova de Foz Côa, o caminho serpenteia por Muxagata, onde o xisto começa a dar lugar ao granito beirão. O horizonte é dominado pela silhueta do Castelo de Longroiva, uma antiga fortaleza templária que, à época da Rainha Santa, já era famosa pelas suas águas termais milagrosas. Diz a tradição que a paragem aqui não era apenas estratégica, mas um momento de descanso e cura, onde a comitiva real podia retemperar forças antes de enfrentar as cristas da Beira.',
            'O culminar da etapa é a subida ao "Monte da Esperança", onde repousa Marialva, uma das mais belas Aldeias Históricas de Portugal. Entrar nas suas muralhas ao lado de D. Dinis e Isabel é recuar ao tempo em que o castelo era o centro do mundo. Entre a Praça de Armas e a lendária "Cerca", a vila respira a mística de Maria Alva. Ao entardecer, quando a luz doura as pedras da alcáçova, percebe-se por que razão esta cidadela foi escolhida para vigiar o reino: do seu topo, o casal real podia contemplar a vastidão de um Portugal que crescia e se consolidava a cada passo.'
          ]
        },
        en: {
          title: '7. Among Walls and Memories: From Côa to Marialva',
          badge: 'Citadels',
          description: 'A journey into the fortified heart of the kingdom. Leave the banks of the Côa to conquer the heights of Longroiva and mystical Marialva, where granite and history merge under the gaze of D. Dinis and Isabel.',
          narrativeTitle: 'Where stones whisper secrets of kings and knights. Follow the royal procession through paths connecting the healing waters of Longroiva to the eternal grandeur of Marialva.',
          content: [
            'Leaving Vila Nova de Foz Côa, the path winds through Muxagata, where the schist of the valley begins to yield to Beira granite. The horizon is ruled by the silhouette of Longroiva Castle, an ancient Templar fortress which, in the time of the Saint Queen, was already famous for its miraculous thermal waters. Tradition says the stop here was not just strategic, but a moment of rest and healing, where the royal retinue could recover their strength before facing the mountain ridges.',
            'The climax of the stage is the ascent to "Monte da Esperança," home to Marialva, one of Portugal’s most beautiful Historical Villages. Stepping inside its walls alongside D. Dinis and Isabel is to return to a time when the castle was the center of the world. Between the Parade Ground and the legendary "Cerca," the village breathes the mysticism of Maria Alva. At dusk, when the light golds the fortress stones, one understands why this citadel was chosen to guard the realm: from its height, the royal couple could survey the vastness of a Portugal that grew and strengthened with every step.'
          ]
        },
        es: {
          title: '7. Entre Murallas y Memorias: De Côa a Marialva',
          badge: 'Ciudadelas',
          description: 'Una inmersión en el corazón fortificado del reino. Deje las orillas del Côa para conquistar las alturas de Longroiva y la mística Marialva, donde el granito y la historia se funden bajo la mirada de Don Dinís e Isabel.',
          narrativeTitle: 'Donde las piedras susurran secretos de reyes y caballeros. Siga el cortejo real por caminos que unen las aguas curativas de Longroiva a la imponencia eterna de Marialva.',
          content: [
            'Saliendo de Vila Nova de Foz Côa, el camino serpentea por Muxagata, donde el esquisto comienza a dar lugar al granito. El horizonte está dominado por la silueta del Castillo de Longroiva, una antigua fortaleza templaria que, en la época de la Reina Santa, ya era famosa por sus aguas termales milagrosas. Dice la tradición que la parada aquí no era solo estratégica, sino un momento de descanso y curación, donde la comitiva real podía reponer fuerzas antes de enfrentar las cumbres de la Beira.',
            'El punto culminante de la etapa es la subida al "Monte da Esperança", donde descansa Marialva, una de las Aldeas Históricas más bellas de Portugal. Entrar en sus murallas junto a Don Dinís e Isabel es retroceder al tiempo en que el castillo era el centro del mundo. Entre la Plaza de Armas y la legendaria "Cerca", la villa respira la mística de Maria Alva. Al atardecer, cuando la luz dora las piedras de la alcazaba, se comprende por qué esta ciudadela fue elegida para vigilar el reino.'
          ]
        }
      },
      pois: [
        {
          category: 'sleep',
          contact: '',
          latlng: [41.0932089, -7.1403022],
          i18n: {
            pt: { name: 'Pousada da Juventude de Vila Nova de Foz Côa', categoryLabel: 'Pousada' },
            en: { name: 'Pousada da Juventude de Vila Nova de Foz Côa', categoryLabel: 'Hostel' },
            es: { name: 'Pousada da Juventude de Vila Nova de Foz Côa', categoryLabel: 'Albergue' }
          },
          url: 'https://www.booking.com/hotel/pt/pousada-de-juventude-de-vila-nova-de-foz-coa.pt-pt.html'
        }
      ]
    }
  },
  {
    slug: 'casamento',
    type: 'hiking',
    image: '/caminho-noiva-real.png',
    parentSlug: 'caminho-noiva-real',
    details: {
      duration: 8,
      durationUnit: 'hours',
      distance: 29.7,
      elevation: 604,
      minAltitude: 490,
      maxAltitude: 900,
      difficultyKey: 'common.difficulty.hard',
      i18n: {
        pt: {
          title: '8. O Altar da Beira: De Marialva às Bodas de Trancoso',
          badge: 'Boda Real',
          description: 'O capítulo final da jornada da noiva. Uma travessia épica pelo planalto beirão, passando por Moreira de Rei, até ao encontro com o altar em Trancoso, onde Isabel e Dinis selaram o destino de um reino.',
          narrativeTitle: 'O horizonte abre-se para o dia mais esperado. Siga o caminho que transforma a Infanta em Rainha, cruzando terras de cavaleiros até às muralhas onde o amor se fez história.',
          content: [
            'Ao deixar Marialva, o caminho estende-se pelo planalto, passando por Rabaçal e aproximando-se da monumental Moreira de Rei. Aqui, o tempo parece cristalizado no granito: o seu castelo altivo e as misteriosas sepulturas antropomórficas escavadas na rocha rodeiam a igreja românica, criando um cenário de uma solenidade quase mística. Era este o Portugal profundo e resiliente que acolhia o cortejo real, um território de fronteira onde cada pedra guarda ecos de reconquista e de honra.',
            'A chegada a Trancoso é o clímax emocional desta rota. Ao avistar as imponentes muralhas da "Vila das Bodas", o caminhante revive o espírito de Junho de 1282. Foi aqui, na Igreja de São Bartolomeu, que D. Dinis e Isabel de Aragão trocaram promessas e uniram dois reinos. Diz-se que o Rei Poeta ficou tão encantado com a receção da vila que a ofereceu como dote à sua Rainha. Cruzar as Portas d’El Rei é, por isso, completar um destino: o fim da caminhada de uma jovem princesa e o início do reinado eterno daquela que seria, para sempre, a nossa Rainha Santa.'
          ]
        },
        en: {
          title: "8. The Altar of Beira: From Marialva to the Wedding of Trancoso",
          badge: 'Royal Wedding',
          description: "The final chapter of the bride's journey. An epic crossing through the high plains of Beira, passing through Moreira de Rei, until the meeting at the altar in Trancoso, where Isabel and Dinis sealed the destiny of a kingdom.",
          narrativeTitle: "The horizon opens to the most awaited day. Follow the path that transforms the Princess into a Queen, crossing lands of knights to the walls where love became history.",
          content: [
            'Leaving Marialva behind, the path stretches across the plateau, passing through Rabaçal and approaching the monumental Moreira de Rei. Here, time seems crystallized in granite: its proud castle and mysterious anthropomorphic graves carved into the rock surround the Romanesque church, creating a scene of almost mystical solemnity. This was the deep and resilient Portugal that welcomed the royal procession, a frontier territory where every stone holds echoes of reconquest and honor.',
            'The arrival at Trancoso is the emotional climax of this route. Catching sight of the imposing walls of the "Wedding Town," the traveler relives the spirit of June 1282. It was here, in the Church of Saint Bartholomew, that King Dinis and Isabel of Aragon exchanged vows and united two kingdoms. It is said that the Poet King was so enchanted by the town’s welcome that he gave it to his Queen as part of her dowry. Crossing the King’s Gates (Portas d’El Rei) is, therefore, the completion of a destiny: the end of a young princess’s journey and the beginning of the eternal reign of the woman who would forever be our Saint Queen.'
          ]
        },
        es: {
          title: '8. El Altar de la Beira: De Marialva a las Bodas de Trancoso',
          badge: 'Boda Real',
          description: 'El capítulo final de la jornada de la novia. Una travesía épica por la meseta beirana, pasando por Moreira de Rei, hasta el encuentro con el altar en Trancoso, donde Isabel y Dinís sellaron el destino de un reino.',
          narrativeTitle: 'El horizonte se abre para el día más esperado. Siga el camino que transforma a la Infanta en Reina, cruzando tierras de caballeros hasta las murallas donde el amor se hizo historia.',
          content: [
            'Al dejar Marialva, el camino se extiende por la meseta, pasando por Rabaçal y acercándose a la monumental Moreira de Rei. Aquí, el tiempo parece cristalizado en granito: su altivo castillo y las misteriosas tumbas antropomórficas excavadas en la roca rodean la iglesia románica, creando un escenario de una solemnidad casi mística. Este era el Portugal profundo y resiliente que acogía el cortejo real, un territorio de frontera donde cada piedra guarda ecos de reconquista y honor.',
            'La llegada a Trancoso es el clímax emocional de esta ruta. Al avistar las imponentes murallas de la "Villa de las Bodas", el caminante revive el espíritu de junio de 1282. Fue aquí, en la Iglesia de San Bartolomé, donde Don Dinís e Isabel de Aragón intercambiaron promesas y unieron dos reinos. Se dice que el Rey Poeta quedó tan encantado con el recibimiento de la villa que se la ofreció como dote a su Reina. Cruzar las Portas d’El Rei es, por tanto, completar un destino: el fin de la caminata de una joven princesa y el inicio del reinado eterno de nuestra Reina Santa.'
          ]
        }
      },
      pois: [
        {
          category: 'sleep',
          contact: '',
          latlng: [41.0932089, -7.1403022],
          i18n: {
            pt: { name: 'Pousada da Juventude de Vila Nova de Foz Côa', categoryLabel: 'Pousada' },
            en: { name: 'Pousada da Juventude de Vila Nova de Foz Côa', categoryLabel: 'Hostel' },
            es: { name: 'Pousada da Juventude de Vila Nova de Foz Côa', categoryLabel: 'Albergue' }
          }
        }
      ]
    }
  },
  {
    slug: 'aventura-gravel',
    type: 'cycling',
    image: '/mirandela.jpg',
    details: {
      duration: 8,
      durationUnit: 'days',
      distance: 500,
      elevation: 1200,
      difficultyKey: 'common.difficulty.hard',
      minAltitude: 110,
      maxAltitude: 900,
      i18n: {
        pt: {
          title: 'Aventura Gravel',
          badge: 'Para Aventureiros',
          description: 'Desafie-se em terrenos acidentados e estradas de gravel cénicas. Desenhada para bicicletas de gravel e montanha, esta rota oferece velocidade, fluidez e vistas de cortar a respiração.',
          narrativeTitle: 'A Aventura Começa nas Estradas de Terra',
          content: [
            'Uma rota desenhada para quem procura adrenalina e paisagens selvagens. Percorra estradas de gravel entre serras e vales ao longo de dois dias intensos.',
            'Brevemente mais informações'
          ]
        },
        en: {
          title: 'Gravel Adventure',
          badge: 'For Adventurers',
          description: 'Challenge yourself on rugged terrains and scenic gravel roads. Designed for gravel and mountain bikes, this route offers speed, flow, and breathtaking views.',
          narrativeTitle: 'The Adventure Begins on Gravel Roads',
          content: [
            'A route designed for those seeking adrenaline and wild landscapes. Ride gravel roads through mountains and valleys over two intense days.',
            'Briefly more information'
          ]
        },
        es: {
          title: 'Aventura Gravel',
          badge: 'Para Aventureros',
          description: 'Desafíese en terrenos accidentados e estradas de gravel cénicas. Diseñada para bicicletas de gravel y montaña, esta ruta ofrece velocidad, fluidez y vistas de cortar a respiração.',
          narrativeTitle: 'La Aventura Comienza en los Caminos de Grava',
          content: [
            'Una ruta diseñada para quienes buscan adrenalina y paisajes salvajes. Recorra caminos de grava entre sierras y valles a lo largo de dos días intensos.',
            'Breve información adicional'
          ]
        }
      },
      pois: []
    }
  }
];

paths.forEach(p => {
  if (p.parentSlug) {
    const parentPath = paths.find(parent => parent.slug === p.parentSlug);
    if (parentPath) {
      p.parent = parentPath;
      if (!parentPath.stages) parentPath.stages = [];
      parentPath.stages.push(p);
    }
  }
});
