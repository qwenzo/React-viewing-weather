import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar/>
      </div>
    );
  }
}

export default App;
