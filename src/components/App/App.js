import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

class App extends Component {
  state = {
      galleryArray: [],
      newGalleryItem: {
        path: 'NULL',
        description: 'NULL',
        likes: 0
      }
  }

  componentDidMount = () => {
    console.log("app js is mounted");
    this.onReady();
  }

  onReady = () => {
    console.log("in onReady");
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      this.setState({
        galleryArray: response.data
      })
      // console.log(galleryArray);
    }).catch((error) => {
      console.log(error);
    });
  }

  handleChange = (event, keyParam) => {
    console.log(event.target.value);
    this.setState({
      newGalleryItem: {
      ...this.state.newGalleryItem,
      [keyParam]: event.target.value
      }
    });
  }

  submitGalleryItem = (event) => {
    console.log("Made it to post");
    console.log(this.state.newGalleryItem)
    
    axios({
      method: 'POST',
      url: '/gallery',
      data: this.state.newGalleryItem
    }).then((response) => {
      this.onReady();
      
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
          <br></br>
          <label htmlFor="path">Path for image:</label>
          <input onChange={(event) => this.handleChange(event, 'path')} type="text" id="path"/>
          <label htmlFor="description">Descrition:</label>
          <input onChange={(event) => this.handleChange(event, 'description')} type="text" id="description"/>
          <button onClick={this.submitGalleryItem} id="submit">Submit</button>
        </header>
        <br/>
        <GalleryList onReady={this.onReady} galleryArray={this.state.galleryArray}/>
      </div>
    );
  }
}

export default App;
