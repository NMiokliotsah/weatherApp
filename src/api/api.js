import *as axios from 'axios';

export const weatherApi = {
    getWeatherOneSource(nameCity){
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=c81c42c72794bfc3205447b95acef58a&units=metric`)
        .then( response =>{
            return response;
        });
    }
}

export const getLocation = ()=>{
    return axios.get("https://ipinfo.io/?token=5d59e8cf925c0f")
    .then( response =>{
        return response;
    });
}
