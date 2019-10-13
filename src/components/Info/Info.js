import React from 'react';
import style from './Info.module.css';
import { Field, reduxForm } from 'redux-form';
import WeatherComponent from '../Weather/WeatherComponent';
import { required } from '../../utils/validator/validator';
import { input } from '../common/FormControls/FormControls';

class Info extends React.Component {

    componentDidMount() {
        if (!this.props.city)
            this.props.getUserLocation();
    }

    onSubmit = (data) => {
        const checkTime = this.props.time + 7200 <= new Date().getTime() && this.props.city === data.nameCity;
        const checkSource = this.props.source === data.source;
        debugger;
        if (data.source === "openweathermap") {
            debugger;
            this.props.weatherDataOneSource(data.nameCity, data.source, checkTime, checkSource);
        }
        else if (data.source === "weatherbit") {
            
            this.props.weatherDataTwoSource(data.nameCity, data.source, checkTime, checkSource);
        }
    }

    render() {
        return (
            <div className={style.wrapper}>

                <div className={style.whetherForm}>
                    <WeatherReduxForm onSubmit={this.onSubmit} isFetching={this.props.isFetching} />
                </div>
                <div className={style.whetherComponent}>
                    <WeatherComponent />
                </div>

            </div>
        );
    }
}


const WeatherForm = (props) => {

    return (
        <div className={style.textInput}>
            <form onSubmit={props.handleSubmit}>
                <button className={style.btn} disabled={props.isFetching === true} >
                    Search
                </button>
                <Field component={input} name="nameCity" placeholder="name city" className={style.inputСity} validate={[required]} />
                <div className={style.checkBox}>
                    <label> Choose a source: </label>
                    <br/>
                    <label><Field name="source" component="input" type="radio" value="openweathermap" /> openweathermap</label>
                    <br />
                    <label><Field name="source" component="input" type="radio" value="weatherbit" /> weatherbit</label>
                </div>
            </form>

        </div>
    );
}

const WeatherReduxForm = reduxForm({ form: "weatherForm" })(WeatherForm);


export default Info;