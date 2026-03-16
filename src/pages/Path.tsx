import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { StatsGrid, ElevationProfile, POISection, RouteMap, PathSelection, HeroHeader, StickyActionBar } from "../components";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { paths } from "../data/pathsData";

export default function Path() {
  const { slug } = useParams();
  const { t, i18n: i18nInstance } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Reset expansion state when navigating between paths
  useEffect(() => {
    setIsExpanded(false);
    setActiveCategory('all');
  }, [slug]);

  const gpxUrl = `/gpx/${slug}.gpx`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const path = paths.find(p => p.slug === slug && !p.parentSlug);
  const stage = path?.details;

  if (!path || !stage) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center pt-32 pb-12 px-6 text-center">
        <h2 className="text-3xl font-serif mb-4">{t('pathPage.notFound.title')}</h2>
        <p className="text-slate-600 mb-8">{t('pathPage.notFound.description')}</p>
        <Link to="/paths" className="flex items-center gap-2 text-brand font-bold hover:underline">
          <ArrowLeft size={20} />
          {t('pathPage.notFound.back')}
        </Link>
      </div>
    );
  }

  const lang = (i18nInstance.language?.split('-')[0] || 'pt') as 'pt' | 'en' | 'es';
  const stageText = stage.i18n[lang] || stage.i18n.pt;

  // Path Navigation Logic
  const mainPaths = paths.filter(p => !p.parentSlug);
  const currentIndex = mainPaths.findIndex(p => p.slug === slug);
  const prevPath = currentIndex > 0 ? mainPaths[currentIndex - 1] : null;
  const nextPath = currentIndex !== -1 && currentIndex < mainPaths.length - 1 ? mainPaths[currentIndex + 1] : null;

  const prevPathUrl = prevPath ? `/path/${prevPath.slug}` : undefined;
  const nextPathUrl = nextPath ? `/path/${nextPath.slug}` : undefined;

  return (
    <div className="flex flex-col flex-grow w-full">
      <HeroHeader
        image={path.image}
        type={path.type}
        parentTitle={''}
        title={stageText.title}
        badge={stageText.badge}
        description={stageText.description || ''}
        backLink="/paths"
      />

      <StickyActionBar
        label="Percurso"
        title={stageText.title}
        gpxUrl={gpxUrl}
        prevStageUrl={prevPathUrl}
        nextStageUrl={nextPathUrl}
      />

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 pt-10 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 flex flex-col gap-10">

        <StatsGrid
          distance={stage.distance}
          elevation={stage.elevation}
          duration={stage.duration}
          durationUnit={stage.durationUnit}
          difficulty={t(stage.difficultyKey)}
        />

        {/* Map Container */}
        <section className="rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 relative h-[500px] w-full bg-gray-100 group">
          <RouteMap gpxUrl={gpxUrl} pois={stage.pois} activeCategory={activeCategory} />
        </section>

        {slug && <ElevationProfile slug={slug} distance={stage.distance} minAltitude={stage.minAltitude} maxAltitude={stage.maxAltitude} />}
        {stage.pois && <POISection pois={stage.pois} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />}
      </div>

      {/* Right Column */}
      <div className="lg:col-span-4 flex flex-col gap-10">
        {/* Narrative Section */}
        <motion.article
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-brand/20" />
          <span className="inline-block text-brand font-bold tracking-widest text-xs uppercase mb-3">{t('pathPage.sections.history')}</span>
          <h3 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {stageText.narrativeTitle}
          </h3>
          <div className="font-serif text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed text-lg">
            {stageText.content.map((para, i) => {
              if (i === 0) {
                const isTruncated = !isExpanded && para.length > 100;

                return (
                  <div key={i} className="relative">
                    <p className="lg:hidden">
                      <span className="text-5xl float-left mr-2 font-sans font-black text-brand/40 leading-none mt-1">
                        {para.charAt(0)}
                      </span>
                      {isTruncated ? para.slice(1, 100) + '...' : para.slice(1)}
                      {isTruncated && (
                        <button
                          onClick={() => setIsExpanded(true)}
                          className="ml-2 text-brand font-bold hover:underline inline-flex items-center gap-1"
                        >
                          {t('pathPage.navigation.more')}
                        </button>
                      )}
                    </p>
                    <p className="hidden lg:block">
                      <span className="text-5xl float-left mr-2 font-sans font-black text-brand/40 leading-none mt-1">
                        {para.charAt(0)}
                      </span>
                      {para.slice(1)}
                    </p>
                  </div>
                );
              }

              // Other paragraphs only shown on desktop or if expanded on mobile
              return (
                <p key={i} className={`${!isExpanded ? 'hidden lg:block' : ''}`}>
                  {para}
                </p>
              );
            })}
          </div>
        </motion.article>
      </div>
      {/* center full width */}
      <section className="flex flex-col items-center justify-center w-full lg:col-span-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h4 className="text-4xl md:text-5xl mb-6">{t('pathPage.sections.stages')}</h4>
            <div className="w-20 h-1 bg-brand/30 mx-auto mb-8"></div>
          </div>
          <PathSelection paths={path.stages || []} />
        </div>
      </section>
      </main>
    </div>
  );
}