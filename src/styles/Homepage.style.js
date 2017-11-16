import styled, { keyframes }from 'styled-components';
import header from '../assets/header.jpg';
import header2 from '../assets/image1.jpg';

export const fadeIn = keyframes`
from { opacity: 0; transform: translateX(-5%);}
66% { opacity: 0; transform: translateX(-2.5%);}
to   { opacity: 1; transform: translateX(0%);}
`

export const HeaderImage = styled.div`
width:100%;
height: 100vh;
background-image: url(${header});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position:relative;
z-index:-1;
@media all and (max-width: 425px) {
  background-image: url(${header2})
}
`

export const HeaderText = styled.div`
font-family: 'Work Sans', sans-serif;
font-weight: 100;
font-size: 5vw;
width: 35%;
text-align:center;
padding-right: 50%;
padding-top: 10%;
z-index: 1;
@media all and (max-width: 425px) {
  color:white;
  font-size: 7vw;
  padding-top: 65%;
  width:100%;
  font-weight: 400;
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
}
`

export const About = styled.div`
width:100%;
height:90vh;
background-color:white;
position:relative;
`

export const AboutText = styled.div`
font-family: 'Dancing Script', cursive;
font-size: 4em;
position: absolute;
top: ${props => props.top};
left: ${props => props.left};
animation: ${fadeIn} ${props => props.time} ease-in-out;
@media all and (max-width: 768px) {
  font-size: 3em;
  left: 10%; 
}
@media all and (max-width: 425px) {
  top: 10%;
  left: ${props => props.leftM};
  font-size: 2.5em;
}
`

export const Icon = styled.img`
width:48px;
height:48px;
position:absolute;
top: ${props => props.top};
right: ${props => props.right};
animation: ${fadeIn} 1s ease-in;
@media all and (max-width: 425px) {
  width: 60px;
  height: 60px;
  right: ${props => props.rightM};
}
`

export const IconText = styled.div`
animation: ${fadeIn} 1s ease-in;
font-family: 'Work Sans', sans-serif;
font-size: 1.25em;
font-weight: 100;
width: 10%;
position: absolute;
top: ${props => props.top};
right: ${props => props.right};
@media all and (max-width: 425px) {
  font-size: 1em;
  top: ${props => props.topM};
  right: ${props => props.rightM};
  width: 30%;
}
`