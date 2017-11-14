import styled, { keyframes }from 'styled-components';
import header from '../assets/header.jpg';

export const fadeIn = keyframes`
from { opacity: 0; transform: translateX(-5%);}
66% { opacity: 0; transform: translateX(-2.5%);}
to   { opacity: 1; transform: translateX(0%);}
`

export const HeaderImage = styled.div`
width:100%;
height: 100vh;
background-image: url(${header});
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position:relative;
z-index:-1;
`

export const HeaderText = styled.h1`
font-family: 'Work Sans', sans-serif;
font-weight: 200;
font-size: 3em;
text-align:center;
padding-right: 50%;
z-index: 1;
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
`

export const Icon = styled.img`
width:48px;
height:48px;
position:absolute;
top: ${props => props.top};
right: ${props => props.right};
animation: ${fadeIn} 1s ease-in;
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
`