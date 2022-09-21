export interface IWeatherProps {
  weather: IWeatherType;
  weatherReady: boolean;
}

export interface IWeatherType {
  name: string;
  region: string;
  country: string;
  localDate: string;
  localTime: string;
  temperatureInC: number;
  temperatureInF: number;
  feelsLikeInC: number;
  feelsLikeInF: number;
  condition: {
    text: string;
    icon: string;
  };
  humidity: number;
  forecast?: Forecast[];
}

interface Forecast {
  date: string;
  maxTemperatureInC: number;
  maxTemperatureInF: number;
  minTemperatureInC: number;
  minTemperatureInF: number;
  avgTemperatureInC: number;
  avgTemperatureInf: number;
  condition: {
    text: string;
    icon: string;
  };
}
