import type { Path } from '../types';

export const paths: Path[] = [
  {
    slug: 'caminho-noiva-real',
    type: 'hiking',
    image: 'gimonde.jpg',
    details: {
      duration: 5,
      durationUnit: 'days',
      distance: '112',
      elevation: '320',
      difficultyKey: 'common.difficulty.moderate',
      gpxUrl: '/gpx/historical-path.gpx',
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
      duration: 6,
      durationUnit: 'hours',
      distance: '25',
      elevation: '320',
      difficultyKey: 'common.difficulty.easy',
      gpxUrl: '/gpx/historical-path.gpx',
      i18n: {
        pt: {
          title: 'Via da Prata',
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
          title: "Silver Path",
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
          title: 'Vía de la Plata',
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
    slug: 'aventura-gravel',
    type: 'cycling',
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c4b282?auto=format&fit=crop&q=80&w=1000',
    details: {
      duration: 2,
      durationUnit: 'days',
      distance: '85',
      elevation: '1200',
      difficultyKey: 'common.difficulty.hard',
      gpxUrl: '/gpx/gravel-adventure.gpx',
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
