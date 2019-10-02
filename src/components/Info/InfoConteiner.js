import React from 'react';
import Info from './Info';
import { connect } from 'react-redux';
import { weatherDataOneSource, weatherDataTwoSource, getUserLocation } from "../../redux/info-reducer";


class InfoContainer extends React.Component {
    render() {
        return <Info
        isFetching={this.props.isFetching}
        getUserLocation = {this.props.getUserLocation} 
        weatherDataOneSource={this.props.weatherDataOneSource} 
        weatherDataTwoSource={this.props.weatherDataTwoSource}/>
    }
}

const mapToStateProps = state=>({
  isFetching: state.infoPage.isFetching
});
export default connect(mapToStateProps, {weatherDataOneSource, weatherDataTwoSource, getUserLocation})(InfoContainer);


