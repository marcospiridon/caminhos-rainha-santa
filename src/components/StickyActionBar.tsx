import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Download, ArrowLeft, ArrowRight } from "lucide-react";

interface StickyActionBarProps {
  label: string;
  title: string;
  gpxUrl?: string;
  prevStageUrl?: string;
  nextStageUrl?: string;
  pathUrl?: string;
}

const StickyActionBar = ({ label, title, gpxUrl, prevStageUrl, nextStageUrl, pathUrl }: StickyActionBarProps) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 130);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    if (gpxUrl) {
      window.open(gpxUrl, "_blank");
    }
  };

  return (
    <div className={`sticky top-[80px] z-40 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <div className="hidden md:flex flex-col">
          <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">{label}</span>
          <span className="text-sm font-semibold text-slate-900 dark:text-white">{title}</span>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          {pathUrl && (
            <Link
              to={pathUrl}
              className="flex items-center justify-center gap-2 text-slate-500 hover:text-brand px-3 h-10 rounded-full border border-slate-200 dark:border-gray-800 hover:border-brand/30 transition-all font-bold group"
              title={t('pathPage.navigation.backToPath')}
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="hidden lg:inline text-xs uppercase tracking-wider">{t('pathPage.navigation.backToPath')}</span>
            </Link>
          )}
          <div className="flex items-center gap-2">
            {prevStageUrl && (
              <Link
                to={prevStageUrl}
                className="flex items-center justify-center gap-2 text-brand hover:text-white px-3 h-10 rounded-full border border-brand/30 hover:bg-brand transition-all text-sm font-bold group"
                title={t('pathPage.navigation.previous')}
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden lg:inline text-xs uppercase tracking-wider">{t('pathPage.navigation.previous')}</span>
              </Link>
            )}
            {nextStageUrl && (
              <Link
                to={nextStageUrl}
                className="flex items-center justify-center gap-2 text-brand hover:text-white px-3 h-10 rounded-full border border-brand/30 hover:bg-brand transition-all text-sm font-bold group"
                title={t('pathPage.navigation.next')}
              >
                <span className="hidden lg:inline text-xs uppercase tracking-wider">{t('pathPage.navigation.next')}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-1" />
          <button
            onClick={handleDownload}
            disabled={!gpxUrl}
            className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-bold h-10 px-6 rounded-full shadow-sm transition-all transform active:scale-95"
          >
            <Download size={18} />
            <span className="hidden sm:inline text-xs uppercase tracking-wider">{t('pathsPage.downloadGPX')}</span>
            <span className="sm:hidden text-xs uppercase tracking-wider">GPX</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyActionBar;
