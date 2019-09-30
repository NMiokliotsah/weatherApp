import { weatherApi, getLocation } from '../api/api';

const SET_WEATHER = "SET-WEATHER";

const initialState = {
    country: undefined,
    city: undefined,
    temp: undefined,
    spedWind: undefined,
    pressure: undefined,
    humidity: undefined,
    requestTime: undefined
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

export const setWeather = (country, city, temp, spedWind, pressure, humidity) =>
    ({ type: SET_WEATHER, data: { country, city, temp, spedWind, pressure, humidity } });

export const weatherDataOneSource = (nameCity) => {
    return (dispatch) => {
        weatherApi.getWeatherOneSource(nameCity)
            .then(responce => {
                dispatch(setWeather(responce.data.sys.country, responce.data.name, responce.data.main.temp,
                    responce.data.wind.speed,
                    responce.data.main.pressure, responce.data.main.humidity));
            });
    }
}

export const weatherDataTwoSource = (nameCity) => {
    return (dispatch) => {
        weatherApi.getWeatherTwoSource(nameCity)
            .then(responce => {
                dispatch(setWeather(responce.data.data[0].country_code, responce.data.data[0].city_name, responce.data.data[0].app_temp,
                    responce.data.data[0].wind_spd, responce.data.data[0].pres, responce.data.data[0].rh));
            });
    }
}


export const getUserLocation = () => {
    return (dispatch) => {
        getLocation().then(responce => {
            weatherApi.getWeatherOneSource(responce.data.city)
                .then(responce => {
                    dispatch(setWeather(responce.data.sys.country, responce.data.name, responce.data.main.temp,
                        responce.data.wind.speed,
                        responce.data.main.pressure, responce.data.main.humidity));
                });
        });
    }
}



export default authReducer;
