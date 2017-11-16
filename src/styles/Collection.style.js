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

