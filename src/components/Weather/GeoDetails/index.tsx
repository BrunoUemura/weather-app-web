import './styles.scss';

import { IDetailsProps } from './types';

export default function GeoDetails({
  name,
  region,
  country,
  localDate,
  localTime,
}: IDetailsProps) {
  const formattedDate = new Intl.DateTimeFormat(navigator.language).format(
    new Date(localDate),
  );

  return (
    <div className="weather-geo-details">
      <span className="weather-geo-details__location">{`${name}, ${region} - (${country})`}</span>
      <span className="weather-geo-details__local_date">{formattedDate}</span>
      <span className="weather-geo-details__local_time">{localTime}</span>
    </div>
  );
}
