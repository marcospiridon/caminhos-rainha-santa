import type { Path } from '../types';

export const paths: Path[] = [
  {
    slug: 'caminho-noiva-real',
    type: 'hiking',
    image: '/caminho-noiva-real.png',
    details: {
      duration: 5,
      durationUnit: 'days',
      distance: 112,
      elevation: 320,
      minAltitude: 0,
      maxAltitude: 320,
      difficultyKey: 'common.difficulty.moderate',
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
          title: 'Via da Prata',
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
          title: "Silver Path",
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
          title: 'Vía de la Plata',
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
          }
        },
        {
          category: 'sleep',
          contact: '+351 273 240 020',
          latlng: [41.8038025, -6.7505367],
          i18n: {
            pt: { name: 'Albergue de Peregrinos de Bragança', categoryLabel: 'Albergue' },
            en: { name: "Peregrino's Guesthouse Bragança", categoryLabel: 'Guesthouse' },
            es: { name: 'Albergue de Peregrinos Bragança', categoryLabel: 'Albergue' }
          }
        },
        {
          category: 'eat',
          contact: '+351 273 382 555',
          latlng: [41.8013253, -6.6975608],
          i18n: {
            pt: { name: 'Restaurante O Abel', categoryLabel: 'Restaurante' },
            en: { name: "O Abel Restaurant", categoryLabel: 'Restaurant' },
            es: { name: 'Restaurante O Abel', categoryLabel: 'Restaurante' }
          }
        },
        {
          category: 'eat',
          contact: '+351 273 926 425',
          latlng: [41.8175611, -6.6294250],
          i18n: {
            pt: { name: 'Restaurante Lombada', categoryLabel: 'Restaurante' },
            en: { name: "Lombada Restaurant", categoryLabel: 'Restaurant' },
            es: { name: 'Restaurante Lombada', categoryLabel: 'Restaurante' }
          }
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
          title: 'Linha do Tua',
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
          title: "Tua Line",
          badge: 'Old Railway',
          description: 'A stage of contrasts connecting Bragança Castle to the serenity of Santa Comba de Rossas. Highlights include the mysticism of the Castro de Avelãs Monastery and the smooth flow of the Tua Line Ecopista, on an accessible and history-filled path.',
          narrativeTitle: "Leave the fortress walls behind and embrace the silence of the cloisters. Follow the path where the historic Tua Railway line and the ancient hospitality of monks unite to guide your journey.",
          content: [
            'The journey begins under the shadow of Bragança\'s Keep, but the scenery quickly shifts towards the spirituality of the Castro de Avelãs Monastery. This is arguably the most significant point of the stage: a unique example in Portugal of brick Romanesque architecture, where it is believed the young Saint Queen Isabel found rest and shelter on her first night after Bragança. The silence of its circular apses invites a contemplative pause.',
            'The path then leads to the Pereiro Chapel, a small gem of local devotion, before merging with the modernity of the Ecopista. Where the steam and iron of the Tua Railway Line once cut through the landscape, there is now a smooth, flat path surrounded by nature. Walking or cycling along this former railway track is like gliding through history, ending in the rural tranquility of Santa Comba de Rossas, where time seems to move at a different pace.'
          ]
        },
        es: {
          title: 'Línea del Tua',
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
          }
        },
        {
          category: 'sleep',
          contact: '+351 938 712 419',
          latlng: [41.6687511, -6.8243661],
          i18n: {
            pt: { name: 'Glamping Hills', categoryLabel: 'Glamping' },
            en: { name: "Glamping Hills", categoryLabel: 'Glamping' },
            es: { name: 'Glamping Hills', categoryLabel: 'Glamping' }
          }
        },
        {
          category: 'eat',
          contact: '+351 273 313 074',
          latlng: [41.7645117, -6.8031222],
          i18n: {
            pt: { name: 'Serra de Nogueira', categoryLabel: 'Restaurante' },
            en: { name: "Serra de Nogueira", categoryLabel: 'Restaurant' },
            es: { name: 'Serra de Nogueira', categoryLabel: 'Restaurante' }
          }
        },
        {
          category: 'eat',
          contact: '',
          latlng: [41.6629528, -6.8278150],
          i18n: {
            pt: { name: 'Café Reboledo', categoryLabel: 'Café' },
            en: { name: "Café Reboledo", categoryLabel: 'Coffee Shop' },
            es: { name: 'Café Reboledo', categoryLabel: 'Chiringuito' }
          }
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
          title: 'Entre Máscaras e Águas Azuis',
          badge: 'Paisagem Protegida',
          description: 'Uma travessia que liga o mundo rural e místico à pureza da natureza. Passando pelas aldeias típicas de Salsas e Salselas, o percurso culmina na Albufeira do Azibo, um oásis de biodiversidade no coração do Geopark Terras de Cavaleiros.',
          narrativeTitle: 'Siga o brilho no horizonte. Deixe as tradições ancestrais de Salsas e Salselas guiarem os seus passos até ao encontro mágico com as águas serenas do Azibo.',
          content: [
            'Partindo de Santa Comba de Rossas, o caminho entra numa zona onde a terra respira tradição. A primeira paragem é Salsas, terra de rituais pagãos e dos icónicos Caretos, cujos chocalhos e máscaras coloridas mantêm viva uma energia que a Rainha Santa certamente teria achado fascinante. Logo adiante, Salselas recebe-nos com o seu Museu Rural, um guardião da memória transmontana que preserva os ciclos da agricultura e da vida comunitária.',
            'Mas o grande "clímax" desta etapa é a chegada à Albufeira do Azibo. Classificada como Paisagem Protegida e parte do Geopark Terras de Cavaleiros (UNESCO), este espelho de água é um santuário de paz. Onde outrora os pastores guiavam os rebanhos, hoje o caminhante encontra praias fluviais de águas límpidas e uma fauna vibrante. O percurso termina em Macedo de Cavaleiros, a cidade que serve de porta de entrada para este paraíso natural, unindo o conforto moderno à força da terra.'
          ]
        },
        en: {
          title: "Between Masks and Blue Waters",
          badge: 'Protected Landscape',
          description: 'A journey connecting the rural and mystical world to the purity of nature. Passing through the traditional villages of Salsas and Salselas, the trail culminates at the Azibo Reservoir, an oasis of biodiversity in the heart of the Terras de Cavaleiros Geopark.',
          narrativeTitle: "Follow the glow on the horizon. Let the ancestral traditions of Salsas and Salselas guide your steps toward a magical encounter with the serene waters of Azibo.",
          content: [
            'Starting from Santa Comba de Rossas, the path enters an area where the land breathes tradition. The first stop is Salsas, a land of pagan rituals and the iconic Caretos, whose cowbells and colorful masks keep alive an energy that the Saint Queen would surely have found fascinating. Shortly after, Salselas welcomes us with its Rural Museum, a guardian of Transmontano memory that preserves the cycles of agriculture and community life.',
            'However, the great climax of this stage is the arrival at the Azibo Reservoir. Classified as a Protected Landscape and part of the UNESCO Terras de Cavaleiros Geopark, this mirror of water is a sanctuary of peace. Where shepherds once guided their flocks, travelers now find river beaches with crystal-clear waters and vibrant wildlife. The journey ends in Macedo de Cavaleiros, the gateway town to this natural paradise, blending modern comfort with the raw power of the land.'
          ]
        },
        es: {
          title: 'Entre Máscaras y Águas Azules',
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
          }
        },
        {
          category: 'eat',
          contact: '967983398',
          latlng: [41.5433628, -6.8982536],
          i18n: {
            pt: { name: 'Cervejaria Dom', categoryLabel: 'Cervejaria' },
            en: { name: 'Cervejaria Dom', categoryLabel: 'Pub' },
            es: { name: 'Cervejaria Dom', categoryLabel: 'Cervejaria' }
          }
        },
        {
          category: 'eat',
          contact: '',
          latlng: [41.5518339, -6.8741514],
          i18n: {
            pt: { name: 'Café da Santa Joana', categoryLabel: 'Café' },
            en: { name: 'Café da Santa Joana', categoryLabel: 'Coffee Shop' },
            es: { name: 'Café da Santa Joana', categoryLabel: 'Chiringuito' }
          }
        },
        {
          category: 'sleep',
          contact: '+351 278 421 236',
          latlng: [41.5356639, -6.9582678],
          i18n: {
            pt: { name: 'Hotel Alendouro', categoryLabel: 'Hotel' },
            en: { name: 'Hotel Alendouro', categoryLabel: 'Hotel' },
            es: { name: 'Hotel Alendouro', categoryLabel: 'Hotel' }
          }
        }
      ]
    }
  },
  {
    slug: 'mirandela',
    type: 'hiking',
    image: '/mirandela.jpg',
    parentSlug: 'caminho-noiva-real',
    details: {
      duration: 6,
      durationUnit: 'hours',
      distance: 25,
      elevation: 320,
      minAltitude: 0,
      maxAltitude: 320,
      difficultyKey: 'common.difficulty.easy',
      i18n: {
        pt: {
          title: 'Macedo > Mirandela',
          badge: 'Peregrinação',
          description: 'Percurso comum com a variante portuguesa da rota da prata do caminho de santiago',
          narrativeTitle: 'O Caminho que Floresceu com a Passagem da Rainha',
          content: [
            'Em Junho de 1282, as águas do Rio Maçãs, em Quintanilha, testemunharam a entrada de uma comitiva que mudaria o destino de Portugal. A jovem Isabel de Aragão atravessava a Raia para encontrar o seu destino e o seu futuro esposo, o Rei Poeta, D. Dinis.',
            'Este percurso não é apenas uma travessia geográfica; é uma imersão na lenda. Ao passar por Vila Flor (então chamada Póvoa do Além-Sabor), conta a tradição que a beleza da futura rainha e o seu encanto pelas paisagens foram de tal ordem que o próprio Rei, mais tarde, rebatizou a vila em sua honra. É um trilho marcado pelo aroma do mato e pela dureza do granito, que suaviza ao chegar às imponentes muralhas de Trancoso, onde o casamento foi ratificado com o esplendor das núpcias reais.',
            'Ao percorrer este caminho, não está apenas a caminhar por Trás-os-Montes e pelas Beiras; está a refazer a logística de uma comitiva medieval, a sentir a brisa que sopra no planalto e a descobrir por que razão, 700 anos depois, ainda chamamos "Santa" àquela que entrou por estas terras como noiva.'
          ]
        },
        en: {
          title: "Macedo > Mirandela",
          badge: 'Peregrination',
          description: 'Common path with the Portuguese variant of the silver path of the Santiago pilgrimage',
          narrativeTitle: "The Way that Blossomed with the Queen's Passing",
          content: [
            "In June 1282, the waters of the Maçãs River in Quintanilha witnessed the entrance of a retinue that would change the destiny of Portugal. Young Elizabeth of Aragon crossed the Raia to meet her destiny and her future husband, the Poet King, Denis.",
            "This route is not just a geographical crossing; it is an immersion in legend. When passing through Vila Flor (then called Póvoa do Além-Sabor), tradition says that the beauty of the future queen and her enchantment with the landscapes were such that the King himself later renamed the village in her honor. It is a trail marked by the scent of the scrubland and the hardness of the granite, which softens as it reaches the imposing walls of Trancoso, where the marriage was ratified with the splendor of the royal nuptials.",
            "By walking this path, you are not just walking through Trás-os-Montes and the Beiras; you are redoing the logistics of a medieval retinue, feeling the breeze blowing on the plateau and discovering why, 700 years later, we still call 'Saint' that who entered these lands as a bride."
          ]
        },
        es: {
          title: 'Macedo > Mirandela',
          badge: 'Peregrinação',
          description: 'Ruta común con la variante portuguesa de la ruta de la plata del camino de Santiago',
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
          category: 'see',
          contact: 'www.fontedarainha.pt',
          latlng: [40.6062, -8.6332],
          i18n: {
            pt: { name: 'Fonte da Rainha', categoryLabel: 'Marco Histórico' },
            en: { name: "Queen's Fountain", categoryLabel: 'Historical Landmark' },
            es: { name: 'Fuente de la Reina', categoryLabel: 'Hito Histórico' }
          }
        },
        {
          category: 'sleep',
          contact: 'www.alcanenaguesthouse.pt',
          latlng: [40.6062, -8.6332],
          i18n: {
            pt: { name: 'Alcanena Guesthouse', categoryLabel: 'Alojamento Local' },
            en: { name: 'Alcanena Guesthouse', categoryLabel: 'Local Accommodation' },
            es: { name: 'Alcanena Guesthouse', categoryLabel: 'Alojamiento Local' }
          }
        }
      ]
    }
  },
  {
    slug: 'aventura-gravel',
    type: 'cycling',
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c4b282?auto=format&fit=crop&q=80&w=1000',
    details: {
      duration: 2,
      durationUnit: 'days',
      distance: 85,
      elevation: 1200,
      difficultyKey: 'common.difficulty.hard',
      minAltitude: 0,
      maxAltitude: 1200,
      i18n: {
        pt: {
          title: 'Aventura Gravel',
          badge: 'Para Aventureiros',
          description: 'Desafie-se em terrenos acidentados e estradas de gravel cénicas. Desenhada para bicicletas de gravel e montanha, esta rota oferece velocidade, fluidez e vistas de cortar a respiração.',
          narrativeTitle: 'A Aventura Começa nas Estradas de Terra',
          content: [
            'Uma rota desenhada para quem procura adrenalina e paisagens selvagens. Percorra estradas de gravel entre serras e vales ao longo de dois dias intensos.'
          ]
        },
        en: {
          title: 'Gravel Adventure',
          badge: 'For Adventurers',
          description: 'Challenge yourself on rugged terrains and scenic gravel roads. Designed for gravel and mountain bikes, this route offers speed, flow, and breathtaking views.',
          narrativeTitle: 'The Adventure Begins on Gravel Roads',
          content: [
            'A route designed for those seeking adrenaline and wild landscapes. Ride gravel roads through mountains and valleys over two intense days.'
          ]
        },
        es: {
          title: 'Aventura Gravel',
          badge: 'Para Aventureros',
          description: 'Desafíese en terrenos accidentados e estradas de gravel cénicas. Diseñada para bicicletas de gravel y montaña, esta ruta ofrece velocidad, fluidez y vistas de cortar a respiração.',
          narrativeTitle: 'La Aventura Comienza en los Caminos de Grava',
          content: [
            'Una ruta diseñada para quienes buscan adrenalina y paisajes salvajes. Recorra caminos de grava entre sierras y valles a lo largo de dos días intensos.'
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
