import './styles.scss';

import { IWeatherProps } from '../../utils/IWeatherType';
import Loader from '../Loader';
import GeoDetails from './GeoDetails';
import Temperature from './Temperature';
import WeatherDetails from './WeatherDetails';

export default function Weather({ weather, weatherReady }: IWeatherProps) {
  if (!weatherReady) {
    return (
      <div className="weather-container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="weather-container">
      <GeoDetails
        name={weather.name}
        region={weather.region}
        country={weather.country}
        localDate={weather.localDate}
        localTime={weather.localTime}
      />
      <Temperature
        condition={weather.condition.text}
        conditionImage={weather.condition.icon}
        temperatureInC={weather.temperatureInC}
        temperatureInF={weather.temperatureInF}
      />
      <WeatherDetails
        condition={weather.condition.text}
        humidity={weather.humidity}
        feelsLikeInC={weather.feelsLikeInC}
        feelsLikeInF={weather.feelsLikeInF}
      />
    </div>
  );
}
