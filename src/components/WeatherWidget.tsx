import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind } from 'lucide-react';
import { fetchWeather, type WeatherData } from '../services/weatherService';

interface WeatherWidgetProps {
  lat?: number;
  lng?: number;
}

const WeatherWidget = ({ lat, lng }: WeatherWidgetProps) => {
  const { i18n } = useTranslation();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!lat || !lng) {
      setLoading(false);
      return;
    }

    const getWeather = async () => {
      try {
        setLoading(true);
        const data = await fetchWeather(lat, lng);
        setWeather(data);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [lat, lng]);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'clear': return <Sun className="text-amber-500" size={32} />;
      case 'cloudy': return <Cloud className="text-slate-400" size={32} />;
      case 'rainy':
      case 'showers': return <CloudRain className="text-blue-500" size={32} />;
      case 'snowy': return <CloudSnow className="text-blue-200" size={32} />;
      case 'storm': return <CloudLightning className="text-amber-600" size={32} />;
      default: return <Sun className="text-amber-500" size={32} />;
    }
  };

  const getConditionLabel = (condition: string) => {
    const labels: Record<string, any> = {
      pt: {
        clear: 'Céu Limpo',
        cloudy: 'Nublado',
        rainy: 'Chuva',
        snowy: 'Neve',
        storm: 'Tempestade',
        showers: 'Aguaceiros',
        unknown: 'Sol'
      },
      en: {
        clear: 'Clear Sky',
        cloudy: 'Cloudy',
        rainy: 'Rain',
        snowy: 'Snow',
        storm: 'Storm',
        showers: 'Showers',
        unknown: 'Sunny'
      },
      es: {
        clear: 'Despejado',
        cloudy: 'Nublado',
        rainy: 'Lluvia',
        snowy: 'Nieve',
        storm: 'Tormenta',
        showers: 'Chubascos',
        unknown: 'Soleado'
      }
    };
    
    const lang = (i18n.language || 'pt').split('-')[0] as 'pt' | 'en' | 'es';
    return labels[lang]?.[condition] || labels['pt'][condition];
  };

  if (loading) {
    return (
      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm animate-pulse flex items-center gap-4 h-[108px]">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full" />
        <div className="flex-grow space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
        </div>
      </div>
    );
  }

  if (error || !weather) return null;

  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-md h-full flex flex-col justify-center group overflow-hidden relative">
      <div className="flex items-center gap-5 justify-between w-full relative z-10">
        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl transition-transform group-hover:scale-110 duration-500">
          {getWeatherIcon(weather.condition)}
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1 line-clamp-1">
            {weather.city ? weather.city : (i18n.language.startsWith('pt') ? 'Meteorologia' : i18n.language.startsWith('es') ? 'Meteorología' : 'Current Weather')}
          </h4>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {getConditionLabel(weather.condition)}
          </p>
        </div>
      </div>
      
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
          {weather.temp}
        </span>
        <span className="text-xl font-bold text-brand">°C</span>
      </div>

      {/* Subtle Background Element */}
      <div className="absolute -bottom-4 -right-4 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
        <Wind size={80} />
      </div>
    </div>
  );
};

export default WeatherWidget;
