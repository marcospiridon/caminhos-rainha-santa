import { useTranslation } from 'react-i18next';

export default function ElevationProfile({ slug, distance, minAltitude, maxAltitude }: { slug: string, distance: number, minAltitude: number, maxAltitude: number }) {
  const { t } = useTranslation();

  return (
    <section className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('pathPage.sections.elevationProfile')}</h3>
        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
          {t('pathPage.elevation.max')}: {maxAltitude}m | {t('pathPage.elevation.min')}: {minAltitude}m
        </span>
      </div>
      <div className="relative w-full h-48">
        <img src={"/svg/" + slug + ".svg"} alt="Perfil de Elevação" />
        <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-400 font-medium pt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i * (distance / 4)}km</span>
          ))}
        </div>
      </div>
    </section>
  );
}
