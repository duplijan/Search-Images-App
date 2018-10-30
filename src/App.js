import React, { Component  } from 'react';
import './App.css';
import ImageSearch from './ImageSearch';

class App extends Component  {
  render() {
    return (
      <div className="App">
        <h1>Search App</h1>
          <ImageSearch />
      </div>
    );
  }
}

export default App;
