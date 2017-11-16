import React, { Component } from 'react';
import { HeaderImage, HeaderText, 
          About, AboutText, 
          Icon, IconText } from './styles/Homepage.style'
import { Parallax } from 'react-scroll-parallax';
import Waypoint from 'react-waypoint';


class Homepage extends Component {
  constructor (props){
    super(props);

    this.state = {
      showAbout: false,
      showHeader: false
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleEnter(previousPosition, currentPosition, event, value){
    if (currentPosition === Waypoint.inside){
      this.setState({ [value] : true} );
    }
  }

  handleLeave(previousPosition, currentPosition, event, value){
    if (previousPosition === Waypoint.inside){
      this.setState({ [value] : false} );
    }
  }

  render() {
    return (
      <div>
      <Waypoint onLeave={({ previousPosition, currentPosition, event }) => {
          this.handleLeave(previousPosition, currentPosition, event, "showHeader")
        }}
        onEnter={({ previousPosition, currentPosition, event }) => {
          this.handleEnter(previousPosition, currentPosition, event, "showHeader")
        }}>
        
        <HeaderImage>
        {this.state.showHeader ? (<div> 
        <Parallax
            offsetYMax={300}
            offsetYMin={-0}
            slowerScrollRate
          >
          <HeaderText>Dive into the feline mind.</HeaderText>
        </Parallax>
        </div>) : null}     
        </HeaderImage>
        </Waypoint>
        <Waypoint  bottomOffset="5%" onEnter={({ previousPosition, currentPosition, event }) => {
          this.handleEnter(previousPosition, currentPosition, event, "showAbout")
        }}>
        <About>
        {this.state.showAbout ? (<div>
          <AboutText time="1s" top="25%" left="10%" leftM="10%">Cats </AboutText>
          <AboutText time="2s" top="35%" left="15%" leftM="35%">Are </AboutText>
          <AboutText time="3s" top="45%" left="20%" leftM="55%">Better...</AboutText>
          <Icon top="20%" right="25%"  rightM="30%" src={require('./assets/cat-food.svg')}/>
          <IconText top="30%" right="18.5%" topM="32.5%" rightM="20%">Indepedent, silent, and a honest personality</IconText>
          <Icon top="60%" right="25%" rightM="30%" src={require('./assets/pawprint.svg')}/>
          <IconText top="70%" right="18.5%" rightM="20%" topM="72.5%" >Smart, keen, and an observer</IconText>
          <Icon top="20%" right="50%" rightM="75%" src={require('./assets/egyptian-cat.svg')}/>
          <IconText top="30%" right="43%" topM="32.5%" rightM="62.5%">Refined, elegant, and a show of cleanliness</IconText>
          <Icon top="60%" right="50%" rightM="75%" src={require('./assets/pet-food.svg')}/>
          <IconText top="70%" right="43%" rightM="62.5%" topM="72.5%" >Playful, contentful, and a loving companion</IconText>
        </div>) : null}

        </About>
        </Waypoint>
      </div>
    );
  }
}

export default Homepage;
