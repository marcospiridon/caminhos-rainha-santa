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

export interface PathI18n {
  title: string;
  badge: string;
  description: string;
  narrativeTitle: string;
  content: string[];
}

export interface PathStage {
  id: string;
  duration: number;
  durationUnit: 'hours' | 'days';
  distance: string;
  elevation: string;
  difficultyKey: string; // Points to common translations key
  gpxUrl: string;
  i18n: Localized<PathI18n>;
  pois: POI[];
}

export interface Path {
  id: string;
  slug: string;
  type: 'hiking' | 'cycling';
  image: string;
  details: PathStage;
  parentSlug?: string;
  parent?: Path;
  stages?: Path[];
}
