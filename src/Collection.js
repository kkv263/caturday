import React, { Component } from 'react';
import { Image, CollectionWrapper, GridImage, ItemRight, ItemWrapper, ItemLeft, HeaderText, AboutText} from './styles/Collection.style'

class Collection extends Component {
  render() {
    return (
      <CollectionWrapper>
      <ItemWrapper>
        <ItemLeft>
          <Image float="left" src={require("./assets/white.jpeg")} />
          <HeaderText>hello</HeaderText>
        </ItemLeft> 
      </ItemWrapper>
      </CollectionWrapper>      

    );
  }
}

export default Collection;