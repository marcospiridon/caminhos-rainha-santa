import type { Path } from '../types';

export const paths: Path[] = [
  {
    id: 'historical-path',
    slug: 'caminho-historico',
    type: 'hiking',
    image: 'gimonde.jpg',
    i18n: {
      pt: {
        title: 'O Caminho da Noiva Real',
        badge: 'Recomendado',
        description: 'Onde a lenda floresceu. Siga os passos da jovem Isabel na sua entrada em Portugal: uma jornada de Quintanilha a Trancoso que transformou paisagens em jardins e uma Infanta em Rainha.',
        duration: '5 Dias',
        distance: '112 km',
        difficulty: 'Moderada',
        button: 'Ver Rota Pedestre',
      },
      en: {
        title: "The Royal Bride's Way",
        badge: 'Recommended',
        description: 'Where the legend blossomed. Follow the steps of young Elizabeth on her entry into Portugal: a journey from Quintanilha to Trancoso that transformed landscapes into gardens and an Infanta into a Queen.',
        duration: '5 Days',
        distance: '70 miles',
        difficulty: 'Moderate',
        button: 'View Hiking Route',
      },
      es: {
        title: 'El Camino de la Novia Real',
        badge: 'Recomendado',
        description: 'Donde la leyenda floreció. Siga los pasos de la joven Isabel en su entrada a Portugal: una jornada de Quintanilha a Trancoso que transformó paisajes en jardines y una Infanta en Reina.',
        duration: '5 Días',
        distance: '112 km',
        difficulty: 'Moderada',
        button: 'Ver Ruta Peatonal',
      }
    },
    details: {
      id: 'historical-path-d',
      distance: '16.5',
      elevation: '320',
      time: '5h 30m',
      difficultyKey: 'common.difficulty.moderate',
      gpxUrl: '/gpx/historical-path.gpx',
      narrative: {
        i18n: {
          pt: {
            title: 'O Caminho que Floresceu com a Passagem da Rainha',
            content: [
              'Em Junho de 1282, as águas do Rio Maçãs, em Quintanilha, testemunharam a entrada de uma comitiva que mudaria o destino de Portugal. A jovem Isabel de Aragão atravessava a Raia para encontrar o seu destino e o seu futuro esposo, o Rei Poeta, D. Dinis.',
              'Este percurso não é apenas uma travessia geográfica; é uma imersão na lenda. Ao passar por Vila Flor (então chamada Póvoa do Além-Sabor), conta a tradição que a beleza da futura rainha e o seu encanto pelas paisagens foram de tal ordem que o próprio Rei, mais tarde, rebatizou a vila em sua honra. É um trilho marcado pelo aroma do mato e pela dureza do granito, que suaviza ao chegar às imponentes muralhas de Trancoso, onde o casamento foi ratificado com o esplendor das núpcias reais.',
              'Ao percorrer este caminho, não está apenas a caminhar por Trás-os-Montes e pelas Beiras; está a refazer a logística de uma comitiva medieval, a sentir a brisa que sopra no planalto e a descobrir por que razão, 700 anos depois, ainda chamamos "Santa" àquela que entrou por estas terras como noiva.'
            ]
          },
          en: {
            title: "The Way that Blossomed with the Queen's Passing",
            content: [
              "In June 1282, the waters of the Maçãs River in Quintanilha witnessed the entrance of a retinue that would change the destiny of Portugal. Young Elizabeth of Aragon crossed the Raia to meet her destiny and her future husband, the Poet King, Denis.",
              "This route is not just a geographical crossing; it is an immersion in legend. When passing through Vila Flor (then called Póvoa do Além-Sabor), tradition says that the beauty of the future queen and her enchantment with the landscapes were such that the King himself later renamed the village in her honor. It is a trail marked by the scent of the scrubland and the hardness of the granite, which softens as it reaches the imposing walls of Trancoso, where the marriage was ratified with the splendor of the royal nuptials.",
              "By walking this path, you are not just walking through Trás-os-Montes and the Beiras; you are redoing the logistics of a medieval retinue, feeling the breeze blowing on the plateau and discovering why, 700 years later, we still call 'Saint' that who entered these lands as a bride."
            ]
          },
          es: {
            title: 'El Camino que Floreció con el Paso de la Reina',
            content: [
              'En junio de 1282, las aguas del río Maçãs, en Quintanilha, testemunharam la entrada de una comitiva que cambiaría el destino de Portugal. La joven Isabel de Aragón cruzaba la Raya para encontrar su destino y su futuro esposo, el Rey Poeta, D. Dinis.',
              'Este percurso no es solo una travesía geográfica; es una inmersión en la leyenda. Al pasar por Vila Flor (entonces llamada Póvoa do Além-Sabor), cuenta la tradición que la belleza de la futura reina y su encanto por los paisajes fueron de tal orden que el propio Rey, más tarde, rebautizó la villa en su honor. Es un sendero marcado por el aroma del monte y por la dureza del granito, que se suaviza al llegar a las imponentes murallas de Trancoso, donde el matrimonio fue ratificado con el esplendor de las nupcias reales.',
              'Al recorrer este camino, no está simplemente caminando por Trás-os-Montes y las Beiras; está rehaciendo la logística de una comitiva medieval, sintiendo la brisa que sopla en la meseta y descubriendo por qué razón, 700 después, todavía llamamos "Santa" a la que entró por estas tierras como novia.'
            ]
          }
        }
      },
      pois: [
        {
          id: 'poi-1',
          category: 'see',
          imageUrl: 'https://images.unsplash.com/photo-1584281723528-766b96fca0f4?auto=format&fit=crop&q=80&w=200',
          rating: 4.8,
          reviews: 124,
          i18n: {
            pt: { name: 'Fonte da Rainha', categoryLabel: 'Marco Histórico' },
            en: { name: "Queen's Fountain", categoryLabel: 'Historical Landmark' },
            es: { name: 'Fuente de la Reina', categoryLabel: 'Hito Histórico' }
          }
        },
        {
          id: 'poi-2',
          category: 'sleep',
          imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200',
          rating: 4.9,
          reviews: 86,
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
    id: 'gravel-adventure',
    slug: 'aventura-gravel',
    type: 'cycling',
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c4b282?auto=format&fit=crop&q=80&w=1000',
    i18n: {
      pt: {
        title: 'Aventura Gravel',
        badge: 'Para Aventureiros',
        description: 'Desafie-se em terrenos acidentados e estradas de gravel cénicas. Desenhada para bicicletas de gravel e montanha, esta rota oferece velocidade, fluidez e vistas de cortar a respiração.',
        duration: '2 Dias',
        distance: '85 km',
        difficulty: 'Difícil',
        button: 'Ver Rota de Ciclismo',
      },
      en: {
        title: 'Gravel Adventure',
        badge: 'For Adventurers',
        description: 'Challenge yourself on rugged terrains and scenic gravel roads. Designed for gravel and mountain bikes, this route offers speed, flow, and breathtaking views.',
        duration: '2 Days',
        distance: '53 miles',
        difficulty: 'Hard',
        button: 'View Cycling Route',
      },
      es: {
        title: 'Aventura Gravel',
        badge: 'Para Aventureros',
        description: 'Desafíese en terrenos accidentados e estradas de gravel cénicas. Diseñada para bicicletas de gravel y montaña, esta ruta ofrece velocidad, fluidez y vistas de cortar a respiração.',
        duration: '2 Dias',
        distance: '85 km',
        difficulty: 'Difícil',
        button: 'Ver Ruta de Ciclismo',
      }
    }
  }
];
