import { useMemo } from 'react';
import type { POI } from '../types';
import { Bed, Utensils, Camera, HeartPulse, Droplet, Trees } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { getAffiliateUrl } from '../utils/urlUtils';

const iconMap = {
  sleep: Bed,
  eat: Utensils,
  see: Camera,
  help: HeartPulse,
  water: Droplet,
  camp: Trees,
};

interface POISectionProps {
  pois: POI[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function POISection({ pois, activeCategory, onCategoryChange }: POISectionProps) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.split('-')[0] || 'pt') as 'pt' | 'en' | 'es';

  const categories = useMemo(() => {
    if (!pois) return ['all'];
    const usedCategories = Array.from(new Set(pois.map(p => p.category)));
    return ['all', ...usedCategories];
  }, [pois]);

  const filteredPois = activeCategory === 'all'
    ? pois
    : pois.filter(p => p.category === activeCategory);

  const handlePOIClick = (poi: POI) => {
    const finalUrl = getAffiliateUrl(poi, lang);
    if (finalUrl) {
      window.open(finalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="text-brand">
            <Camera size={20} />
          </span>
          {t('pathPage.sections.pois')}
        </h3>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand text-white shadow-md transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700 hover:border-brand/30 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {t(`pathPage.pois.filter.${cat}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredPois.map((poi) => {
            const Icon = iconMap[poi.category] || Camera;
            const text = poi.i18n[lang] || poi.i18n.pt;
            return (
              <motion.div
                layout
                key={poi.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => handlePOIClick(poi)}
                className={`group bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all flex gap-4 items-center ${poi.url ? 'cursor-pointer hover:shadow-lg hover:border-brand/30' : ''}`}
              >
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {text.name}
                      {poi.url && (
                        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1 text-brand">
                          →
                        </span>
                      )}
                    </h4>
                    <Icon size={16} className="text-gray-400 group-hover:text-brand transition-colors" />
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{text.categoryLabel}</p>
                  <span className="text-xs text-gray-500">{poi.contact}</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
