import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { StatsGrid, ElevationProfile, POISection, RouteMap, HeroHeader, StickyActionBar } from "../components";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { paths } from "../data/pathsData";

export default function Stage() {
  const { slug, stage: stageSlug } = useParams<{ slug: string; stage: string }>();
  const { t, i18n: i18nInstance } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  // Reset expansion state when navigating between stages
  useEffect(() => {
    setIsExpanded(false);
  }, [slug, stageSlug]);

  const gpxUrl = `/gpx/${stageSlug}.gpx`;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, stageSlug]);

  const path = paths.find(p => p.slug === stageSlug && p.parentSlug === slug);
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
  const parentText = path.parent?.details.i18n[lang] || path.parent?.details.i18n.pt;

  // Navigation Logic
  const siblings = path.parent?.stages || [];
  const currentIndex = siblings.findIndex(s => s.slug === stageSlug);
  const prevStage = currentIndex > 0 ? siblings[currentIndex - 1] : null;
  const nextStage = currentIndex !== -1 && currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null;

  const prevStageUrl = prevStage ? `/path/${slug}/${prevStage.slug}` : undefined;
  const nextStageUrl = nextStage ? `/path/${slug}/${nextStage.slug}` : undefined;

  return (
    <div className="flex flex-col flex-grow w-full">

      <HeroHeader
        image={path.image}
        type={path.type}
        parentTitle={parentText?.title || ''}
        title={stageText.title}
        badge={stageText.badge}
        description={stageText.description || ''}
        backLink={`/path/${path?.parent?.slug}`}
      />

      <StickyActionBar
        label={t('pathPage.sections.currentStage')}
        title={stageText.title}
        gpxUrl={gpxUrl}
        prevStageUrl={prevStageUrl}
        nextStageUrl={nextStageUrl}
        pathUrl={`/path/${path?.parent?.slug}`}
      />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 pt-8 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column */}
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
          <RouteMap gpxUrl={gpxUrl} pois={stage.pois} />
        </section>

        {stageSlug && <ElevationProfile slug={stageSlug} distance={stage.distance} minAltitude={stage.minAltitude} maxAltitude={stage.maxAltitude} />}
        {stage.pois && <POISection pois={stage.pois} />}
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

              return (
                <p key={i} className={`${!isExpanded ? 'hidden lg:block' : ''}`}>
                  {para}
                </p>
              );
            })}
          </div>
        </motion.article>

      </div>
      </main>
    </div>
  );
}