import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


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

    changeFlipCard = () => {
        this.setState({
            flipCard: !this.state.flipCard
        });
    }

    render(){
        return(
                <>
                    {this.props.galleryArray.map((element) => {
                        
                            return <div key={element.id} className="galleryItem">
                            <GalleryItem galleryArray={element}/>
                            <p>
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