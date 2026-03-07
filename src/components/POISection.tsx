import type { POI } from '../types';
import { Bed, Utensils, Camera, HeartPulse, Droplet } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const iconMap = {
  sleep: Bed,
  eat: Utensils,
  see: Camera,
  help: HeartPulse,
  water: Droplet,
};

export default function POISection({ pois }: { pois: POI[] }) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.split('-')[0] || 'pt') as 'pt' | 'en' | 'es';

  return (
    <section>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
        <span className="text-primary">
          <Camera size={20} />
        </span>
        {t('pathPage.sections.pois')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pois.map((poi, index) => {
          const Icon = iconMap[poi.category] || Camera;
          const text = poi.i18n[lang] || poi.i18n.pt;
          return (
            <motion.div
              key={poi.i18n.pt.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all flex gap-4 items-center cursor-pointer"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{text.name}</h4>
                  <Icon size={16} className="text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mb-1">{text.categoryLabel}</p>
                <span className="text-xs text-gray-500">{poi.contact}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
