import { combineReducers } from "redux";
import fetchWeather from './weather_reducer'

const rootReducers = combineReducers({
weather:fetchWeather
});

export default rootReducers;