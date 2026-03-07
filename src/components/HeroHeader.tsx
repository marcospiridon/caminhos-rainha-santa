import { Link } from "react-router-dom";
import { ArrowLeft, Footprints, Bike } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface HeroHeaderProps {
  image: string;
  type: string;
  title: string;
  parentTitle?: string;
  badge?: string;
  description: string;
  backLink: string;
}

const HeroHeader = ({ image, type, title, parentTitle, badge, description, backLink }: HeroHeaderProps) => {
  const { t } = useTranslation();
  const TypeIcon = type === 'hiking' ? Footprints : Bike;
  return (
    <header className="relative w-full min-h-[450px] md:h-[500px] flex items-end overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          alt={title}
          className="w-full h-full object-cover brightness-75"
          src={image}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-24 pb-12 flex items-start gap-6">
        <Link
          to={backLink}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all text-white border border-white/20 mt-1 flex-shrink-0 group"
          aria-label="Voltar"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </Link>

        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm self-start"
          >
            <TypeIcon size={14} className="opacity-90" />
            <span>{badge || t(`pathsPage.filters.${type}`)}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2"
          >
            {parentTitle && (
              <span className="block text-2xl md:text-3xl font-bold text-white/90 mb-1">
                {parentTitle}
              </span>
            )}
            {title && <span className="block text-brand">{title}</span>}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
