import React, { Component } from 'react';
import Homepage from './Homepage'
import Collection from './Collection'
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Homepage/>
        <Collection/>
      </ParallaxProvider>
    );
  }
}

export default App;
