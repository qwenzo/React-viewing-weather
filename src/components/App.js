import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import './App.css';
import WeatherList from'../containers/weather_list'

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar/>
      <WeatherList />
      </div>
    );
  }
}

export default App;
