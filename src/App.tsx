import { BrowserRouter as Router, Routes, Route, useParams, useLocation } from "react-router-dom";
import { Header, Hero, PathSelection, Footer, SEO } from "./components";
import { Paths, Path, Stage } from "./pages";
import { paths } from "./data/pathsData";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

// Componente para sincronizar a língua do i18n com o URL
const LanguageSync = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Se houver uma língua no URL e for válida, muda o i18n
    if (lang && ['pt', 'en', 'es'].includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else if (!lang && location.pathname === '/') {
      // Se estiver na root sem língua, não fazemos nada (deixa o detector padrão atuar)
    }
  }, [lang, i18n, location.pathname]);

  return null;
};

function App() {
  const { t } = useTranslation();
  
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Rota com prefixo de língua opcional */}
          <Route path="/:lang?" element={
            <>
              <LanguageSync />
              <SEO />
              <Header />
              <main>
                <Routes>
                  <Route index element={
                    <>
                      <Hero />
                      <section className="py-24 px-6">
                        <div className="max-w-7xl mx-auto">
                          <div className="text-center mb-16 max-w-2xl mx-auto">
                            <h2 className="text-4xl md:text-5xl mb-6">{t('pathSelection.title')}</h2>
                            <div className="w-20 h-1 bg-brand/30 mx-auto mb-8"></div>
                            <p className="text-slate-600 text-lg">
                              {t('pathSelection.description')}
                            </p>
                          </div>
                          <PathSelection paths={paths.filter(path => !path.parentSlug)} />
                        </div>
                      </section>
                    </>
                  } />
                  <Route path="paths" element={<Paths />} />
                  <Route path="path/:slug" element={<Path />} />
                  <Route path="path/:slug/:stage" element={<Stage />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
