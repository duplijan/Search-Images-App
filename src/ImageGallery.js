import React, { Component }from 'react';
import Result from './Result'

class ImagesGallery extends React {
  render(){
    return(
      <div className='galleryGrid'>
        <Result results = {this.props.images} />
      </div>
    )
  }
}
// const ImagesGallery = (props) => {
//   return (
//
//   )
// }
export default ImagesGallery;
