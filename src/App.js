import React, { Component } from 'react';
import Homepage from './Homepage';
import Collection from './Collection';
import Purpose from './Purpose';
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Homepage/>
        <Purpose/>
        <Collection/>
      </ParallaxProvider>
    );
  }
}

export default App;
