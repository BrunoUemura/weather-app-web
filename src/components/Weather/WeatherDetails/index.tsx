import { IWeatherDetailsProps } from './types';

export default function WeatherDetails({
  condition,
  humidity,
  feelsLikeInC,
}: IWeatherDetailsProps) {
  return (
    <div className="weather-details">
      <h1>{condition}</h1>
      <p>Humiduty: {humidity}</p>
      <p>Feels like: {feelsLikeInC}</p>
    </div>
  );
}
