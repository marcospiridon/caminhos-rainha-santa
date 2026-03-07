import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp, Activity } from 'lucide-react';

export default function ElevationProfile({ slug, distance, minAltitude, maxAltitude }: { slug: string, distance: number, minAltitude: number, maxAltitude: number }) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300">
      <div
        className="flex items-center justify-between mb-4 cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <div className="p-2 bg-brand/10 rounded-lg text-brand">
            <Activity size={18} />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors">
            {t('pathPage.sections.elevationProfile')}
          </h3>
        </div>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-slate-800 text-xs font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-brand/5 hover:text-brand hover:border-brand/30 transition-all"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <span className="hidden sm:inline">{t('pathPage.elevation.collapse')}</span>
              <ChevronUp size={14} />
            </>
          ) : (
            <>
              <span className="hidden sm:inline">{t('pathPage.elevation.expand')}</span>
              <ChevronDown size={14} />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center gap-4 mb-2 px-1">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase tracking-tighter font-bold">{t('pathPage.elevation.max')}</span>
          <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-200">{maxAltitude}m</span>
        </div>
        <div className="w-px h-8 bg-gray-100 dark:bg-gray-800" />
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase tracking-tighter font-bold">{t('pathPage.elevation.min')}</span>
          <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-200">{minAltitude}m</span>
        </div>
        <div className="w-px h-8 bg-gray-100 dark:bg-gray-800" />
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase tracking-tighter font-bold">{t('pathPage.stats.distance')}</span>
          <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-200">{distance.toFixed(1)}km</span>
        </div>
      </div>

      <motion.div
        className="relative w-full overflow-hidden"
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          marginTop: isExpanded ? 16 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="w-full h-32 md:h-48 mb-4">
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
      </motion.div>
    </section>
  );
}
