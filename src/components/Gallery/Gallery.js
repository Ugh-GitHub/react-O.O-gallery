import React, { Component } from 'react';


class Gallery extends Component{
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
                        if (this.state.flipCard) {
                            return <div key={element.id} className="galleryItem">
                            <img src={element.path} height="100px" alt={element.description} onClick={this.changeFlipCard}/>
                            <p>
                                <br></br>
                                {Number(element.likes) > 0 ?
                                <>{element.likes} people love this!</>
                                :
                                <>Be the first to love this!</>
                                }
                            </p> 
                            </div>
                        }
                        else {
                            return <div key={element.id} className="galleryItem">
                            <div src={element.path} height="100px" width="100px" onClick={this.changeFlipCard}>{element.description}</div>
                            <p>
                                <br></br>
                                {Number(element.likes) > 0 ?
                                <>{element.likes} people love this!</>
                                :
                                <>Be the first to love this!</>
                                }
                            </p> 
                            </div>
                        }
                        
                    })}
                </>
            )
    }
}

export default Gallery;