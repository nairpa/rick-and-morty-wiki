import styled from 'styled-components'

export const Input = styled.input`
    width: 80%;
    padding: 0.5em;
    border: 1px solid #168b44;
    border-radius: 4px 0px 0px 4px;
 `

export const Span = styled.span`
    padding: 0.5em;
    border: 1px solid #168b44;
    border-radius: 0px 4px 4px 0px;
    color: #FFFFFF;
    background-color: #168b44;
`

export const Container = styled.div`
    width: 100%;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    padding-left: 250px;   
    
    @media(max-width: 580px) {
        padding-top: 100px;
        padding-bottom: 0;
        padding-left: 0;
    }
`

export const SearchContainer = styled.div`
    display: flex;
    padding: 0.5em;
    width: 50%;
    align-self: center;
    justify-self: center;
    flex-direction: row;
    align-content: center;

    @media(max-width: 580px) {
        padding-left: 0.5em;
        padding-bottom: 0;
        width: 60%;
    }
`