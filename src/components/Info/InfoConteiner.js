import React from 'react';
import Info from './Info';
import { connect } from 'react-redux';
import { weatherDataOneSource, weatherDataTwoSource, getUserLocation } from "../../redux/info-reducer";


class InfoContainer extends React.Component {
    render() {
        return <Info
        getUserLocation = {this.props.getUserLocation} 
        weatherDataOneSource={this.props.weatherDataOneSource} 
        weatherDataTwoSource={this.props.weatherDataTwoSource}/>
    }
}

const mapToStateProps = state=>({
  // nameCity: state.form.weatherForm.cityName
});
export default connect(mapToStateProps, {weatherDataOneSource, weatherDataTwoSource, getUserLocation})(InfoContainer);


