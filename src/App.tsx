import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Hero, PathSelection } from "./components";
import { Paths, Path, Stage } from "./pages";
import { paths } from "./data/pathsData";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
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
            <Route path="/paths" element={<Paths />} />
            <Route path="/path/:slug" element={<Path />} />
            <Route path="/path/:slug/:stage" element={<Stage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
