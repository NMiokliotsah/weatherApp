import React from 'react';
import style from './Info.module.css';
import { Field, reduxForm } from 'redux-form';
import WeatherComponent from '../Weather/WeatherComponent';
import { required } from '../../utils/validator/validator';
import { input } from '../common/FormControls/FormControls';

const Info = (props) => {

    props.getUserLocation();
    const onSubmit = (data) => {
        console.log(props.isFetching);
        const time = new Date().getTime();
        if (data.source === "oneSource")
            props.weatherDataOneSource(data.nameCity, time);
        else if( data.source === "twoSource")
        {
            props.weatherDataTwoSource(data.nameCity, time);
        }
    }

    return (
        <div className={style.giveWeather}>
            
            <div className={style.whetherInput}>
                <WeatherReduxForm onSubmit={onSubmit} isFetching={props.isFetching}/>
            </div>
            <div className={style.whetherData}>
                <WeatherComponent />
            </div>

        </div>
    );
}


const WeatherForm = (props) => {

    return (
        <div className={style.textInput}>
            <form onSubmit={props.handleSubmit}>
                <button className={style.btn} disabled={ props.isFetching === true} >
                    Serch
                </button>
                <Field component={input} name="nameCity" className={style.inputСity} validate={[required]}/>
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