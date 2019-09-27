import React from 'react';
import Weather from './Weather';
import { connect } from 'react-redux';


class WeatherContainer extends React.Component {
    render() {
        return <Weather
        infoWeather={this.props.infoWeather}/>
    }
}

const mapToStateProps = state => ({
    infoWeather: state.infoPage
});
export default connect(mapToStateProps, {})(WeatherContainer);


