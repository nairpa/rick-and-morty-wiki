import styled from 'styled-components'

export const Image = styled.img`
    width: 40%; 
    min-width: 300px;
`

export const H1 = styled.h1`
    font-family: 'Oswald';
`

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 250px;
    @media(max-width: 540px) {
        padding-left: 0;
    }
`

export const Button = styled.button`
    background: #c8dd5d;
    border: 1px solid #12b0c9;
    padding: 0.5em;
    color: #168b44;
    font-weight: 700;
    transition: 0.3s all ease-in-out;
    :hover {
        background: #168b44;
        color: #c8dd5d;
        border: 1px solid #0e3236;
    }
`