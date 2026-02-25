import type { POI } from '../types';
import { Bed, Utensils, Camera, HeartPulse, Star } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap = {
  sleep: Bed,
  eat: Utensils,
  see: Camera,
  help: HeartPulse,
};

export default function POISection({ pois }: { pois: POI[] }) {
  return (
    <section>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
        <span className="text-primary">
          <Camera size={20} />
        </span>
        Pontos de Interesse
      </h3>
      <div className="flex flex-col gap-4">
        {pois.map((poi, index) => {
          const Icon = iconMap[poi.category] || Camera;
          return (
            <motion.div
              key={poi.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all flex gap-4 items-center cursor-pointer"
            >
              <div className="size-14 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                <img
                  src={poi.imageUrl}
                  alt={poi.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{poi.name}</h4>
                  <Icon size={16} className="text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mb-1">{poi.categoryLabel}</p>
                <div className="flex items-center gap-1 text-yellow-500 text-xs">
                  <Star size={14} className="fill-current" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">{poi.rating}</span>
                  <span className="text-gray-400">({poi.reviews})</span>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Static Helper Example */}
        <div className="group bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all flex gap-4 items-center">
          <div className="size-14 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
            <HeartPulse size={24} className="text-red-500" />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Farmácia Central</h4>
              <HeartPulse size={16} className="text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 mb-1">Aberto 24h</p>
            <div className="flex items-center gap-1 text-xs text-primary font-medium cursor-pointer hover:underline">
              Ligar agora
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
