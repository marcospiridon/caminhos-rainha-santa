import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Globe, Menu, X, ChevronDown, Coffee } from "lucide-react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' }
  ];

  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 text-brand">
            <img src="/logo_rosa.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-serif font-bold text-xl tracking-tight leading-none">
              {t('header.title')}
            </h1>
            <span className="text-[9px] uppercase tracking-[0.2em] text-brand font-semibold mt-1">
              {t('header.subtitle')}
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { key: 'trails', label: t('header.nav.trails'), to: '/paths?type=hiking' },
            { key: 'bike', label: t('header.nav.bike'), to: '/paths?type=cycling' },
          ].map((item) => (
            <Link key={item.key} to={item.to} className="text-sm font-medium text-slate-600 hover:text-brand transition-colors relative group">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.buymeacoffee.com/caminhosrainha"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-brand/5 text-brand border border-brand/20 hover:bg-brand/10 transition-all active:scale-95"
          >
            <Coffee className="w-4 h-4" />
            <span>{t('header.nav.support')}</span>
          </a>

          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-brand border border-brand/20 hover:bg-brand/5 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{currentLanguage.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white border border-brand/10 rounded-xl shadow-xl overflow-hidden py-1 animate-in fade-in slide-in-from-top-1 duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-brand/5 transition-colors ${
                      i18n.language === lang.code ? 'text-brand' : 'text-slate-600'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-600">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-white/95 backdrop-blur-md border-b border-brand/10 shadow-xl overflow-hidden animate-in slide-in-from-top-2 duration-300">
          <div className="px-6 py-6 flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              {[
                { key: 'trails', label: t('header.nav.trails'), to: '/paths?type=hiking' },
                { key: 'bike', label: t('header.nav.bike'), to: '/paths?type=cycling' },
              ].map((item) => (
                <Link
                  key={item.key}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl font-bold text-slate-800 hover:text-brand transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="h-px bg-slate-100 my-2"></div>

            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Idioma</span>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                      i18n.language === lang.code
                        ? 'bg-brand text-white border-brand'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-brand/5 hover:border-brand/30'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-slate-100 my-2"></div>

            <a
              href="https://www.buymeacoffee.com/caminhosrainha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-brand text-white hover:bg-brand-dark transition-colors"
            >
              <Coffee className="w-5 h-5" />
              <span>{t('header.nav.support')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
