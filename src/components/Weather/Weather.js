import React from 'react';

const Weather = (props) => {
    return (
        <div>
            { props.infoWeather.country &&
            <div>
                <p>Location: {props.infoWeather.city}, {props.infoWeather.country}</p>
                <p>Temperature: {props.infoWeather.temp} °С</p>
                <p>Sped Wind: {props.infoWeather.spedWind} м/c</p>
                <p>Pressure: {props.infoWeather.pressure} гПа [мм]</p>
                <p>Humidity: {props.infoWeather.humidity} %</p>
            </div>
            }
        </div>
    );
}

export default Weather;