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
float: ${props => props.float};
width: 100%;
height: auto;
padding-bottom: 5%;
`

export const ItemWrapper = styled.div`
width: 100%;
`

export const ItemLeft = styled.div`
width: ${props => props.w};
padding-left: ${props => props.pLeft};
padding-bottom: 10%;
`

export const HeaderText = styled.p`
font-family: 'Work Sans', sans-serif;
font-weight: 200;
font-size: 1.25em;
`
