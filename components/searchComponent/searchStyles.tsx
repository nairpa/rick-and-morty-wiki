import styled from 'styled-components'

export const Image = styled.img`
    width: 100%;
    border-radius: 4px 4px 0px 0px;
    object-fit: cover;
`

export const Container = styled.div`
    width: fit-content;
    display: flex; 
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid black;
    margin: 1em;
`

export const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 4px 4px 0px 0px; 
`

export const NameText = styled.p`
    font-family: 'Oswald';
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    padding: 0;
    margin: 0;
`

export const SpeciesText = styled.p`
    font-family: 'Oswald';
    padding: 0;
    margin: 0;
`

export const Button = styled.button`
    border: none;
    border-radius: 0px 0px 4px 4px;
    color: white;
    background: black;
    padding: 1em;
    font-family: 'Oswald';
    text-transform: uppercase;
    transition: 0.3s all ease-in-out;
    border-top: 1px solid black;
    :hover {
        background: white;
        color: black;
    }
`