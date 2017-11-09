import styled from 'styled-components'

export const CollectionWrapper = styled.div`
width: 100%;
position:relative;
`

export const ImageOne = styled.img`
max-width: 100%;
height: auto;
position:absolute;
`

export const ImageOneBack = styled.div`
position:absolute;
top: 75px;
width:90%;
height: 70vh;
background-color: #eaebf0;
`

export const CollHeader = styled.h1`
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