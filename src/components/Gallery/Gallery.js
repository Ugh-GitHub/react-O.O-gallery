import React, { Component } from 'react';


class Gallery extends Component{
    render(){
        return(
                <p>{JSON.stringify(this.props.galleryArray)}</p>
            )
    }
}

export default Gallery;