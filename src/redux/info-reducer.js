import { weatherApi } from '../api/api';


const SET_WEATHER = "SET-WEATHER";

const initialState = {
    country: undefined,
    city: undefined,
    temp: undefined,
    spedWind: undefined,
    pressure: undefined,
    humidity: undefined,

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

export const setWeather = (country, city, temp, spedWind, pressure, humidity) => ({ type: SET_WEATHER, data: { country, city, temp, spedWind, pressure, humidity } });

export const weatherDataOneSource = (nameCity) => {
    return (dispatch) => {
        weatherApi.getWeatherOneSource(nameCity)
            .then(responce => {
                dispatch(setWeather(responce.data.sys.country, responce.data.name, responce.data.main.temp, responce.data.wind.speed,
                    responce.data.main.pressure, responce.data.main.humidity))
    });
}
}

export const weatherDataTwoSource = () => {
    return (dispatch) => {
        weatherApi.getWeatherTwoSource()
        // .then((response) => response.json()).then((jsonData) => {
        //     console.log(jsonData);
        //   });
            .then(responce => {
                // console.log(responce.data.meta.params[0]);
                console.log(responce.hours);
                // dispatch(setWeather(responce.data.sys.country, responce.data.name, responce.data.main.temp,
                //     responce.data.sys.sunrise, responce.data.sys.sunset))
            });
    }
}

export default authReducer;
