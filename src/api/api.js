import *as axios from 'axios';

export const weatherApi = {
    getWeatherOneSource(nameCity){
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${nameCity},by&appid=2c73aea93be4b2c4c3d654b6046363ad&units=metric`)
        .then(responce =>{
            return responce;
        })
    },
    getWeatherTwoSource(){
        return axios.get(`https://api.stormglass.io/v1/weather/point?lat=58.7984&lng=17.8081`, {
            headers: {
              'Authorization': '16296166-d006-11e9-81a5-0242ac130004-16296288-d006-11e9-81a5-0242ac130004'
            }})
        .then(responce=>{
            return responce;
        })
    }
}

