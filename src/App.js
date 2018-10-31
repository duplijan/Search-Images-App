import React, { Component  } from 'react';
import './App.css';
import ImageSearch from './ImageSearch';
import Navbar from './Navbar';
import Header from './Header';



class App extends Component  {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <ImageSearch />
      </div>
    );
  }
}

export default App;
