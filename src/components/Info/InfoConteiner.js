import React from 'react';
import Info from './Info';
import { connect } from 'react-redux';

import { weatherDataOneSource, weatherDataTwoSource } from "../../redux/info-reducer";


class InfoContainer extends React.Component {
    render() {
        return <Info
        weatherDataOneSource={this.props.weatherDataOneSource} 
        weatherDataTwoSource={this.props.weatherDataTwoSource}/>
    }
}

const mapToStateProps = state=>({
  nameCity: state.form.weatherForm.values.cityName
});
export default connect(mapToStateProps, {weatherDataOneSource, weatherDataTwoSource})(InfoContainer);


