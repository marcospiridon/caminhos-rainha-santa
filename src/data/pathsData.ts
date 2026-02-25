import type { Path } from '../types';

export const paths: Path[] = [
  {
    id: 'historical-path',
    slug: 'caminho-historico',
    type: 'hiking',
    titleKey: 'pathSelection.hiking.title',
    badgeKey: 'pathSelection.hiking.badge',
    descriptionKey: 'pathSelection.hiking.description',
    image: 'https://images.unsplash.com/photo-1551632432-c735e7396672?auto=format&fit=crop&q=80&w=1000',
    durationKey: 'pathSelection.hiking.duration',
    distanceKey: 'pathSelection.hiking.distance',
    difficultyKey: 'pathSelection.hiking.difficulty',
    buttonKey: 'pathSelection.hiking.button',
    details: {
      id: 'historical-path-d',
      distance: '16.5',
      elevation: '320',
      time: '5h 30m',
      difficulty: 'Médio',
      mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000',
      narrative: {
        title: 'Onde o Silêncio Fala',
        content: [
          'O nevoeiro matinal ainda abraçava os pinhais quando partimos da antiga estalagem. O som dos passos nas pedras seculares é a única banda sonora deste troço inicial.',
          'Diz a lenda que a Rainha Santa se deteve aqui para admirar o vale, partilhando o seu pão com os mais desfavorecidos. Hoje, sentimos essa mesma aura de paz em cada curva do trilho.'
        ],
        author: 'Dra. Maria Helena',
        authorRole: 'Historiadora Local',
        authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
      },
      pois: [
        {
          id: 'poi-1',
          name: 'Fonte da Rainha',
          category: 'see',
          categoryLabel: 'Marco Histórico',
          imageUrl: 'https://images.unsplash.com/photo-1584281723528-766b96fca0f4?auto=format&fit=crop&q=80&w=200',
          rating: 4.8,
          reviews: 124
        },
        {
          id: 'poi-2',
          name: 'Alcanena Guesthouse',
          category: 'sleep',
          categoryLabel: 'Alojamento Local',
          imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200',
          rating: 4.9,
          reviews: 86
        }
      ]
    }
  },
  {
    id: 'gravel-adventure',
    slug: 'aventura-gravel',
    type: 'cycling',
    titleKey: 'pathSelection.cycling.title',
    badgeKey: 'pathSelection.cycling.badge',
    descriptionKey: 'pathSelection.cycling.description',
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c4b282?auto=format&fit=crop&q=80&w=1000',
    durationKey: 'pathSelection.cycling.duration',
    distanceKey: 'pathSelection.cycling.distance',
    difficultyKey: 'pathSelection.cycling.difficulty',
    buttonKey: 'pathSelection.cycling.button',
  },
  {
    id: 'mondego-valley',
    slug: 'vale-do-mondego',
    type: 'hiking',
    titleKey: 'pathsPage.mondego.title',
    badgeKey: 'pathsPage.mondego.badge',
    descriptionKey: 'pathsPage.mondego.description',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000',
    durationKey: 'pathsPage.mondego.duration',
    distanceKey: 'pathsPage.mondego.distance',
    difficultyKey: 'pathsPage.mondego.difficulty',
    buttonKey: 'pathSelection.hiking.button',
  },
  {
    id: 'mountain-summit',
    slug: 'cume-da-estrela',
    type: 'cycling',
    titleKey: 'pathsPage.mountain.title',
    badgeKey: 'pathsPage.mountain.badge',
    descriptionKey: 'pathsPage.mountain.description',
    image: 'https://images.unsplash.com/photo-1544191711-2f9ffdf3ea97?auto=format&fit=crop&q=80&w=1000',
    durationKey: 'pathsPage.mountain.duration',
    distanceKey: 'pathsPage.mountain.distance',
    difficultyKey: 'pathsPage.mountain.difficulty',
    buttonKey: 'pathSelection.cycling.button',
  }
];
