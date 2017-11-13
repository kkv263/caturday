import React, { Component } from 'react';
import { PurposeWrapper, PurposeImage, PurposeText } from './styles/Purpose.style';

class Purpose extends Component {
  render() {
    return (
      <PurposeWrapper>
        <PurposeText color="white">
        Our Purpose
        <p>Caturday provides a platform for individuals to learn about the
        natural habitat of cats. As cat lovers, this is the place to stay.
        </p></PurposeText>
        <PurposeImage src={require('./assets/purpose.jpg')} />
        <PurposeText>
        The Facts
        <p> Be prepared to uncover these secrets. Scroll down to find out 
        more on the exciting lives that cats lead.
        </p></PurposeText>
      </PurposeWrapper>
    );
  }
}

export default Purpose;