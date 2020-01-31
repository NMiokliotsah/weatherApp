import React from 'react';
import style from './Weather.module.css';

const Weather = (props) => {
    return (
        <div>
            {props.infoWeather.country &&
                <div className={style.weatherInfo}>
                    <p>Location: <span>{props.infoWeather.city}, {props.infoWeather.country}</span></p>
                    <p>Temperature: <span> {props.infoWeather.temp} °С</span></p>
                    <p>Speed Wind: <span> {props.infoWeather.spedWind} м/c </span></p>
                    <p>Pressure: <span> {props.infoWeather.pressure} гПа [мм] </span></p>
                    <p>Humidity: <span> {props.infoWeather.humidity} %</span></p>
                </div>
            }
        </div>
    );
}

export default Weather;