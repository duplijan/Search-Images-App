import React, { Component } from 'react';
import './App.css';
import ImageSearch from './ImageSearch';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: 'Welcome to My Page'
    }
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <ImageSearch />
      </div>
    );
  }
}

export default App;
