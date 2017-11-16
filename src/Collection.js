import React, { Component } from 'react';
import { Image, CollectionWrapper, ItemWrapper, GridImage, GridText } from './styles/Collection.style'

class Collection extends Component {
  render() {
    return (
      <CollectionWrapper>
      <ItemWrapper>
       <GridImage>
          <Image src={require("./assets/chair.jpg")} />
          <GridText>A cat's cerebral cortex (the part of the brain in charge of cognitive information processing) has 300 million neurons, compared with a dog's 160 million.</GridText>
       </GridImage>
       <GridImage>
          <Image src={require("./assets/couch.jpeg")} />
          <GridText>Cats have free-floating clavicle bones that attach their shoulders to their forelimbs, which allows them to squeeze through very small spaces.</GridText>
       </GridImage>
       <GridImage>
          <Image src={require("./assets/white.jpeg")} />
          <GridText>Cats have inferior daytime sight, but during the night they need seven times less light than humans to see.</GridText>
       </GridImage>
       

      </ItemWrapper>
      </CollectionWrapper>      

    );
  }
}

export default Collection;