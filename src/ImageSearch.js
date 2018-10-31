import React, { Component  } from 'react';
import ImagesGallery from './ImageGallery';



class ImageSearch extends Component  {
    constructor(props){
      super(props)
      this.state = {
        searchValue: '',
        images: []
        }

    this.getInputValue = this.getInputValue.bind(this);
    this.getSearchedResults = this.getSearchedResults.bind(this);
    }

    getInputValue(e){
        this.setState({
          searchValue: e.target.value,
          query: this.state.searchValue
        })
      };
        // URL EXAMPLE
        // https://pixabay.com/api/?key=10295258-c94968b52ea49aecf2600b8c7&q=yellow+flowers&image_type=photo
    getSearchedResults(e){
      e.preventDefault();
      const url = 'https://pixabay.com/api';
      const apiKey = '10295258-c94968b52ea49aecf2600b8c7';
        try {
          fetch(`${url}/?key=${apiKey}&q=${this.state.searchValue}&image_type=photo`)
          .then(resp => resp.json())
          .then(data => this.setState({
            images: data.hits,
            searchValue: ''
          }))
        } catch(err){
          console.log(err);
      }
    }

    render(){
      return (
        <div className='imageSearch'>
          <form onSubmit= {this.getSearchedResults} className='search-form'>
            <label>
              Search for images in our gallery
            </label>
            <input onChange={this.getInputValue} value={this.state.searchValue}  placeholder='example: dog'/>
            <button type='submit' className='imageSearch-btn'> Seach </button>
          </form>
          <ImagesGallery images={this.state.images}/>
        </div>
      )
    }
  }
export default ImageSearch;
