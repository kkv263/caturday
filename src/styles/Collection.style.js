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
width: 50%;
height: auto;
`

export const TextImage = styled.div`
text-align:center;
height: 300px;
width: 100%;
`
