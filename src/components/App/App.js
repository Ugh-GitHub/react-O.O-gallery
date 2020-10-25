import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

class App extends Component {
  state = {
      galleryArray: [],
      // newGalleryItem: {
      //   id: 'NULL',
      //   path: 'NULL',
      //   description: 'NULL',
      //   likes: 0
      // }
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList galleryArray={this.state.galleryArray}/>
      </div>
    );
  }
}

export default App;
