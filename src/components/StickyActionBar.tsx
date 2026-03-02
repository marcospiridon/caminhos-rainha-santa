import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";

interface StickyActionBarProps {
  label: string;
  title: string;
  gpxUrl?: string;
}

const StickyActionBar = ({ label, title, gpxUrl }: StickyActionBarProps) => {
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
          <button
            onClick={handleDownload}
            disabled={!gpxUrl}
            className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-bold h-10 px-6 rounded-lg shadow-sm transition-all transform active:scale-95"
          >
            <Download size={18} />
            <span>{t('pathsPage.downloadGPX')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyActionBar;
