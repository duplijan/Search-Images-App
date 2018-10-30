import React from 'react';

const Result = (props) => {
  return(
    props.images.map( image => {
      return (
        <div key={image.id} className='galleryGrid-image'>
          <img src={image.largeImageURL} alt={image.title} />
          <div>
            <p>@Credit:{image.user}</p>
          </div>
        </div>
      )
    })
  )
}

export default Result;
