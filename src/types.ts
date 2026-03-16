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
  category: 'sleep' | 'eat' | 'see' | 'help' | 'water' | 'camp';
  contact: string;
  latlng: [number, number];
  i18n: Localized<POITranslations>;
  url?: string;
}

export interface PathI18n {
  title: string;
  badge: string;
  description: string;
  narrativeTitle: string;
  content: string[];
}

export interface PathStage {
  duration: number;
  durationUnit: 'hours' | 'days';
  distance: number;
  elevation: number;
  minAltitude: number;
  maxAltitude: number;
  difficultyKey: string; // Points to common translations key
  i18n: Localized<PathI18n>;
  pois: POI[];
}

export interface Path {
  slug: string;
  type: 'hiking' | 'cycling';
  image: string;
  details: PathStage;
  parentSlug?: string;
  parent?: Path;
  stages?: Path[];
}
