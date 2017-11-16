import React, { Component } from 'react';
import { Image, CollectionWrapper, ItemWrapper, GridImage, GridText, Footer } from './styles/Collection.style'
import Waypoint from 'react-waypoint';

class Collection extends Component {
  constructor (props){
    super(props);
  
    this.state = {
      show1: false,
      show2: false,
      show3: false
    };
    this.handleEnter = this.handleEnter.bind(this);
  }
  
  handleEnter(previousPosition, currentPosition, event, value){
    console.log(value);
    if (currentPosition === Waypoint.inside){
      this.setState({ [value] : true} );
    }
  }

  render(){

    return (
      <CollectionWrapper>
      <ItemWrapper>
      <Waypoint onEnter={({ previousPosition, currentPosition, event})=> {
          this.handleEnter(previousPosition, currentPosition, event, "show1")
        }}>
       {this.state.show1 ? (<GridImage>
          <Image src={require("./assets/chair.jpg")} />
          <GridText>A cat's cerebral cortex (the part of the brain in charge of cognitive information processing) has 300 million neurons, compared with a dog's 160 million.</GridText>
       </GridImage>) : null }
       </Waypoint>

       <Waypoint onEnter={({ previousPosition, currentPosition, event})=> {
          this.handleEnter(previousPosition, currentPosition, event, "show2")
        }}>
       {this.state.show2 ? (<GridImage>
        <Image src={require("./assets/couch.jpeg")} />
        <GridText>Cats have free-floating clavicle bones that attach their shoulders to their forelimbs, which allows them to squeeze through very small spaces.</GridText>
     </GridImage>) : null }
     </Waypoint>

       <Waypoint onEnter={({ previousPosition, currentPosition, event})=> {
          this.handleEnter(previousPosition, currentPosition, event, "show3")
        }}>
       {this.state.show3 ? (<GridImage>
          <Image src={require("./assets/white.jpeg")} />
          <GridText>Cats have inferior daytime sight, but during the night they need seven times less light than humans to see.</GridText>
       </GridImage>) : null }
       </Waypoint>
      </ItemWrapper>
      <Footer > (logo) Caturday <span>Kevin Vu</span></Footer>
      </CollectionWrapper>      

    );
  }
}

export default Collection;