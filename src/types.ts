export type Localized<T> = {
  pt: T;
  en: T;
  es: T;
};

export interface POITranslations {
  name: string;
  categoryLabel: string;
}

export interface POI {
  id: string;
  category: 'sleep' | 'eat' | 'see' | 'help';
  imageUrl: string;
  rating: number;
  reviews: number;
  i18n: Localized<POITranslations>;
}

export interface NarrativeTranslations {
  title: string;
  content: string[];
}

export interface Narrative {
  i18n: Localized<NarrativeTranslations>;
}

export interface PathStage {
  id: string;
  distance: string;
  elevation: string;
  time: string;
  difficultyKey: string; // Keeps pointing to common translations
  gpxUrl: string;
  narrative: Narrative;
  pois: POI[];
}

export interface PathTranslations {
  title: string;
  badge: string;
  description: string;
  duration: string;
  distance: string;
  difficulty: string;
  button: string;
}

export interface Path {
  id: string;
  slug: string;
  type: 'hiking' | 'cycling';
  image: string;
  i18n: Localized<PathTranslations>;
  details?: PathStage;
  parent?: string;
}
