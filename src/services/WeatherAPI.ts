import { api } from './api';

export async function getWeatherDetails(city: string | null) {
  try {
    return api.get(`/v1/weather?city=${city}`).then(({ data }) => {
      return data;
    });
  } catch (error) {
    console.log(error);
  }
}
