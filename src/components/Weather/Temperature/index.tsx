import './styles.scss';

import { useState } from 'react';

import cloudy from '../../../assets/conditions/cloudy.png';
import rainy from '../../../assets/conditions/rainy.png';
import sunny from '../../../assets/conditions/sunny.png';
import { ITemperatureProps } from './types';

export default function Temperature({
  condition,
  temperatureInC,
  temperatureInF,
}: ITemperatureProps) {
  const [selectedScale, setSelectedScale] = useState('C');

  const selectedTemperature = selectedScale === 'C' ? temperatureInC : temperatureInF;
  const formattedTemperature = `${selectedTemperature}° ${selectedScale}`;

  let weatherCondition;

  if (condition.includes('cloud')) weatherCondition = cloudy;
  if (condition.includes('rain')) weatherCondition = rainy;
  if (condition.includes('sun')) weatherCondition = sunny;

  return (
    <div className="weather-temperature">
      <div>
        <img src={weatherCondition} alt={condition} />
      </div>

      <div>
        <span className="weather-temperature__current">{formattedTemperature}</span>
      </div>

      <div className="weather-temperature__scale_options">
        <button onClick={() => setSelectedScale('C')}>C</button>
        <button onClick={() => setSelectedScale('F')}>F</button>
      </div>
    </div>
  );
}
