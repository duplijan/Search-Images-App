import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Result extends Component {
  constructor(props){
    super(props)
    this.state = {
      current: ''
    }
  }
  openFullScreen(e){
    this.setState({
      current: e.target.largeImageURL
    })
    console.log(this.state)
  }

  render(){
    return (
      this.props.images.map( image => {
        return (
          <div key={image.id} className='gallery-item'>
            <img src={image.largeImageURL} alt={image.title} onClick={(e) => this.openFullScreen(e) } />
            <div className='gallery-item-info'>
              <FontAwesomeIcon icon={faHeart}  />
              <p>{image.likes}</p>
            </div>
            <span className='gallery-item-info-author'>
              <p>Author:{image.user}</p>
            </span>
          </div>
        )
      })
    )
  }

}

export default Result;
