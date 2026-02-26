import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { StatsGrid, ElevationProfile, POISection, RouteMap } from "../components";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { paths } from "../data/pathsData";

export default function Stage() {
  const { slug, stage: stageSlug } = useParams<{ slug: string; stage: string }>();
  const { t, i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, stageSlug]);

  const path = paths.find(p => p.slug === stageSlug);
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

  return (
    <main className="flex-grow max-w-7xl mx-auto w-full px-6 pt-32 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Left Column */}
      <div className="lg:col-span-8 flex flex-col gap-10">
        <div className="flex items-start gap-4 mb-2">
          <Link to="/paths" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 mt-1">
            <ArrowLeft size={24} />
          </Link>
          <div className="flex flex-col">
            <h4 className="text-brand font-bold tracking-widest text-xs mb-2 uppercase">{parentText?.title}</h4>
            <h1 className="text-4xl md:text-5xl font-serif">{stageText.title}</h1>
          </div>
        </div>

        <StatsGrid
          distance={stage.distance}
          elevation={stage.elevation}
          duration={stage.duration}
          durationUnit={stage.durationUnit}
          difficulty={t(stage.difficultyKey)}
        />

        {/* Map Container */}
        <section className="rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 relative h-[500px] w-full bg-gray-100 group">
          <RouteMap gpxUrl={stage.gpxUrl} pois={stage.pois} />
        </section>

        <ElevationProfile />
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
            {stageText.content.map((para, i) => (
              <p key={i}>
                {i === 0 && (
                  <span className="text-5xl float-left mr-2 font-sans font-black text-brand/40 leading-none mt-1">
                    {para.charAt(0)}
                  </span>
                )}
                {i === 0 ? para.slice(1) : para}
              </p>
            ))}
          </div>
        </motion.article>

        {stage.pois && <POISection pois={stage.pois} />}

      </div>
    </main>
  );
}