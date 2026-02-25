import { useTranslation } from "react-i18next";
import PathCard from "./PathCard";
import { Footprints, Bike } from "lucide-react";

const PathSelection = () => {
  const { t } = useTranslation();

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
          <PathCard
            title={t('pathSelection.hiking.title')}
            badge={t('pathSelection.hiking.badge')}
            description={t('pathSelection.hiking.description')}
            image="https://images.unsplash.com/photo-1551632432-c735e7396672?auto=format&fit=crop&q=80&w=1000"
            duration={t('pathSelection.hiking.duration')}
            distance={t('pathSelection.hiking.distance')}
            difficulty={t('pathSelection.hiking.difficulty')}
            icon={Footprints}
            buttonText={t('pathSelection.hiking.button')}
            slug="caminho-historico"
          />
          <PathCard
            title={t('pathSelection.cycling.title')}
            badge={t('pathSelection.cycling.badge')}
            description={t('pathSelection.cycling.description')}
            image="https://images.unsplash.com/photo-1541625602330-2277a4c4b282?auto=format&fit=crop&q=80&w=1000"
            duration={t('pathSelection.cycling.duration')}
            distance={t('pathSelection.cycling.distance')}
            difficulty={t('pathSelection.cycling.difficulty')}
            icon={Bike}
            buttonText={t('pathSelection.cycling.button')}
            slug="aventura-gravel"
          />
        </div>
      </div>
    </section>
  );
};

export default PathSelection;