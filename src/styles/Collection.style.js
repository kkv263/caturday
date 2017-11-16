import styled, {keyframes} from 'styled-components'

export const fadeIn = keyframes`
from { opacity: 0; transform: translateX(-5%);}
66% { opacity: 0; transform: translateX(-2.5%);}
to   { opacity: 1; transform: translateX(0%);}
`

export const CollectionWrapper = styled.div`
width: 100%;
position:relative;
z-index: 2;
background-color: white;
`

export const GridImage = styled.div`
animation: ${fadeIn} 1s ease-in;
position:relative;
width: 80%;
overflow:hidden;
margin-bottom: 1%;
`

export const GridText = styled.div`
height: 100px;
width:100%;
font-family: 'Work Sans', sans-serif;
font-weight: 200;
font-size: 1.5em;

@media all and (max-width: 768px) {
  font-size: 1em;
}
`

export const Image = styled.img`
width: 100%;
`

export const ItemWrapper = styled.div`
width: 100%;
display:flex;
flex-direction: column;
flex-wrap: wrap;
display:flex;
align-items: center;
justify-content:center;
`

export const Footer = styled.div`
width: 70%;
opacity: 0.5;
margin-left: 15%;
border-top .5px solid;
border-color: #919CA9;
height: 50px;
padding-top: 2%;
padding-left: 2%;
float:left;
text-align:left;
 & > span {
  float:right;
  padding-right: 2%;
 }
`
export const HeaderText = styled.div`
animation: ${fadeIn} 1s ease-in;
border-top: 1px solid #000000;
border-bottom: 1px solid #000000;
font-family: 'Dancing Script', cursive;
width: 80%;
font-size: 10vw;
text-align:center;
padding-bottom: 2.5%;
margin-bottom: 5%;
margin-left: 10%;
`


