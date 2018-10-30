import React  from 'react';
import Result from './Result'

 const ImagesGallery = (props) => {
   return (
     <div className='galleryGrid'>
       <Result images = {props.images} />
     </div>
  )
}
export default ImagesGallery;
