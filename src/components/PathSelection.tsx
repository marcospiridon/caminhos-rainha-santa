import { useTranslation } from "react-i18next";
import PathCard from "./PathCard";
import { Footprints, Bike } from "lucide-react";
import type { Path } from "../types";

const PathSelection = ({ paths }: { paths: Path[] }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.split('-')[0] || 'pt') as 'pt' | 'en' | 'es';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {paths && paths.map((path) => {
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
  );
};

export default PathSelection;