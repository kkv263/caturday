import styled from 'styled-components';
import header from '../assets/header.jpg';

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
`

export const Icon = styled.img`
width:48px;
height:48px;
position:absolute;
top: ${props => props.top};
right: ${props => props.right};
`

export const IconText = styled.div`
font-family: 'Work Sans', sans-serif;
font-size: 1em;
font-weight: 100;
width: 10%;
position: absolute;
top: ${props => props.top};
right: ${props => props.right};
`