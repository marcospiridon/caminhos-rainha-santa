import { motion } from 'motion/react';
import { Ruler, TrendingUp, Clock, BarChart2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface StatsGridProps {
  distance: string;
  elevation: string;
  time: string;
  difficulty: string;
}

export default function StatsGrid({ distance, elevation, time, difficulty }: StatsGridProps) {
  const { t } = useTranslation();

  const stats = [
    { label: t('pathPage.stats.distance'), value: distance, unit: 'km', icon: Ruler, color: 'text-accent' },
    { label: t('pathPage.stats.elevation'), value: elevation, unit: 'm', icon: TrendingUp, color: 'text-accent' },
    { label: t('pathPage.stats.time'), value: time, unit: '', icon: Clock, color: 'text-accent' },
    { label: t('pathPage.stats.difficulty'), value: difficulty, unit: '', icon: BarChart2, color: 'text-accent' },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-start gap-3"
        >
          <div className={`p-2 bg-accent/10 rounded-lg ${stat.color}`}>
            <stat.icon size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {stat.value} {stat.unit && <span className="text-sm font-normal text-gray-400">{stat.unit}</span>}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
