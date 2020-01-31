import { weatherApi, getLocation } from '../api/api';

const SET_WEATHER   = "SET-WEATHER";
const SET_FETCHING  = "SET-FETCHING";
const SET_TIME      = "SET-TIME";
const GET_STATE     = "GET-STATE";

const initialState = {
    country: undefined,
    city: undefined,
    temp: undefined,
    spedWind: undefined,
    pressure: undefined,
    humidity: undefined,
    time: undefined,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_TIME: {
            return {
                ...state,
                time: action.time
            }
        }
        default:
            return state;
    }
}

const setWeather = (country, city, temp, spedWind, pressure, humidity) =>
    ({ type: SET_WEATHER, data: { country, city, temp, spedWind, pressure, humidity } });

const setTime = (time) => ({ type: SET_TIME, time });
const setFetching = (fetching) => ({ type: SET_FETCHING, isFetching: fetching });
const setOldState = () => ({ type: GET_STATE });

export const weatherDataOneSource = (nameCity, time, checkSource) => {
    return (dispatch) => {
        if (time && checkSource) {
            dispatch(setOldState(setOldState));
        }
        else {
            dispatch(setFetching(true));
            weatherApi.getWeatherOneSource(nameCity)
                .then(response => {
                    const time = new Date().getTime() * 1000;
                    dispatch(setTime(time));
                    dispatch(setWeather(response.data.sys.country, response.data.name, response.data.main.temp,
                        response.data.wind.speed, response.data.main.pressure, response.data.main.humidity));
                    dispatch(setFetching(false));
                });
        }
    }
}

export const getUserLocation = () => {
    return (dispatch) => {
        getLocation().then(response => {
            weatherApi.getWeatherOneSource(response.data.city)
                .then(response => {
                    const time = new Date().getTime() * 1000;
                    dispatch(setWeather(response.data.sys.country, response.data.name, response.data.main.temp,
                        response.data.wind.speed, response.data.main.pressure, response.data.main.humidity));
                    dispatch(setTime(time));
                });
        });
    }
}

export default authReducer;
