import { weatherApi, getLocation } from '../api/api';

const SET_WEATHER  = "SET-WEATHER";
const SET_FETCHING = "SET-FETCHING";
const SET_TIME     = "SET-TIME";
const GET_STATE    = "GET-STATE";

const initialState = {
    country: undefined,
    city: undefined,
    temp: undefined,
    spedWind: undefined,
    pressure: undefined,
    humidity: undefined,
    source: undefined,
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
        case SET_FETCHING:{
            return{
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_TIME:{
            return{
                ...state,
                time: action.time
            }
        }
        default:
            return state;
    }
}

const setWeather = (country, city, temp, spedWind, pressure, humidity, source) =>
    ({ type: SET_WEATHER, data: { country, city, temp, spedWind, pressure, humidity, source} });

const setTime = (time)=>({ type: SET_TIME, time});
const setFetching = (fetching)=>({type: SET_FETCHING, isFetching: fetching});
const setOldState = ()=>({type: GET_STATE});

export const weatherDataOneSource = (nameCity, source, time, checkSource) => {
        return (dispatch) => {
            if (time && checkSource) {
                dispatch(setOldState(setOldState));
            }
            else{
                debugger;
                dispatch(setFetching(true));
                weatherApi.getWeatherOneSource(nameCity)
                    .then(responce => {
                        const time = new Date().getTime() * 1000;
                        dispatch(setTime(time));
                        dispatch(setWeather(responce.data.sys.country, responce.data.name, responce.data.main.temp,
                            responce.data.wind.speed, responce.data.main.pressure, responce.data.main.humidity, source));    
                        dispatch(setFetching(false));            
                    });
            }
        }
}


export const getUserLocation = () => {
    return (dispatch) => {
        getLocation().then(responce => {
            weatherApi.getWeatherOneSource(responce.data.city)
                .then(responce => {
                    const time = new Date().getTime() * 1000;
                    dispatch(setWeather(responce.data.sys.country, responce.data.name, responce.data.main.temp,
                        responce.data.wind.speed, responce.data.main.pressure, responce.data.main.humidity));
                    dispatch(setTime(time));
                });
        });
    }
}

export default authReducer;
