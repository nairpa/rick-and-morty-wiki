import styled from 'styled-components'

export const DateText = styled.p`
    font-family: 'Oswald';
    font-size: 15px;
    color: #168b44;
    padding: 0;
    margin: 0;
    grid-row-start: 2;  
`

export const Container = styled.div`
    width: fit-content;
    padding: 0.5em;
    display: flex; 
    flex-direction: row;
    border-radius: 5px;
    margin: 1em;
    justify-content: space-between;
    transition: 0.3s all ease-in-out;

    @media(max-width: 800px) {
        {
            flex-direction: column;
        }
    }
`

export const NameText = styled.p`
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

export const EpisodeText = styled.p`
    font-family: 'Oswald';
    color: #168b44;
    padding: 0;
    margin: 0;
    text-align: end;
    grid-row-end: 2;
`

export const Button = styled.button`
    height: fit-content;
    align-self: end;
    border: none;
    border-radius: 4px 4px 4px 4px;
    color: #FFFFFF;
    background: #168b44;
    padding: 1em;
    margin-left: 1em;
    border: 1px solid #168b44;
    font-family: 'Oswald';
    text-transform: uppercase;
    transition: 0.3s all ease-in-out;
    :hover {
        background: #FFFFFF;
        color: #168b44;
    }
    @media(max-width: 800px) {
        {
            align-self: center;
            margin-top: 1em;
        }
    }
`

export const TextContainer = styled.div`
    display: grid;
    grid-template-columns: 300px 200px;
    grid-template-rows: auto auto;
    @media(max-width: 800px) {
        {
            grid-template-columns: 100px 100px;
        }
    }
`