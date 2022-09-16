import { IWeatherType } from "../utils/IWeatherType";

export type ICityContext = {
  city: string | null;
  setCity: any;
  weather: IWeatherType | null;
  setWeather: any;
};
