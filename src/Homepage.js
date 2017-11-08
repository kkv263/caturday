import React, { Component } from 'react';
import { HeaderImage, HeaderText,About } from './styles/Homepage.style'
import { Parallax } from 'react-scroll-parallax';
import './index.css';

class Homepage extends Component {
  render() {
    return (
      <div>

        <HeaderImage>
        <Parallax
            className="custom-class"
            offsetYMax={4000}
            offsetYMin={-4000}
            slowerScrollRate
          >
          <HeaderText>Dive into the </HeaderText>
          <HeaderText>feline mind.</HeaderText>
        </Parallax>     
        </HeaderImage>
        <About></About>
     
      </div>
    );
  }
}

export default Homepage;
