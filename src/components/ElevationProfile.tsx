import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function ElevationProfile() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('pathPage.sections.elevationProfile')}</h3>
        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
          {t('pathPage.elevation.max')}: 380m | {t('pathPage.elevation.min')}: 60m
        </span>
      </div>
      <div className="relative w-full h-48">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
          <defs>
            <linearGradient id="gradientFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#c18182" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c18182" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,180 C100,180 150,120 250,100 C350,80 400,140 500,130 C600,120 700,50 800,60 C900,70 950,20 1000,20 L1000,200 L0,200 Z"
            fill="url(#gradientFill)"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,180 C100,180 150,120 250,100 C350,80 400,140 500,130 C600,120 700,50 800,60 C900,70 950,20 1000,20"
            fill="none"
            stroke="#c18182"
            strokeWidth="3"
          />
        </svg>
        <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-400 font-medium pt-2">
          <span>0km</span>
          <span>4km</span>
          <span>8km</span>
          <span>12km</span>
          <span>16.5km</span>
        </div>
      </div>
    </section>
  );
}
