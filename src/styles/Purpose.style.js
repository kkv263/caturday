import styled, {keyframes} from 'styled-components'

export const fadeIn = keyframes`
from { opacity: 0; transform: translateX(-5%);}
66% { opacity: 0; transform: translateX(-2.5%);}
to   { opacity: 1; transform: translateX(0%);}
`

export const FadeWrapper = styled.div`
height: 80vw;
width: 100%;
margin-bottom: 5%;
`

export const PurposeWrapper = styled.div`
animation: ${fadeIn} 1s ease-in;
width: 80%;
height: 80vw;
background-image: linear-gradient(top, #919CA9  50%, #F6F2EB  50%);
background-image: -o-linear-gradient(top, #919CA9  50%, #F6F2EB  50%);
background-image: -moz-linear-gradient(top, #919CA9  50%, #F6F2EB  50%);
background-image: -webkit-linear-gradient(top, #919CA9  50%, #F6F2EB  50%);
background-image: -ms-linear-gradient(top, #919CA9  50%, #F6F2EB  50%);
position: relative;
margin-left: 10%;
`

export const PurposeText = styled.div`
text-align: center;
width: 80%;
height: 20%;
padding-top: 2.5%;
margin-left: 10%;
color: ${props => props.color};
font-family: 'Dancing Script', cursive;
font-size: 10vw;
 & > p {
  font-family: 'Work Sans', sans-serif;
  font-weight: 200;
  font-size: 3vw;
  width: 80%;
  padding-top: 2.5%;
  margin-left: 10%;
 }
`


export const PurposeImage = styled.img`
width: 80%;
margin-left: 10%;
`