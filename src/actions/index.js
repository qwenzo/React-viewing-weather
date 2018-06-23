import axios from 'axios';
export const FETCH_WEATHER='FETCH_WEATHER';
const API_KEY='68282b2cd158f39a3b190d9ba67080ed';
const BASE_URL='https://api.openweathermap.org/data/2.5/forecast?appid='+API_KEY;
    export function fetchWeather(city , countrey){

        const REQ_URL=BASE_URL+'&q='+city+","+countrey;
       const req=axios.get(REQ_URL);
        return{
            type:FETCH_WEATHER,
            payload:req
        }




   
}