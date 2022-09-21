import './styles.scss';

import { useContext, useState } from 'react';

import { CityContext } from '../../contexts/CityContext';

export default function Search() {
  const { setCity } = useContext(CityContext);
  const [search, setSearch] = useState('');

  const handleSearchCity = () => {
    setCity(search);
  };

  return (
    <div className="search-container">
      <input
        className="search-container__input"
        type="text"
        placeholder="e.g. Campinas"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button className="search-container__button" onClick={handleSearchCity}>
        Search
      </button>
    </div>
  );
}
