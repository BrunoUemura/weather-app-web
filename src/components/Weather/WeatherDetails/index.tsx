import './styles.scss';

import { IWeatherDetailsProps } from './types';

export default function WeatherDetails({
  condition,
  humidity,
  feelsLikeInC,
}: IWeatherDetailsProps) {
  return (
    <div className="weather-details">
      <span className="weather-details__condition">{condition}</span>
      <span>Humiduty: {humidity}</span>
      <span>Feels like: {feelsLikeInC}</span>
    </div>
  );
}
