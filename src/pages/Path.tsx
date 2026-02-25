import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { StatsGrid, ElevationProfile, POISection } from "../components";
import { ChevronRight, MapIcon, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { paths } from "../data/pathsData";

export default function Path() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const path = paths.find(p => p.slug === slug);
  const stage = path?.details;

  if (!path || !stage) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center p-12 text-center">
        <h2 className="text-3xl font-serif mb-4">Percurso não encontrado</h2>
        <p className="text-slate-600 mb-8">O percurso que procura não existe ou ainda não tem detalhes disponíveis.</p>
        <Link to="/paths" className="flex items-center gap-2 text-brand font-bold hover:underline">
          <ArrowLeft size={20} />
          Voltar aos percursos
        </Link>
      </div>
    );
  }

  return (
    <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Left Column */}
      <div className="lg:col-span-8 flex flex-col gap-10">
        <div className="flex items-center gap-4 mb-2">
          <Link to="/paths" className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif">{t(path.titleKey)}</h1>
        </div>

        <StatsGrid
          distance={stage.distance}
          elevation={stage.elevation}
          time={stage.time}
          difficulty={stage.difficulty}
        />

        {/* Map Container */}
        <section className="rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 relative h-[500px] w-full bg-gray-100 group">
          <img
            alt="Map"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={stage.mapImage}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-white dark:bg-surface-dark p-2 rounded-lg shadow-lg flex flex-col gap-2">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors text-slate-700 dark:text-slate-200">
              <ChevronRight size={20} className="-rotate-90" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors text-slate-700 dark:text-slate-200">
              <ChevronRight size={20} className="rotate-90" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors text-slate-700 dark:text-slate-200">
              <MapIcon size={20} />
            </button>
          </div>
          <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-surface-dark/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Mapa Interativo
          </div>
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
          <span className="inline-block text-brand font-bold tracking-widest text-xs uppercase mb-3">Crónicas da Comitiva</span>
          <h3 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {stage.narrative.title}
          </h3>
          <div className="font-serif text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed text-lg">
            {stage.narrative.content.map((para, i) => (
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
          <div className="mt-8 flex items-center gap-4 border-t border-gray-100 dark:border-gray-700 pt-6">
            <img
              alt={stage.narrative.author}
              className="size-12 rounded-full object-cover"
              src={stage.narrative.authorImage}
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{stage.narrative.author}</p>
              <p className="text-xs text-gray-500">{stage.narrative.authorRole}</p>
            </div>
          </div>
        </motion.article>

        <POISection pois={stage.pois} />

      </div>
    </main>
  );
}