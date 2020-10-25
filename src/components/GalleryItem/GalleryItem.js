import React, { Component } from 'react';


class GalleryItem extends Component{
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
        console.log("clicked");
        this.setState({
            flipCard: !this.state.flipCard
        });
    }

    render(){
        return(
                <div>
                        {/* {JSON.stringify(this.props.galleryPath)} */}
                        {this.state.flipCard ?
                            <img src={this.props.galleryArray.path} height="100px" alt={this.props.galleryArray.description} onClick={this.changeFlipCard}/>       
                        :
                            <div height="100px" width="100px" onClick={this.changeFlipCard}>{this.props.galleryArray.description}</div>
                        }
                        
                    
                </div>
            )
    }
}

export default GalleryItem;