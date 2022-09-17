import './styles.scss';

import { ITemperatureProps } from './types';

export default function Temperature({ temperatureInC }: ITemperatureProps) {
  return (
    <div className="weather-temperature">
      <span>{temperatureInC}</span>
    </div>
  );
}
