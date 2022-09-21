import './styles.scss';

import { useState } from 'react';

import { ITemperatureProps } from './types';

export default function Temperature({
  condition,
  conditionImage,
  temperatureInC,
  temperatureInF,
}: ITemperatureProps) {
  const [selectedScale, setSelectedScale] = useState('C');

  const selectedTemperature = selectedScale === 'C' ? temperatureInC : temperatureInF;
  const formattedTemperature = `${selectedTemperature}° ${selectedScale}`;

  return (
    <div className="weather-temperature">
      <div className="weather-temperature__condition">
        <img src={conditionImage} alt={condition} />
      </div>

      <div className="weather-temperature__details">
        <span className="weather-temperature__current">{formattedTemperature}</span>

        <div className="weather-temperature__scale_options">
          <button onClick={() => setSelectedScale('C')}>C</button>
          <button onClick={() => setSelectedScale('F')}>F</button>
        </div>
      </div>
    </div>
  );
}
