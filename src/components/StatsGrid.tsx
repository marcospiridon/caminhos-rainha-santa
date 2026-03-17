import { motion } from 'motion/react';
import { Ruler, TrendingUp, Clock, BarChart2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface StatsGridProps {
  distance: number;
  elevation: number;
  duration: number;
  durationUnit: 'hours' | 'days';
  difficulty: string;
  onElevationClick?: () => void;
  onStagesClick?: () => void;
}

export default function StatsGrid({ distance, elevation, duration, durationUnit, difficulty, onElevationClick, onStagesClick }: StatsGridProps) {
  const { t } = useTranslation();

  const durationStr = t(`common.duration.${durationUnit}`, { count: duration });
  const [durVal, ...durUnitParts] = durationStr.split(' ');
  const durUnit = durUnitParts.join(' ');

  const stats = [
    { id: 'distance', label: t('pathPage.stats.distance'), value: distance, unit: 'km', icon: Ruler, color: 'text-accent' },
    { id: 'elevation', label: t('pathPage.stats.elevation'), value: elevation, unit: 'm', icon: TrendingUp, color: 'text-accent', interactive: !!onElevationClick },
    {
      id: 'duration',
      label: t('pathPage.stats.duration'),
      value: durVal,
      unit: durUnit,
      icon: Clock,
      color: 'text-accent',
      interactive: !!onStagesClick
    },
    { id: 'difficulty', label: t('pathPage.stats.difficulty'), value: difficulty, unit: '', icon: BarChart2, color: 'text-accent' },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const isElevation = stat.id === 'elevation';
        const isDuration = stat.id === 'duration';
        const onClick = isElevation ? onElevationClick : (isDuration ? onStagesClick : undefined);
        const clickable = (isElevation && onElevationClick) || (isDuration && onStagesClick);

        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={onClick}
            className={`bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-start gap-3 transition-all ${
              clickable ? 'cursor-pointer hover:border-brand/30 hover:shadow-md active:scale-95 group' : ''
            }`}
          >
            <div className={`p-2 bg-accent/10 rounded-lg ${stat.color} ${clickable ? 'group-hover:bg-brand/10 group-hover:text-brand transition-colors' : ''}`}>
              <stat.icon size={20} />
            </div>
            <div className="w-full">
              <p className="text-sm text-gray-500 font-medium flex items-center gap-1.5">
                {stat.label}
                {isElevation && clickable && (
                  <TrendingUp
                    size={12}
                    className="text-brand opacity-60"
                  />
                )}
              </p>
              <div className="flex items-baseline gap-1 w-full">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                {stat.unit && <span className="text-sm font-normal text-gray-400">{stat.unit}</span>}
                {clickable && (
                  <span className="ml-auto text-[10px] uppercase font-bold text-brand bg-brand/5 px-2 py-0.5 rounded border border-brand/10 transition-colors group-hover:bg-brand group-hover:text-white">
                    {isElevation ? t('common.details') : t('pathPage.sections.stages')}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
