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
        this.props.weatherDataOneSource(data.nameCity, checkTime);
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
        <div className={style.boxSubmitCity}>
            <form onSubmit={props.handleSubmit}>
                <button className={style.btn} disabled={props.isFetching === true}>
                    Search
                </button>
                <Field component={input} name="nameCity" placeholder="name city" className={style.inputCity} validate={[required]} />
            </form>
        </div>
    );
}

const WeatherReduxForm = reduxForm({ form: "weatherForm" })(WeatherForm);

export default Info;