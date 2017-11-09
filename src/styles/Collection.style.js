import styled, {keyframes} from 'styled-components'

export const fadeIn = keyframes`
from { opacity: 0; }
to   { opacity: 1; }
`

export const CollectionWrapper = styled.div`
width: 100%;
position:relative;
z-index: 2;
background-color: white;
`

export const ImageOne = styled.img`
animation: ${fadeIn} 1s ease-in;
max-width: 100%;
height: auto;
position:absolute;
`

export const ImageOneBack = styled.div`
position:absolute;
top: 75px;
width:90%;
height: 65vh;
background-color: #eaebf0;
`

export const TextWrapper = styled.div`
animation: ${fadeIn} 1s ease-in;
position:absolute;
font-family: 'Work Sans', sans-serif;
font-weight: 200;
font-size: 1em;
width: 40%;
height: 50%;
right: 7.5%;
bottom: 5%;
`

export const CollHeader = styled.h1`
animation: ${fadeIn} 1s ease-in;
position:absolute;
font-family: 'Work Sans', sans-serif;
font-weight: 400;
font-size: 4em;
color:black;
top: 125px;
left: 310px;

  & > span {
    color:white;
  }
`