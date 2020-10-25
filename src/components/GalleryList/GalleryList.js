import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';

class GalleryList extends Component{
    state = {
        flipCard: true
    // newGalleryItem: {
      //   id: 'NULL',
      //   path: 'NULL',
      //   description: 'NULL',
      //   likes: 0
      // }
    }

    likeIt = (element) => {
        console.log("put time", element.id);
        axios({
            method: 'PUT',
            url: `/gallery/like/${element.id}`,
            
          }).then((response) => {
            console.log("Made it");
            console.log(response);
            this.props.onReady();
          }).catch((error) => {
            console.log(error);
          });
    }

    render(){
        return(
                <>
                    {this.props.galleryArray.map((element) => {
                        
                            return <div key={element.id} className="galleryItem">
                            <GalleryItem galleryArray={element}/>
                            <p>
                                <button onClick={() => this.likeIt(element)}>Like this!</button>
                                <br></br>
                                <br></br>
                                {Number(element.likes) > 0 ?
                                <>{element.likes} people love this!</>
                                :
                                <>Be the first to love this!</>
                                }
                            </p> 
                            </div>
                        
                        
                    })}
                </>
            )
    }
}

export default GalleryList;