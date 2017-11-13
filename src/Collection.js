import React, { Component } from 'react';
import { Image, CollectionWrapper, ItemWrapper, ItemLeft, LeftWrapper, RightWrapper} from './styles/Collection.style'

class Collection extends Component {
  render() {
    return (
      <CollectionWrapper>
      <ItemWrapper>
      <LeftWrapper>
        <p>C</p><p>O</p><p>L</p><p>L</p><p>E</p><p>C</p><p>T</p><p>I</p><p>O</p><p>N</p>
      
      </LeftWrapper>
      <RightWrapper>
        <ItemLeft float="left" w="60%" >
          <Image src={require("./assets/chair.jpg")} />
        </ItemLeft> 
        <ItemLeft float="right" w="40%" >
          <Image src={require("./assets/bored.jpg")} />
        </ItemLeft>
        <ItemLeft float="left" w="60%" >
          <Image src={require("./assets/couch.jpeg")} />
        </ItemLeft>
        <ItemLeft float="right" w="40%" >
          <Image src={require("./assets/white.jpeg")} />
        </ItemLeft>

      </RightWrapper>


      </ItemWrapper>
      </CollectionWrapper>      

    );
  }
}

export default Collection;