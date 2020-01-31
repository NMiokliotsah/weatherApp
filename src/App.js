import React from 'react';
import './App.css';
import InfoContainer from './components/Info/InfoContainer';
// import WeatherContainer from './components/Weather/WeatherComponent';

function App(props) {
  return (
    <div className="wrapper">
      <InfoContainer />
    </div>
  );
}

export default App;
