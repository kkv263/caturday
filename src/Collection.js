import React, { Component } from 'react';
import { Image, CollectionWrapper, ItemWrapper, ItemLeft, HeaderText,} from './styles/Collection.style'

class Collection extends Component {
  render() {
    return (
      <CollectionWrapper>
      <ItemWrapper>
        <ItemLeft w="40%" pLeft="25%">
          <Image float="left" src={require("./assets/white.jpeg")} />
          <HeaderText>Cats are North America’s most popular pets: there are 
          73 million cats compared to 63 million dogs. Over 30% of households in 
          North America own a cat.</HeaderText>
        </ItemLeft> 

        <ItemLeft w="50%" pLeft="5%">
          <Image float="left" src={require("./assets/chair.jpg")} />
          <HeaderText>A cat’s hearing is better than a dog’s. And a cat can hear high-frequency 
          sounds up to two octaves higher than a human.</HeaderText>
        </ItemLeft>

        <ItemLeft w="30%" pLeft="50%">
          <Image float="left" src={require("./assets/bored.jpg")} />
          <HeaderText>A cat rubs against people not only to be affectionate but also to mark out 
          its territory with scent glands around its face. The tail area and paws also carry the 
          cat’s scent.</HeaderText>
        </ItemLeft>

        <ItemLeft w="50%" pLeft="5%">
          <Image float="left" src={require("./assets/couch.jpeg")} />
          <HeaderText>A cat’s brain is biologically more similar to a human brain than it is to a dog’s. 
          Both humans and cats have identical regions in their brains that are responsible for emotions.</HeaderText>
        </ItemLeft>


      </ItemWrapper>
      </CollectionWrapper>      

    );
  }
}

export default Collection;