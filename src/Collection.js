import React, { Component } from 'react';
import { Image, CollectionWrapper, GridImage, TextImage } from './styles/Collection.style'

class Collection extends Component {
  render() {
    return (
      <CollectionWrapper>
          <Image float="left" src={require("./assets/bored.jpg")} />
          <Image float="left" src={require("./assets/couch.jpeg")} />
          <Image float="right" src={require("./assets/white.jpeg")} />
          <Image float="right" src={require("./assets/chair.jpg")} />
      </CollectionWrapper>      

    );
  }
}

export default Collection;