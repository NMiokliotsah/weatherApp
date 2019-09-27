import React from 'react';
import style from './Info.module.css';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WeatherComponent from '../Weather/WeatherComponent';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const Info = (props) => {

    return (
        <div className={style.giveWeather}>
            <div className={style.whetherInput}>
                <WeatherReduxForm {...props} />
            </div>
            <div className={style.whetherData}>
                <WeatherComponent />
            </div>
            
        </div>
    );
}


const WeatherForm = (props) => {
    const classes = useStyles();
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Button onClick={() => { props.weatherDataOneSource(props.nameCity) }} variant="contained" className={classes.button}>
                    Serch
                </Button>
                <Field component={"input"} name="cityName" className={style.inputСity} />
                <div className={style.checkBox}>
                    <label><Field name="oneSource" component="input" type="checkBox" value="oneSource" /> oneSource</label>
                    <br />
                    <label><Field name="twoSource" component="input" type="checkBox" value="twoSource" /> twoSource</label>
                </div>
            </form>
            <div>
                <button onClick={() => { props.weatherDataTwoSource() }}> Serch</button>
            </div>
        </div>
    );
}

const WeatherReduxForm = reduxForm({ form: "weatherForm" })(WeatherForm);

export default Info;