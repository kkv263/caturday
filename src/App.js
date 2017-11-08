import React, { Component } from 'react';
import Homepage from './Homepage'
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Homepage/>
      </ParallaxProvider>
    );
  }
}

export default App;
