import React, { Component } from 'react';
import ImagesGallery from './ImageGallery';

class ImageSearch extends Component {
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
        searchValue: e.target.value
      })
    };
      // URL EXAMPLE
      // https://pixabay.com/api/?key=10295258-c94968b52ea49aecf2600b8c7&q=yellow+flowers&image_type=photo
      getSearchedResults(e){
        e.preventDefault();
        const url = 'https://pixabay.com/api';
        const apiKey = '10295258-c94968b52ea49aecf2600b8c7';
        if(!this.state.searchValue == ''){
          fetch(`${url}/?key${apiKey}&q=${this.state.searchValue}&image_type=photo`)
          .then(resp => resp.json())
          .then(data => this.setState({
            images: data.hits
          }))
        } else {
          this.setState({
            images: []
          })
        }
      };

      //{this.state.images.length > 0 ? () : (null)}
    render(){
      return (
        <div>
          <form>
            <label>
              Search for images in our gallery!!!
            </label>
            <input onChange={this.getInputValue} value={this.state.searchValue} type='text'/>
            <button onSubmit= {this.state.getSearchedResults} > Seach </button>
          </form>
            <ImagesGallery images={this.state.images}/>
        </div>
      )
    }
  }


export default ImageSearch;
