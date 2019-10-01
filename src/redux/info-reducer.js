import { weatherApi, getLocation } from '../api/api';

const SET_WEATHER  = "SET-WEATHER";
const SET_FETCHING = "SET-FETCHING";
const SET_TIME     = "SET-TIME";

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
        case SET_FETCHING:{
            return{
                ...state,
                isFetching: action.isfetching,
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

export const setWeather = (country, city, temp, spedWind, pressure, humidity) =>
    ({ type: SET_WEATHER, data: { country, city, temp, spedWind, pressure, humidity} });

export const setTime = (time)=>({ type: SET_TIME, time});
export const setFetching = (isFetching)=>({type: SET_FETCHING, isFetching});


export const weatherDataOneSource = (nameCity, time) => {
    // if (initialState.time + 7200 <= time && initialState.city === nameCity) {
        return (dispatch) => {
            dispatch(setFetching(true));
            console.log(initialState.isFetching);
            weatherApi.getWeatherOneSource(nameCity)
                .then(responce => {
                    const time = new Date().getTime() * 1000;
                    dispatch(setWeather(responce.data.sys.country, responce.data.name, responce.data.main.temp,
                        responce.data.wind.speed, responce.data.main.pressure, responce.data.main.humidity));
                    dispatch(setTime(time));
                    dispatch(setFetching(false));
                });
                console.log(initialState.isFetching);
        // }
    }

}

export const weatherDataTwoSource = (nameCity, time) => {
    if (initialState.time + 7200 <= time && initialState.city === nameCity) {
        return (dispatch) => {
            weatherApi.getWeatherTwoSource(nameCity)
                .then(responce => {
                    const time = new Date().getTime() * 1000;
                    dispatch(setWeather(responce.data.data[0].country_code, responce.data.data[0].city_name,
                        responce.data.data[0].app_temp, responce.data.data[0].wind_spd, responce.data.data[0].pres,
                        responce.data.data[0].rh));
                    dispatch(setTime(time));
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
