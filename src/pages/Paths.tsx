import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Footprints, Bike, Search } from "lucide-react";
import PathCard from "../components/PathCard";
import { paths } from "../data/pathsData";

const Paths = () => {
  const { t, i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<string>(searchParams.get('type') || 'all');
  const lang = (i18n.language?.split('-')[0] || 'pt') as 'pt' | 'en' | 'es';

  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      setActiveFilter(type);
    }
  }, [searchParams]);

  const parentPaths = paths.filter(path => path.parent === undefined);
  const filteredPaths = activeFilter === 'all'
    ? parentPaths
    : parentPaths.filter(path => path.type === activeFilter);

  const filterOptions = [
    { id: 'all', label: t('pathsPage.filters.all'), icon: Search },
    { id: 'hiking', label: t('pathsPage.filters.hiking'), icon: Footprints },
    { id: 'cycling', label: t('pathsPage.filters.cycling'), icon: Bike },
  ];

  const handleFilterChange = (id: string) => {
    setActiveFilter(id);
    setSearchParams({ type: id });
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif mb-6 text-slate-900"
          >
            {t('pathsPage.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            {t('pathsPage.subtitle')}
          </motion.p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleFilterChange(option.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === option.id
                ? 'bg-brand text-white border-brand shadow-lg shadow-brand/20'
                : 'bg-white text-slate-600 border-slate-200 hover:border-brand/40 hover:bg-brand/5'
              }`}
            >
              <option.icon className="w-4 h-4" />
              {option.label}
            </button>
          ))}
        </div>

        {/* Path Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredPaths.map((path) => {
              const text = path.details.i18n[lang] || path.details.i18n.pt;
              return (
                <motion.div
                  key={path.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <PathCard
                    title={text.title}
                    badge={text.badge}
                    description={text.description}
                    image={path.image}
                    duration={t(`common.duration.${path.details.durationUnit}`, { count: path.details.duration })}
                    distance={path.details?.distance}
                    difficulty={path.details ? t(path.details.difficultyKey) : undefined}
                    icon={path.type === 'hiking' ? Footprints : Bike}
                    buttonText={text.button}
                    slug={path.slug}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredPaths.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400">{t('pathsPage.empty')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Paths;
