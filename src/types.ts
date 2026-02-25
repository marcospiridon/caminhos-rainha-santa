export interface POI {
  id: string;
  name: string;
  category: 'sleep' | 'eat' | 'see' | 'help';
  categoryLabel: string;
  imageUrl: string;
  rating: number;
  reviews: number;
}

export interface Narrative {
  title: string;
  content: string[];
  author: string;
  authorRole: string;
  authorImage: string;
}

export interface PathStage {
  id: string;
  distance: string;
  elevation: string;
  time: string;
  difficulty: string;
  mapImage: string;
  narrative: Narrative;
  pois: POI[];
}

export interface Path {
  id: string;
  slug: string;
  type: 'hiking' | 'cycling';
  titleKey: string;
  badgeKey: string;
  descriptionKey: string;
  image: string;
  durationKey: string;
  distanceKey: string;
  difficultyKey: string;
  buttonKey: string;
  details?: PathStage; // Detailed data for the path page
}
