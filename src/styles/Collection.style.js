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

export const GridImage = styled.div`
float: ${props => props.float};
width: 48%;
margin-left: 1%;
margin-right: 1%;
height: 200vh;
`

export const Image = styled.img`
width: 100%;
height: auto;
display: block;
`

export const ItemWrapper = styled.div`
width: 100%;
`

export const LeftWrapper = styled.div`
width:15%;
float:left;
margin-left: 10%;
background-color: #EBF0F6;
padding-top: 2.5%;
padding-bottom: 2.5%;
 & > p
 {
  font-family: 'Work Sans', sans-serif;
  font-weight: 200;
  font-size: 5vw;
  text-align:center;   
  color:#919CA9;
 }
`

export const RightWrapper = styled.div`
width:65%;
float:right;
height: auto;
margin-right: 10%;
background-color:#919CA9;
 & > h1{
  font-family: 'Work Sans', sans-serif;
  font-weight: 200;
  font-size: 5vw;
 }
`

export const ItemLeft = styled.div`
width: ${props => props.w};
float: ${props => props.float};
`

export const HeaderText = styled.p`
font-family: 'Work Sans', sans-serif;
font-weight: 200;
font-size: 1.25em;
`
