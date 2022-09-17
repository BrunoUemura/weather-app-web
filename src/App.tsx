import './styles/App.scss';

import { useState } from 'react';

import Search from './components/Search';
import Weather from './components/Weather';
import { CityContext } from './contexts/CityContext';
import { backendResponse } from './mocks/BackendResponse';
import { IWeatherType } from './utils/IWeatherType';

export default function App() {
  const [city, setCity] = useState<string>('Calgary');
  const [weather, setWeather] = useState<IWeatherType>(backendResponse);

  return (
    <div className="App">
      <CityContext.Provider value={{ city, setCity, weather, setWeather }}>
        <Search />
        <Weather {...weather} />
      </CityContext.Provider>
    </div>
  );
}
