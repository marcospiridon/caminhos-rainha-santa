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
      latlng: [41.7507, -6.5715],
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
      latlng: [41.8058, -6.7570],
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
      latlng: [41.5613, -6.8832],
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
      latlng: [41.5361, -6.9634],
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
      latlng: [41.3061, -7.1534],
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
      latlng: [41.1895, -7.0734],
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
      latlng: [41.0827, -7.1355],
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
      latlng: [40.8781, -7.3486],
    }
  },
  {
    slug: 'aventura-gravel',
    type: 'cycling',
    image: '/mirandela.jpg',
    details: {
      duration: 4,
      durationUnit: 'days',
      distance: 236,
      elevation: 4079,
      minAltitude: 110,
      maxAltitude: 900,
      difficultyKey: 'common.difficulty.easy',
      i18n: {
        pt: {
          title: 'Rota da Noiva Real em Bikepacking',
          badge: 'Aventura',
          description: 'A história sobre duas rodas. Atravesse a Raia e conquiste o horizonte de Quintanilha a Trancoso, numa jornada de bikepacking que une a força do pedal à mística da Rainha que transformou rochas em flores.',
          narrativeTitle: 'Pedalar pela História: Onde a Lenda Ganha Velocidade',
          content: [
            'Em Junho de 1282, o som das águas do Rio Maçãs foi acompanhado pelo trotar de centenas de cavalos. Hoje, o silêncio da fronteira em Quintanilha é quebrado pelo girar das correntes. Esta rota de bikepacking convida-o a reviver a entrada triunfal de Isabel de Aragão em Portugal, ligando a fronteira ao altar de Trancoso com o dinamismo que só a bicicleta permite.',
            'Este não é apenas um desafio físico; é uma viagem no tempo através de terrenos que testam o corpo e alimentam a alma. Da fluidez das ecopistas que seguem as antigas linhas de ferro até às subidas graníticas da Beira, cada quilómetro recorda a logística épica da comitiva real. Ao passar por Vila Flor, sentirá a mesma brisa que encantou a futura Rainha, num território onde o Rei Poeta, D. Dinis, imortalizou a beleza da sua noiva em cada nome de lugar.',
            'Pedalar nesta rota é abraçar a vastidão de Trás-os-Montes e das Beiras com a liberdade do viajante moderno. É cruzar vales férteis e planaltos selvagens, sentindo a transição das paisagens que moldaram a "Rainha Santa". Prepare as alforjas: o destino final são as muralhas de Trancoso, onde o passado medieval e o espírito de aventura se encontram no final de cada etapa.'
          ]
        },
        en: {
          title: "Royal Bride's Bikepacking Route",
          badge: 'Adventure',
          description: 'History on two wheels. Cross the border and conquer the horizon from Quintanilha to Trancoso, on a bikepacking journey that blends pedal power with the mystique of the Queen who turned rocks into flowers.',
          narrativeTitle: "Cycling Through History: Where Legend Gains Speed",
          content: [
            "In June 1282, the sound of the Maçãs River waters was accompanied by the trotting of hundreds of horses. Today, the silence of the border in Quintanilha is broken by the spinning of chains. This bikepacking route invites you to relive the triumphal entry of Elizabeth of Aragon into Portugal, connecting the border to the altar of Trancoso with the dynamism that only a bicycle allows.",
            "This is not just a physical challenge; it is a time-travel journey through terrains that test the body and feed the soul. From the flow of the ecopistas following old railway lines to the granite climbs of the Beira region, every kilometer recalls the epic logistics of the royal retinue. As you pass through Vila Flor, you will feel the same breeze that enchanted the future Queen, in a territory where the Poet King, D. Dinis, immortalized his bride's beauty in every place name.",
            "Cycling this route means embracing the vastness of Trás-os-Montes and the Beiras with the freedom of the modern traveler. It means crossing fertile valleys and wild plateaus, feeling the transition of the landscapes that shaped the 'Saint Queen.' Pack your bags: the final destination is the walls of Trancoso, where the medieval past and the spirit of adventure meet at the end of every stage."
          ]
        },
        es: {
          title: 'Ruta de la Novia Real en Bikepacking',
          badge: 'Aventura',
          description: 'La historia sobre dos ruedas. Cruce la Raya y conquiste el horizonte de Quintanilha a Trancoso, en una jornada de bikepacking que une la fuerza del pedal con la mística de la Reina que transformó rocas en flores.',
          narrativeTitle: 'Pedalear por la Historia: Donde la Leyenda Gana Velocidad',
          content: [
            'En junio de 1282, el sonido de las aguas del río Maçãs fue acompañado por el trote de cientos de caballos. Hoy, el silencio de la frontera en Quintanilha es roto por el girar de las cadenas. Esta ruta de bikepacking le invita a revivir la entrada triunfal de Isabel de Aragón en Portugal, uniendo la frontera con el altar de Trancoso con el dinamismo que solo la bicicleta permite.',
            'Este no es solo un desafío físico; es un viaje en el tiempo a través de terrenos que ponen a prueba el cuerpo y alimentan el alma. Desde la fluidez de las vías verdes que siguen las antiguas líneas de hierro hasta las subidas graníticas de la Beira, cada kilómetro recuerda la logística épica de la comitiva real. Al pasar por Vila Flor, sentirá la misma brisa que encantó a la futura Reina.',
            'Pedalear en esta ruta es abrazar la vastedad de Trás-os-Montes y de las Beiras con la libertad del viajero moderno. Es cruzar valles fértiles y mesetas salvajes, sintiendo la transición de los paisajes que moldearon a la "Reina Santa". Prepare sus alforjas: el destino final son las murallas de Trancoso, donde el pasado medieval y el espíritu de aventura se encuentran al final de cada etapa.'
          ]
        }
      },
    }
  },
  {
    slug: 'via-da-prata',
    type: 'cycling',
    image: '/via-da-prata.jpg',
    parentSlug: 'aventura-gravel',
    details: {
      duration: 2,
      durationUnit: 'hours',
      distance: 27.2,
      elevation: 628,
      minAltitude: 516,
      maxAltitude: 880,
      difficultyKey: 'common.difficulty.easy',
      i18n: {
        pt: {
          title: '1. Além-Raia: De Quintanilha à Cidadela',
          badge: 'Via da Prata',
          description: 'A primeira pedalada em solo luso. Cruze a fronteira no Rio Maçãs e siga o trilho histórico que liga a hospitalidade da Raia à imponência de Bragança. Um troço que partilha a mística da Via da Prata do Caminho de Santiago.',
          narrativeTitle: 'O Primeiro Encontro: Onde o Rio Maçãs une dois Reinos',
          content: [
            'O arranque desta aventura de bikepacking faz-se onde o Rio Maçãs divide e une. Em Junho de 1282, Isabel de Aragão cruzou estas mesmas águas para entrar num Portugal que a esperava com curiosidade. De bicicleta, o terreno revela-se logo com a crueza e beleza típica de Trás-os-Montes, exigindo pernas para as primeiras subidas mas recompensando com vistas infinitas sobre o planalto.',
            'O percurso partilha o traçado da variante portuguesa da Via da Prata, o que confere a esta etapa uma energia especial de peregrinação. Ao passar por aldeias como Outeiro, com a sua majestosa Basílica, o ciclista sente o peso da história e da fé que moldaram esta região de fronteira. É um caminho feito de terra batida e asfalto silencioso, serpenteando entre carvalhos e soutos ancestrais.',
            'A chegada a Bragança é o primeiro grande triunfo da rota. Ver a silhueta da Cidadela e da Torre de Menagem no horizonte é reviver o sentimento de proteção que a futura Rainha sentiu ao chegar à sua primeira grande paragem. Terminar este dia dentro das muralhas medievais é o repouso perfeito para quem está a refazer, a pedal, a logística de um cortejo real que uniu destinos.'
          ]
        },
        en: {
          title: "1. Beyond the Border: From Quintanilha to the Citadel",
          badge: 'Silver Path',
          description: 'The first pedal strokes on Portuguese soil. Cross the border at the Maçãs River and follow the historical trail connecting the hospitality of the borderlands to the grandeur of Bragança. A stretch that shares the mystique of the Santiago Silver Path.',
          narrativeTitle: "The First Encounter: Where the Maçãs River Unites Two Kingdoms",
          content: [
            "The start of this bikepacking adventure takes place where the Maçãs River both divides and unites. In June 1282, Elizabeth of Aragon crossed these same waters to enter a Portugal that awaited her with curiosity. On a bike, the terrain immediately reveals the raw beauty typical of Trás-os-Montes, demanding effort for the first climbs but rewarding you with infinite views over the plateau.",
            "The route shares the path of the Portuguese variant of the Silver Way (Via da Prata), giving this stage a special pilgrimage energy. Passing through villages like Outeiro, with its majestic Basilica, the cyclist feels the weight of history and faith that shaped this border region. It is a path of dirt tracks and silent asphalt, winding through ancient oaks and chestnut groves.",
            "Arriving in Bragança is the first great triumph of the route. Seeing the silhouette of the Citadel and the Keep on the horizon is to relive the sense of protection the future Queen felt reaching her first major stop. Ending this day within the medieval walls is the perfect rest for those retracing, by pedal, the logistics of a royal procession that united destinies."
          ]
        },
        es: {
          title: '1. Más allá de la Raya: De Quintanilha a la Ciudadela',
          badge: 'Vía de la Plata',
          description: 'Las primeras pedaladas en suelo luso. Cruce la frontera en el río Maçãs y siga el sendero histórico que une la hospitalidad de la Raya con la imponencia de Bragança. Un tramo que comparte la mística de la Vía de la Plata del Camino de Santiago.',
          narrativeTitle: 'El Primer Encuentro: Donde el Río Maçãs une dos Reinos',
          content: [
            'El inicio de esta aventura de bikepacking se sitúa donde el río Maçãs divide y une. En junio de 1282, Isabel de Aragón cruzó estas mismas aguas para entrar en un Portugal que la esperaba con curiosidad. En bicicleta, el terreno se revela pronto con la crudeza y belleza típica de Trás-os-Montes, exigiendo piernas para las primeras subidas pero recompensando con vistas infinitas.',
            'El recorrido comparte el trazado de la variante portuguesa de la Vía de la Plata, lo que confiere a esta etapa una energía especial de peregrinación. Al pasar por aldeas como Outeiro, con su majestuosa Basílica, el ciclista siente el peso de la historia y la fe que moldearon esta región de frontera.',
            'La llegada a Bragança es el primer gran triunfo de la ruta. Ver la silueta de la Ciudadela y de la Torre del Homenaje en el horizonte es revivir el sentimiento de protección que la futura Reina sintió al llegar a su primera gran parada. Terminar este día dentro de las murallas medievales es el reposo perfecto para quien está rehaciendo a pedal la logística de un cortejo real.'
          ]
        }
      },
      latlng: [41.7507, -6.5715],
    }
  },
  {
    slug: 'ecopista-do-tua',
    type: 'cycling',
    image: '/mirandela.jpg',
    parentSlug: 'aventura-gravel',
    details: {
      duration: 5,
      durationUnit: 'hours',
      distance: 81,
      elevation: 892,
      minAltitude: 220,
      maxAltitude: 900,
      difficultyKey: 'common.difficulty.easy',
      i18n: {
        pt: {
          title: '2. O Grande Flow Transmontano: De Bragança a Mirandela',
          badge: 'ecopista',
          description: 'Uma travessia épica de 81km em gravel que une o Castelo de Bragança à "Cidade Jardim", Mirandela. Um percurso rápido e cénico que desliza pela antiga Linha do Tua, abraça as águas do Azibo e mergulha nos olivais do vale.',
          narrativeTitle: 'Conquiste o planalto e deixe-se levar pelo ritmo do ferro e do cristal. Das muralhas de Bragança ao espelho de água do Azibo, sinta a liberdade de um caminho onde a história rola sobre duas rodas.',
          content: [
            'A aventura começa sob a imponência do Castelo de Bragança, mas o gravel ganha alma no Mosteiro de Castro de Avelãs. Este monumento único de tijolo românico marca a transição para a Ecopista da Linha do Tua. Onde outrora rugiam as locomotivas a vapor, hoje os pneus de gravel encontram um tapete de rolamento perfeito, serpenteando por paisagens rurais onde a Rainha Santa Isabel encontrou abrigo e devoção.',
            'O ritmo acelera à medida que nos aproximamos da Albufeira do Azibo. Este oásis de águas azuis, parte do Geopark Terras de Cavaleiros (UNESCO), é o ponto médio ideal para uma pausa regeneradora. Entre as tradições dos Caretos de Salsas e o brilho da albufeira, o ciclista atravessa um território de biodiversidade pura, onde o silêncio da ecopista é apenas interrompido pelo vento e pelo som da corrente.',
            'A etapa final é uma descida fluida em direção ao Rio Tua. Atravessando o vale de Carvalhais, o cenário é dominado pelo "ouro líquido" — os extensos olivais que anunciam a chegada a Mirandela. A entrada triunfal faz-se pela Ponte Velha, cruzando os mesmos arcos que viram passar rainhas e reis. Terminar aqui é celebrar com uma Alheira de Mirandela, honrando a gastronomia de uma cidade que recebe quem chega com jardins floridos e mesas fartas.'
          ]
        },
        en: {
          title: '2. The Great Transmontane Flow: Bragança to Mirandela',
          badge: 'old railway',
          description: 'An epic 81km gravel journey connecting Bragança Castle to the "Garden City" of Mirandela. A fast and scenic route that glides along the old Tua Line, embraces the Azibo waters, and dives into the valley\'s olive groves.',
          narrativeTitle: 'Conquer the plateau and let the rhythm of iron and crystal guide you. From Bragança\'s walls to the Azibo mirror, feel the freedom of a path where history rolls on two wheels.',
          content: [
            'The adventure begins under the imposing Bragança Castle, but the gravel finds its soul at the Castro de Avelãs Monastery. This unique brick Romanesque monument marks the transition to the Tua Line Ecopista. Where steam locomotives once roared, gravel tires now find a perfect rolling carpet, winding through rural landscapes where Saint Queen Isabel once found shelter and devotion.',
            'The pace picks up as you approach the Azibo Reservoir. This blue water oasis, part of the UNESCO Terras de Cavaleiros Geopark, is the ideal midpoint for a regenerative break. Between the traditions of the Salsas Caretos and the reservoir\'s glow, the cyclist crosses a territory of pure biodiversity, where the ecopista\'s silence is only broken by the wind and the sound of the chain.',
            'The final stretch is a fluid descent toward the Tua River. Crossing the Carvalhais valley, the scenery is dominated by "liquid gold"—the vast olive groves that herald the arrival in Mirandela. The triumphant entry is made via the Old Bridge, crossing the same arches that saw queens and kings pass by. Finishing here means celebrating with a Mirandela Alheira, honoring the gastronomy of a city that welcomes arrivals with blooming gardens and hearty tables.'
          ]
        },
        es: {
          title: '2. El Gran Flow Transmontano: De Braganza a Mirandela',
          badge: 'vía verde',
          description: 'Una travesía épica de 81km en gravel que une el Castillo de Braganza con la "Ciudad Jardín", Mirandela. Un recorrido rápido y escénico que se desliza por la antigua Vía del Tua, abraza las aguas del Azibo y se sumerge en los olivares del valle.',
          narrativeTitle: 'Conquiste la meseta y déjese llevar por el ritmo del hierro y el cristal. De las murallas de Braganza al espejo del Azibo, sienta la libertad de un camino donde la historia rueda sobre dos ruedas.',
          content: [
            'La aventura comienza bajo la imponente Torre del Homenaje de Braganza, pero el gravel cobra vida en el Monasterio de Castro de Avelãs. Este monumento único de ladrillo románico marca la transición a la Vía Verde (Ecopista) del Tua. Donde antaño rugían las locomotoras de vapor, hoy los neumáticos de gravel encuentran un tapete de rodaje perfecto, serpenteando por paisajes rurales donde la Reina Santa Isabel encontró refugio y devoción.',
            'El ritmo se acelera al acercarse al Embalse del Azibo. Este oasis de aguas azules, parte del Geoparque Terras de Cavaleiros (UNESCO), es el punto medio ideal para una pausa regeneradora. Entre las tradiciones de los Caretos de Salsas y el brillo del embalse, el ciclista atraviesa un territorio de biodiversidad pura, donde el silencio de la vía verde solo es interrumpido por el viento.',
            'El tramo final es un descenso fluido hacia el río Tua. Atravesando el valle de Carvalhais, el escenario está dominado por el "oro líquido": los extensos olivares que anuncian la llegada a Mirandela. La entrada triunfal se realiza por el Puente Viejo, cruzando los mismos arcos que vieron pasar a reinas y reyes. Terminar aquí es celebrar con una Alheira de Mirandela, honrando la gastronomía de una ciudad que recibe al viajero con jardines y mesas generosas.'
          ]
        }
      },
      latlng: [41.8058, -6.7570],
    }
  },
  {
    slug: 'alem-douro',
    type: 'cycling',
    image: '/vilarica.png',
    parentSlug: 'aventura-gravel',
    details: {
      duration: 5,
      durationUnit: 'hours',
      distance: 65.9,
      elevation: 1486,
      minAltitude: 110,
      maxAltitude: 646,
      difficultyKey: 'common.difficulty.hard',
      i18n: {
        pt: {
          title: '3. Pelo vale de Vilariça: De Mirandela às Margens do Douro',
          badge: 'Gravel Épico',
          description: 'Uma jornada intensa de 66km que une a princesa do Tua à fertilidade bíblica do Vale da Vilariça, culminando na mística travessia do Rio Douro em direção a Foz Côa.',
          narrativeTitle: 'Onde as flores do vale encontram o brilho do Douro. Siga o trilho que une o planalto transmontano ao encontro das águas do Sabor.',
          content: [
            'Esta travessia épica une o coração de Mirandela às margens férteis do Douro. Um percurso intenso que sobe pelos campos de amendoeiras e oliveiras, atravessa a riqueza agrícola do Vale da Vilariça e mergulha no cenário dramático do Rio Douro.',
            'A jornada celebra o encontro de Santa Isabel com as gentes de Portugal, passando por aldeias que preservam a mística da Rainha Santa. É um desafio técnico e físico recompensado pela imensidão do Douro e pela hospitalidade das terras de Foz Côa.'
          ]
        },
        en: {
          title: '3. Beyond Douro: From Mirandela to the Douro Banks',
          badge: 'Epic Gravel',
          description: 'An intense 66km journey connecting the "Garden City" of Vila Flor to the biblical fertility of the Vilariça Valley, culminating in the mystical crossing of the Douro River.',
          narrativeTitle: "Where valley flowers meet the Douro's glow. Follow the trail connecting the Transmontane plateau to the Sabor waters meeting.",
          content: [
            'This epic crossing connects the heart of Vila Flor to the fertile banks of the Douro. An intense path rising through almond and olive groves, crossing the agricultural wealth of the Vilariça Valley, and diving into the dramatic scenery of the Douro River.',
            'The journey celebrates Saint Isabel’s encounter with the people of Portugal, passing through villages that preserve the mystical legacy of the Saint Queen. It is a technical and physical challenge rewarded by the vastness of the Douro and the hospitality of Foz Côa.'
          ]
        },
        es: {
          title: '3. Más allá del Duero: De las laderas de Mirandela a las orillas del Duero',
          badge: 'Gravel Épico',
          description: 'Un viaje intenso de 66 km que une la princesa del Tua con la fertilidad bíblica del Valle de Vilariça, culminando en la mística travesía del río Duero.',
          narrativeTitle: 'Donde las flores del valle encuentran el brillo del Duero. Siga el sendero que une la meseta transmontana con el encuentro de las aguas del Sabor.',
          content: [
            'Esta travesía épica une el corazón de Mirandela con las fértiles orillas del Duero. Un recorrido intenso que asciende por campos de almendros y olivos, atraviesa la riqueza agrícola del Valle de Vilariça y se sumerge en el escenario dramático del río Duero.',
            'La jornada celebra el encuentro de Santa Isabel con las gentes de Portugal, passando por aldeas que preservan la mística de la Reina Santa.'
          ]
        }
      },
      latlng: [41.3061, -7.1534],
    }
  },
  {
    slug: 'aldeias-historicas',
    type: 'cycling',
    image: '/castelos.png',
    parentSlug: 'aventura-gravel',
    details: {
      duration: 5,
      durationUnit: 'hours',
      distance: 60.1,
      elevation: 1389,
      minAltitude: 240,
      maxAltitude: 900,
      difficultyKey: 'common.difficulty.moderate',
      i18n: {
        pt: {
          title: '4. Aldeias Históricas: Entre Muralhas e Lendas da Beira',
          badge: 'Património',
          description: 'A etapa final da Aventura Gravel é uma ode ao silêncio do granito. De Vila Nova de Foz Côa a Trancoso, atravesse as Aldeias Históricas de Marialva e Moreira de Rei.',
          narrativeTitle: 'Onde as pedras sussurram segredos de reis e cavaleiros. Do vale profundo do Côa até ao planalto da Beira Alta, siga o rasto dos cavaleiros e rainhas.',
          content: [
            'Esta travessia épica une o Vale do Côa às cidadelas históricas da Beira Alta. Um desafio de gravel que sobe das margens do Rio Côa até à mística Marialva, onde o silêncio das pedras conta segredos de reis e cavaleiros templários.',
            'A jornada culmina na monumental Moreira de Rei e nas muralhas de Trancoso, a "Vila das Bodas", onde o destino de Portugal foi selado no altar. É um percurso de contrastes, onde a dureza da subida é recompensada por horizontes sem fim e pela paz das aldeias fortificadas.'
          ]
        },
        en: {
          title: '4. Historic Villages: Between Walls and Beira Legends',
          badge: 'Heritage',
          description: 'The final stage of the Gravel Adventure is an ode to granite silence. From Vila Nova de Foz Côa to Trancoso, cross the Historic Villages of Marialva and Moreira de Rei.',
          narrativeTitle: 'Where stones whisper secrets of kings and knights. From the deep Côa valley to the Beira Alta plateau, follow the trail of knights and queens.',
          content: [
            'This epic crossing connects the Côa Valley to the historic citadels of Beira Alta. A gravel challenge that rises from the banks of the Côa River to mystical Marialva, where the silence of the stones tells secrets of kings and Templar knights.',
            'The journey culminates in monumental Moreira de Rei and the walls of Trancoso, the "Wedding Town," where Portugal\'s destiny was sealed at the altar. It is a path of contrasts, where the hardship of the climb is rewarded by endless horizons and the peace of fortified villages.'
          ]
        },
        es: {
          title: '4. Aldeas Históricas: Entre Murallas y Leyendas de la Beira',
          badge: 'Patrimonio',
          description: 'La etapa final de la Aventura Gravel es una oda al silencio del granito. De Vila Nova de Foz Côa a Trancoso, cruza las Aldeas Históricas de Marialva y Moreira de Rei.',
          narrativeTitle: 'Donde las piedras susurran secretos de reyes y caballeros. Del valle profundo del Côa hasta la meseta de la Beira Alta, siga el rastro de caballeros y reinas.',
          content: [
            'Esta travesía épica une el Valle del Côa con las ciudadelas históricas de la Beira Alta. Un desafío de gravel que asciende desde las orillas del río Côa hasta la mística Marialva, donde el silencio de las piedras cuenta secretos de reyes y caballeros templarios.',
            'La jornada culmina en la monumental Moreira de Rei y en las murallas de Trancoso, la "Villa de las Bodas", donde el destino de Portugal se selló en el altar.'
          ]
        }
      },
      latlng: [41.0827, -7.1355],
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
