import { useTranslation } from "react-i18next";
import PathCard from "./PathCard";
import { Footprints, Bike } from "lucide-react";
import type { Path } from "../types";

const PathSelection = ({ paths }: { paths: Path[] }) => {
  const { i18n, t } = useTranslation();
  const lang = (i18n.language?.split('-')[0] || 'pt') as 'pt' | 'en' | 'es';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {paths && paths.map((path) => {
        const text = path.details.i18n[lang] || path.details.i18n.pt;
        return (
          <PathCard
            key={path.id}
            title={text.title}
            badge={text.badge}
            description={text.description}
            image={path.image}
            duration={t(`common.duration.${path.details.durationUnit}`, { count: path.details.duration })}
            distance={path.details.distance}
            difficulty={t(path.details.difficultyKey)}
            icon={path.type === 'hiking' ? Footprints : Bike}
            buttonText={t(`common.button.${path.type}`)}
            slug={path.slug}
          />
        );
      })}
    </div>
  );
};

export default PathSelection;