import styled from 'styled-components'

export const Image = styled.img`
    width: 100%;
    border-radius: 4px 4px 4px 4px;
    object-fit: cover;
`

export const Container = styled.div`
    width: fit-content;
    padding: 0.5em;
    display: flex; 
    flex-direction: column;
    border-radius: 5px;
    margin: 1em;
    justify-content: space-between;
    transition: 0.3s all ease-in-out;
    :hover {
       ;  
    }
`

export const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 4px 4px 4px 4px; 
`

export const NameText = styled.p`
    width: 180px;    
    font-family: 'Oswald';
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    padding: 0;
    margin: 0;
    grid-column-start: 1;
    grid-row-start: 1;
`

export const SpeciesText = styled.p`
    font-family: 'Oswald';
    color: #168b44;
    padding: 0;
    margin: 0;
    grid-row-start: 2;

`

export const Button = styled.button`
    border: none;
    border-radius: 4px 4px 4px 4px;
    color: #FFFFFF;
    background: #168b44;
    padding: 1em;
    border: 1px solid #168b44;
    font-family: 'Oswald';
    text-transform: uppercase;
    transition: 0.3s all ease-in-out;
    :hover {
        background: #FFFFFF;
        color: #168b44;
    }
`

export const TextContainer = styled.div`
    display: grid;
    grid-template-columns: 100px 100px;
    grid-template-rows: auto auto;
`

export const IconContainer = styled.div`
    align-self: center;
    justify-self: flex-end;
    font-size: 20px;
    color: red;
`