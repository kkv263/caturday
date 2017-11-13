import styled from 'styled-components'

export const PurposeWrapper = styled.div`
width: 80%;
height: 150vh;
background-image: linear-gradient(top, #919CA9  50%, #F6F2EB  50%);
background-image: -o-linear-gradient(top, #919CA9  50%, #F6F2EB  50%);
background-image: -moz-linear-gradient(top, #919CA9  50%, #F6F2EB  50%);
background-image: -webkit-linear-gradient(top, #919CA9  50%, #F6F2EB  50%);
background-image: -ms-linear-gradient(top, #919CA9  50%, #F6F2EB  50%);
position: relative;
margin-left: 5%;
`

export const PurposeText = styled.div`
text-align: center;
width: 80%;
height: 20%;
padding-top: 2.5%;
margin-left: 10%;
color: ${props => props.color};
font-family: 'Dancing Script', cursive;
font-size: 3em;
 & > p {
  font-family: 'Work Sans', sans-serif;
  font-weight: 200;
  font-size: .5em;
  width: 60%;
  padding-top: 2.5%;
  margin-left: 20%;
 }
`


export const PurposeImage = styled.img`
width: 80%;
margin-left: 10%;
`