import './styles.scss';

// import { useContext } from 'react';
// import { CityContext } from '../../contexts/CityContext';
import { IWeatherType } from '../../utils/IWeatherType';
import GeoDetails from './GeoDetails';
import Temperature from './Temperature';
import WeatherDetails from './WeatherDetails';

export default function Weather(props: IWeatherType) {
  // const { city, setWeather } = useContext(CityContext);

  return (
    <div className="weather-container">
      <GeoDetails
        name={props.name}
        region={props.region}
        country={props.country}
        localDate={props.localDate}
        localTime={props.localTime}
      />

      <Temperature
        condition={props.condition.text}
        conditionImage={props.condition.icon}
        temperatureInC={props.temperatureInC}
        temperatureInF={props.temperatureInF}
      />

      <WeatherDetails
        condition={props.condition.text}
        humidity={props.humidity}
        feelsLikeInC={props.feelsLikeInC}
        feelsLikeInF={props.feelsLikeInF}
      />
    </div>
  );
}
