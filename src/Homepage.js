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
    };
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(previousPosition, currentPosition, event, value){
    if (currentPosition === Waypoint.inside){
      this.setState({ [value] : true} );
    }
  }

  render() {
    return (
      <div>
        <HeaderImage>
        <Parallax
            offsetYMax={6000}
            offsetYMin={-6000}
            slowerScrollRate
          >
          <HeaderText>Dive into the </HeaderText>
          <HeaderText>feline mind.</HeaderText>
        </Parallax>     
        </HeaderImage>
        <Waypoint bottomOffset="50%" onEnter={({ previousPosition, currentPosition, event }) => {
          this.handleEnter(previousPosition, currentPosition, event, "showAbout")
        }}>
        <About>
        {this.state.showAbout ? (<div>
          <AboutText time="2s" top="25%" left="10%">Cats </AboutText>
          <AboutText time="4s" top="35%" left="15%">Are </AboutText>
          <AboutText time="6s" top="45%" left="20%">Better...</AboutText>
          <Icon top="20%" right="25%"src={require('./assets/cat-food.svg')}/>
          <IconText top="30%" right="18.5%">Indepedent, silent, and a honest personality</IconText>
          <Icon top="60%" right="25%" src={require('./assets/pawprint.svg')}/>
          <IconText top="70%" right="18.5%">Smart, keen, and an observer</IconText>
          <Icon top="20%" right="50%" src={require('./assets/egyptian-cat.svg')}/>
          <IconText top="30%" right="43%">Refined, elegant, and a show of cleanliness</IconText>
          <Icon top="60%" right="50%" src={require('./assets/pet-food.svg')}/>
          <IconText top="70%" right="43%">Playful, contentful, and a loving companion</IconText>
        </div>) : null}

        </About>
        </Waypoint>
      </div>
    );
  }
}

export default Homepage;
