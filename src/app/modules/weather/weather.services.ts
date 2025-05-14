import { env } from "../../config/env";

export const getWeatherDataFormApi = async (city: string) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${env.WEATHER_API_KEY}&contentType=json`
  );

  if (!response.ok) {
    throw new Error(`Weather API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};
