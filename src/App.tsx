import './styles/App.scss';

import { useEffect, useState } from 'react';

import Search from './components/Search';
import Weather from './components/Weather';
import { CityContext } from './contexts/CityContext';
import { getWeatherDetails } from './services/WeatherAPI';
import { InitialWeatherState } from './utils/InitialWeatherState';
import { IWeatherType } from './utils/IWeatherType';

export default function App() {
  const [city, setCity] = useState<string>('campinas');
  const [weather, setWeather] = useState<IWeatherType>(InitialWeatherState);
  const [weatherReady, setWeatherReady] = useState(false);

  const fetchWeather = async () => {
    return getWeatherDetails(city);
  };

  useEffect(() => {
    fetchWeather().then((data) => {
      setWeather(data);
      setWeatherReady(true);
    });
  }, [city]);

  return (
    <div className="App">
      <CityContext.Provider value={{ city, setCity, weather, setWeather }}>
        <Search setWeatherReady={setWeatherReady} />
        <Weather weather={weather} weatherReady={weatherReady} />
      </CityContext.Provider>
    </div>
  );
}
