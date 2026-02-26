import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import * as toGeoJSON from '@tmcw/togeojson';
import 'leaflet/dist/leaflet.css';
import type { POI } from '../types';
import { Bed, Utensils, Camera, HeartPulse } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useTranslation } from 'react-i18next';

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

// Component to handle map fitting
function ChangeView({ bounds }: { bounds: L.LatLngBoundsExpression | null }) {
  const map = useMap();
  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [bounds, map]);
  return null;
}

interface MapProps {
  gpxUrl: string;
  pois?: POI[];
}

export default function RouteMap({ gpxUrl, pois }: MapProps) {
  const { i18n: i18nInstance } = useTranslation();
  const [positions, setPositions] = useState<[number, number][]>([]);
  const [bounds, setBounds] = useState<L.LatLngBoundsExpression | null>(null);

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

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={[40.2033, -8.4103]}
        zoom={13}
        scrollWheelZoom={false}
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
            weight={5}
            opacity={0.8}
          />
        )}

        {pois && pois.map((poi) => {
          const CategoryIcon = iconMap[poi.category] || Camera;
          const customIcon = createCustomIcon(CategoryIcon, '#c18182');
          const lang = (i18nInstance.language?.split('-')[0] || 'pt') as 'pt' | 'en' | 'es';
          const text = poi.i18n[lang] || poi.i18n.pt;

          // For PoIs, we'll use approximate positions around Coimbra for the placeholder
          // In a real app, POI would have lat/lng
          const mockLatLng: [number, number] = [
            40.2033 + (Math.random() - 0.5) * 0.01,
            -8.4103 + (Math.random() - 0.5) * 0.01
          ];

          return (
            <Marker
              key={poi.id}
              position={mockLatLng}
              icon={customIcon}
            >
              <Popup>
                <div className="p-1">
                  <h4 className="font-bold text-slate-900">{text.name}</h4>
                  <p className="text-xs text-slate-500">{text.categoryLabel}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}

        <ChangeView bounds={bounds} />
      </MapContainer>
    </div>
  );
}
