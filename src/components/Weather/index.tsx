import './styles.scss';

import { useContext } from 'react';

import { CityContext } from '../../contexts/CityContext';
import { IWeatherType } from '../../utils/IWeatherType';
import GeoDetails from './GeoDetails';
import Temperature from './Temperature';

export default function Weather(props: IWeatherType) {
  const { city, setWeather } = useContext(CityContext);

  return (
    <div className="WeatherContainer">
      <Temperature
        condition={props.condition}
        temperatureInC={props.temperatureInC}
        temperatureInF={props.temperatureInF}
      />

      <div className="WeatherRightInfo">
        <GeoDetails
          name={props.name}
          region={props.region}
          country={props.country}
          localDate={props.localDate}
          localTime={props.localTime}
        />

        <div className="WeatherDetails">
          <h1>{props.condition}</h1>
          <p>Humiduty: {props.humidity}</p>
          <p>Feels like: {props.feelsLikeInC}</p>
        </div>
      </div>
    </div>
  );
}
