import React, { Component } from 'react';
import { CollectionWrapper, ImageOne, ImageOneBack, CollHeader} from './styles/Collection.style'

class Collection extends Component {
  render() {
    return (
      <CollectionWrapper>
        <ImageOneBack></ImageOneBack>
        <ImageOne src={require("./assets/image1.png")}/> 
        <CollHeader><span>C O L L </span>E C T I O N</CollHeader>
      </CollectionWrapper>      

    );
  }
}

export default Collection;