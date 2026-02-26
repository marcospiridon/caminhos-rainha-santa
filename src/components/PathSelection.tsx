import { useTranslation } from "react-i18next";
import PathCard from "./PathCard";
import { Footprints, Bike } from "lucide-react";
import { paths } from "../data/pathsData";

const PathSelection = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.split('-')[0] || 'pt') as 'pt' | 'en' | 'es';

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6">{t('pathSelection.title')}</h2>
          <div className="w-20 h-1 bg-brand/30 mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg">
            {t('pathSelection.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {paths.map((path) => {
            const text = path.i18n[lang] || path.i18n.pt;
            return (
              <PathCard
                key={path.id}
                title={text.title}
                badge={text.badge}
                description={text.description}
                image={path.image}
                duration={text.duration}
                distance={text.distance}
                difficulty={text.difficulty}
                icon={path.type === 'hiking' ? Footprints : Bike}
                buttonText={text.button}
                slug={path.slug}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PathSelection;