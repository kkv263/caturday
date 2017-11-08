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
`

export const About = styled.div`
width:100%;
height:100vh;
background-color:white;
`
