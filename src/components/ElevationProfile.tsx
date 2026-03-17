import { useTranslation } from 'react-i18next';

export default function ElevationProfile({ slug, distance, minAltitude, maxAltitude }: { slug: string, distance: number, minAltitude: number, maxAltitude: number }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-6 px-1">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase tracking-tighter font-bold">{t('pathPage.elevation.max')}</span>
          <span className="text-xl font-mono font-bold text-slate-700 dark:text-slate-200">{maxAltitude}m</span>
        </div>
        <div className="w-px h-10 bg-gray-100 dark:bg-gray-800" />
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase tracking-tighter font-bold">{t('pathPage.elevation.min')}</span>
          <span className="text-xl font-mono font-bold text-slate-700 dark:text-slate-200">{minAltitude}m</span>
        </div>
        <div className="w-px h-10 bg-gray-100 dark:bg-gray-800" />
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase tracking-tighter font-bold">{t('pathPage.stats.distance')}</span>
          <span className="text-xl font-mono font-bold text-slate-700 dark:text-slate-200">{distance.toFixed(1)}km</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="w-full h-48 md:h-64 mb-4">
          <img
            src={"/svg/" + slug + ".svg"}
            alt="Perfil de Elevação"
            className="w-full h-full object-fill brightness-110 dark:brightness-100"
          />
        </div>

        <div className="w-full flex justify-between text-[10px] text-gray-400 font-bold border-t border-gray-100 dark:border-gray-800 pt-2 px-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{(i * (distance / 4)).toFixed(1)}km</span>
          ))}
        </div>
      </div>
    </div>
  );
}
