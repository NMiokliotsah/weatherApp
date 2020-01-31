import React from 'react';
import Info from './Info';
import { connect } from 'react-redux';
import { weatherDataOneSource, getUserLocation } from "../../redux/info-reducer";


class InfoContainer extends React.Component {
    render() {
        return <Info
        source={this.props.source}
        isFetching={this.props.isFetching}
        city={this.props.city}
        time={this.props.time}
        getUserLocation={this.props.getUserLocation}
        weatherDataOneSource={this.props.weatherDataOneSource}/>
    }
}

const mapToStateProps = state=>({
  isFetching: state.infoPage.isFetching,
  city: state.infoPage.city,
  time: state.infoPage.time,
  source: state.infoPage.source
});

export default connect(mapToStateProps, {weatherDataOneSource, getUserLocation})(InfoContainer);


