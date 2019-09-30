import *as axios from 'axios';

export const weatherApi = {
    getWeatherOneSource(nameCity){
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=2c73aea93be4b2c4c3d654b6046363ad&units=metric`)
        .then(responce =>{
            return responce;
        })
    },

    getWeatherTwoSource(nameCity){
        return axios.get(`https://api.weatherbit.io/v2.0/current?city=${nameCity},be&key=f9e70663bfd64fa58d1507eb10c22256`, {
            headers: {
              'Authorization': '16296166-d006-11e9-81a5-0242ac130004-16296288-d006-11e9-81a5-0242ac130004'
            }})
        .then(responce=>{
            return responce;
        })
    }
}


export const getLocation = ()=>{
    return axios.get("https://ipinfo.io/?token=5d59e8cf925c0f")
    .then( (responce) =>{
        return responce;
    })
}
