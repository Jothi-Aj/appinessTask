import { WEATHER_ACTION } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
    case WEATHER_ACTION:
        return action.weatherData;
    default:
        return state;
    }
};