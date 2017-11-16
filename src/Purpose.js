import React, { Component } from 'react';
import { PurposeWrapper, PurposeImage, PurposeText, FadeWrapper } from './styles/Purpose.style';
import Waypoint from 'react-waypoint';

class Purpose extends Component {
  constructor (props){
    super(props);
  
    this.state = {
      showPurpose: false,
    };
    this.handleEnter = this.handleEnter.bind(this);
  }
  
  handleEnter(previousPosition, currentPosition, event, value){
    console.log("enter");
    if (currentPosition === Waypoint.inside){
      this.setState({ showPurpose : true} );
    }
  }

  render() {
    return (
      <Waypoint bottomOffset="10%"onEnter={({ previousPosition, currentPosition, event }) => {
          this.handleEnter(previousPosition, currentPosition, event)
        }}>
      <FadeWrapper>
      {this.state.showPurpose ? (<div>
      <PurposeWrapper>
        <PurposeText color="white">
        Our Purpose
        </PurposeText>
        <PurposeImage src={require('./assets/purpose.jpg')} />
        <PurposeText>
        <p> Caturday provides a platform for cat lovers 
        to read interesting facts about a cat's life.
        </p></PurposeText>
      </PurposeWrapper>
      </div>) : null }
      </FadeWrapper>
      </Waypoint>
    );
  }
}

export default Purpose;