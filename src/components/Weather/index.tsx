import './styles.scss';

import { useContext } from 'react';

import { CityContext } from '../../contexts/CityContext';
import { IWeatherType } from '../../utils/IWeatherType';
import Temperature from './Temperature';

export default function Weather(props: IWeatherType) {
  const { city, setWeather } = useContext(CityContext);

  return (
    <div className="WeatherContainer">
      <Temperature temperatureInC={props.temperatureInC} />

      <div className="WeatherRightInfo">
        <div className="WeatherRegionInfo">
          <h1>{`${props.name}, ${props.country}`}</h1>
          <h2>{props.localTime}</h2>
        </div>

        <div className="WeatherDetails">
          <h1>{props.condition}</h1>
          <p>Humiduty: {props.humidity}</p>
          <p>Feels like: {props.feelsLikeInC}</p>
        </div>
      </div>
    </div>
  );
}
