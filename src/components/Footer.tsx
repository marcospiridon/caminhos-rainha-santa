import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Coffee, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-brand/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 text-brand">
                <img src="/logo_rosa.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <h2 className="font-serif font-bold text-xl tracking-tight leading-none text-slate-900 dark:text-white">
                  {t('header.title')}
                </h2>
                <span className="text-[9px] uppercase tracking-[0.2em] text-brand font-semibold mt-1">
                  {t('header.subtitle')}
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-6">{t('footer.sections.discovery')}</h4>
            <nav className="flex flex-col gap-4">
              <Link 
                to="/paths?type=hiking" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand transition-colors"
              >
                {t('header.nav.trails')}
              </Link>
              <Link 
                to="/paths?type=cycling" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand transition-colors"
              >
                {t('header.nav.bike')}
              </Link>
            </nav>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-6">{t('footer.sections.support')}</h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://buymeacoffee.com/caminhos.rainha.santa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-brand transition-colors group"
              >
                <Coffee className="w-4 h-4 text-brand" />
                <span>{t('header.nav.support')}</span>
              </a>
              <a
                href="mailto:caminhosrainhasanta@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-brand transition-colors"
              >
                <Mail className="w-4 h-4 text-brand" />
                <span>caminhosrainhasanta@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-6">{t('footer.sections.social')}</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/caminhosrainhasanta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand/30 hover:text-brand transition-all shadow-sm"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61578509071713" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand/30 hover:text-brand transition-all shadow-sm"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-400 font-medium">
            © {year} {t('header.title')}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
