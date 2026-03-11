import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import * as toGeoJSON from '@tmcw/togeojson';
import 'leaflet/dist/leaflet.css';
import type { POI } from '../types';
import { Bed, Utensils, Camera, HeartPulse, Droplet, MousePointer2, X } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useTranslation } from 'react-i18next';
import { getAffiliateUrl } from '../utils/urlUtils';

// Fix for default Leaflet icon paths in Vite/React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom icons based on POI category
const iconMap = {
  sleep: Bed,
  eat: Utensils,
  see: Camera,
  help: HeartPulse,
  water: Droplet,
};

const createCustomIcon = (CategoryIcon: any, color: string) => {
  const html = renderToStaticMarkup(
    <div
      style={{ color }}
      className="bg-white w-9 h-9 flex items-center justify-center rounded-full shadow-md border-2 border-current aspect-square"
    >
      <CategoryIcon size={20} />
    </div>
  );
  return L.divIcon({
    html,
    className: 'custom-leaflet-icon',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
};

// Component to handle map fitting and interaction status
function MapController({ bounds, isInteractive }: { bounds: L.LatLngBoundsExpression | null, isInteractive: boolean }) {
  const map = useMap();
  
  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [bounds, map]);

  useEffect(() => {
    if (isInteractive) {
      map.dragging.enable();
      map.touchZoom.enable();
      map.doubleClickZoom.enable();
      map.scrollWheelZoom.enable();
      if ((map as any).tap) (map as any).tap.enable();
      // Handle resize for fullscreen transition
      setTimeout(() => {
        map.invalidateSize();
      }, 300);
    } else {
      map.dragging.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      if ((map as any).tap) (map as any).tap.disable();
      // Handle resize when returning to normal view
      setTimeout(() => {
        map.invalidateSize();
      }, 300);
    }
  }, [isInteractive, map]);

  return null;
}

interface MapProps {
  gpxUrl: string;
  pois?: POI[];
}

export default function RouteMap({ gpxUrl, pois }: MapProps) {
  const { i18n: i18nInstance, t } = useTranslation();
  const [positions, setPositions] = useState<[number, number][]>([]);
  const [bounds, setBounds] = useState<L.LatLngBoundsExpression | null>(null);
  const [isInteractive, setIsInteractive] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth >= 1024 : false;
  });

  useEffect(() => {
    if (!gpxUrl) return;

    fetch(gpxUrl)
      .then(response => response.text())
      .then(str => {
        const dom = new DOMParser().parseFromString(str, "text/xml");
        const geojson = toGeoJSON.gpx(dom);

        const coords: [number, number][] = [];
        geojson.features.forEach((feature: any) => {
          if (feature.geometry.type === 'LineString') {
            feature.geometry.coordinates.forEach((c: any) => {
              coords.push([c[1], c[0]]);
            });
          }
        });

        if (coords.length > 0) {
          setPositions(coords);
          const polyline = L.polyline(coords);
          setBounds(polyline.getBounds());
        }
      })
      .catch(err => console.error("Error loading GPX:", err));
  }, [gpxUrl]);

  const containerClasses = isInteractive 
    ? "fixed inset-0 z-[1000] w-screen h-screen bg-white transition-all duration-300 lg:relative lg:w-full lg:h-full lg:z-0"
    : "w-full h-full relative z-0 group transition-all duration-300";

  return (
    <div className={containerClasses}>
      <MapContainer
        center={[40.2033, -8.4103]}
        zoom={13}
        scrollWheelZoom={false}
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {positions.length > 0 && (
          <Polyline
            positions={positions}
            color="#c18182"
            weight={8}
            opacity={1}
          />
        )}

        {pois && pois.map((poi, idx) => {
          const CategoryIcon = iconMap[poi.category] || Camera;
          const customIcon = createCustomIcon(CategoryIcon, '#c18182');
          const lang = (i18nInstance.language?.split('-')[0] || 'pt') as 'pt' | 'en' | 'es';
          const text = poi.i18n[lang] || poi.i18n.pt;

          return (
            <Marker
              key={`${poi.i18n.pt.name}-${idx}`}
              position={poi.latlng}
              icon={customIcon}
            >
              <Popup>
                <div className="p-1 min-w-[150px]">
                  <h4 className="font-bold text-slate-900 leading-tight mb-1">{text.name}</h4>
                  <p className="text-xs text-slate-500 mb-1">{text.categoryLabel}</p>
                  {poi.contact && <p className="text-xs text-slate-500 mb-2">{poi.contact}</p>}

                  {poi.url && (
                    <a
                      href={getAffiliateUrl(poi, lang) || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      {lang === 'pt' ? 'Ver Mais' : lang === 'es' ? 'Ver más' : 'View More'}
                      <span className="text-[10px]">→</span>
                    </a>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}

        <MapController bounds={bounds} isInteractive={isInteractive} />
      </MapContainer>

      {/* Mobile Interaction Overlay */}
      {!isInteractive && (
        <div 
          onClick={() => setIsInteractive(true)}
          className="lg:hidden absolute inset-0 z-[1001] bg-black/5 backdrop-blur-[1px] flex flex-col items-center justify-center cursor-pointer group/overlay transition-all hover:bg-black/10"
        >
          <div className="bg-white/90 dark:bg-slate-900/90 px-6 py-3 rounded-full shadow-lg border border-brand/20 flex items-center gap-3 transform transition-transform group-hover/overlay:scale-105 active:scale-95">
            <MousePointer2 className="w-5 h-5 text-brand animate-bounce" />
            <span className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">
              {t('map.interact')}
            </span>
          </div>
        </div>
      )}

      {/* Exit Map Mode Button */}
      {isInteractive && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsInteractive(false);
          }}
          className="lg:hidden absolute top-4 right-4 z-[1002] bg-white/90 dark:bg-slate-900/90 p-2 rounded-full shadow-lg border border-brand/20 text-brand hover:bg-brand hover:text-white transition-all active:scale-95 flex items-center gap-2 pr-4"
        >
          <X className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-widest">{t('map.exit')}</span>
        </button>
      )}
    </div>
  );
}
