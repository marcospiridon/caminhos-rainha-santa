export interface WeatherData {
  temp: number;
  condition: string;
  conditionCode: number;
  city?: string;
}

// Mapping Open-Meteo codes to readable strings (simplified)
export const getWeatherCondition = (code: number): string => {
  if (code === 0) return 'clear';
  if (code >= 1 && code <= 3) return 'cloudy';
  if (code >= 45 && code <= 48) return 'foggy';
  if (code >= 51 && code <= 67) return 'rainy';
  if (code >= 71 && code <= 77) return 'snowy';
  if (code >= 80 && code <= 82) return 'showers';
  if (code >= 95) return 'storm';
  return 'unknown';
};

export const fetchWeather = async (lat: number, lon: number): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`
    );
    const data = await response.json();
    
    // Reverse geocode to get the city name
    let city = undefined;
    try {
      const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`);
      const geoData = await geoRes.json();
      city = geoData.locality || geoData.city || undefined;
    } catch (e) {
      console.error('Failed to resolve location name', e);
    }
    
    return {
      temp: Math.round(data.current.temperature_2m),
      conditionCode: data.current.weather_code,
      condition: getWeatherCondition(data.current.weather_code),
      city
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
