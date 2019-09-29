import React from 'react';
import style from './Info.module.css';
import { Field, reduxForm } from 'redux-form';
import WeatherComponent from '../Weather/WeatherComponent';

const Info = (props) => {

    const onSubmit = (data) => {
        if (data.source === "oneSource")
            props.weatherDataOneSource(data.nameCity);
        else
            props.weatherDataTwoSource(data.nameCity);
    }

    return (
        <div className={style.giveWeather}>
            <div className={style.whetherInput}>
                <WeatherReduxForm onSubmit={onSubmit} />
            </div>
            <div className={style.whetherData}>
                <WeatherComponent />
            </div>

        </div>
    );
}


const WeatherForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <button className={style.btn} >
                    Serch
                </button>
                <Field component={"input"} name="nameCity" className={style.inputСity} />
                <div className={style.checkBox}>
                    <label><Field name="source" component="input" type="radio" value="oneSource" /> oneSource</label>
                    <br />
                    <label><Field name="source" component="input" type="radio" value="twoSource" /> twoSource</label>
                </div>
            </form>

        </div>
    );
}

const WeatherReduxForm = reduxForm({ form: "weatherForm" })(WeatherForm);


export default Info;