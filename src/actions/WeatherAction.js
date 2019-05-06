import { WEATHER_ACTION } from './types';
import api from './api';

export const setWeatherState = weatherData => ({
    type: WEATHER_ACTION,
    weatherData,
});

export const getWeatherAction = (userLatLng) => dispatch =>
    api.foreCast.fetchWeatherData(userLatLng).then(data => dispatch(setWeatherState(data)));