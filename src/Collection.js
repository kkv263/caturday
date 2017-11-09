import React, { Component } from 'react';
import { TextWrapper, CollectionWrapper, ImageOne, ImageOneBack, CollHeader} from './styles/Collection.style'

class Collection extends Component {
  render() {
    return (
      <CollectionWrapper>
        <ImageOneBack>
          <TextWrapper>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis a ligula id commodo. 
          Nam eu lacus est. Nunc sagittis ultricies leo, a sollicitudin urna laoreet nec. Proin viverra, 
          dolor non rhoncus iaculis, leo libero congue tellus, a vulputate metus massa pretium neque. 
          Vivamus a diam imperdiet, laoreet leo id, hendrerit mauris. Praesent sed sodales ligula. 
          Aenean eleifend eu metus eget posuere. Proin laoreet ut neque non ornare. Aenean iaculis, 
          nunc at dictum cursus, tortor erat pulvinar urna, vestibulum dictum urna quam vel sapien.  
          </TextWrapper>
        </ImageOneBack>
        <ImageOne src={require("./assets/image1.png")}/> 
        <CollHeader><span>C O L L </span>E C T I O N</CollHeader>
      </CollectionWrapper>      

    );
  }
}

export default Collection;