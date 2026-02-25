import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Clock, BarChart3, ArrowRight, Map } from "lucide-react";

const PathCard = ({ title, description, image, badge, duration, distance, difficulty, icon: Icon, buttonText, slug }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group bg-white rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 border border-slate-50 flex flex-col h-full"
  >
    <div className="relative h-72 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white p-2 rounded-full border border-white/30">
        <Icon className="w-5 h-5" />
      </div>
      <div className="absolute bottom-6 left-6 text-white">
        <span className="text-[10px] font-bold uppercase tracking-wider bg-brand px-2 py-1 rounded mb-2 inline-block">{badge}</span>
        <h3 className="text-3xl font-serif">{title}</h3>
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
        {description}
      </p>
      <div className="flex flex-wrap items-center gap-y-4 gap-x-6 mb-8 text-sm font-medium text-slate-500">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-brand" />
          {duration}
        </div>
        <div className="flex items-center gap-1.5">
          <Map className="w-4 h-4 text-brand" />
          {distance}
        </div>
        <div className="flex items-center gap-1.5">
          <BarChart3 className="w-4 h-4 text-brand" />
          {difficulty}
        </div>
      </div>
      <Link
        to={`/path/${slug}`}
        className="w-full p-4 rounded-xl bg-slate-50 hover:bg-brand/10 group/btn transition-all flex items-center justify-between border border-slate-100"
      >
        <span className="font-bold text-slate-900 group-hover/btn:text-brand transition-colors">{buttonText}</span>
        <ArrowRight className="w-5 h-5 text-slate-400 group-hover/btn:text-brand transition-colors" />
      </Link>
    </div>
  </motion.div>
);

export default PathCard;