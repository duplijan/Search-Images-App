import React, { Component } from 'react';
//import ImageSearch from './components/ImageSearch';

class Result extends React {
  render(){
      const displayResult =
      this.props.results.map( image => {
        return (
          <div key={image.id} className='galleryGrid-image'>
            <img src={image.largeImageURL} alt={image.title}> </img>
            <div>
              <p>{image.tags}</p>
            </div>
          </div>
        )
      })

      return (
        {displayResult}
      )
    }
}

export default Result;
