import styled from 'styled-components'

export const ErrorText = styled.p`
    font-family: 'Oswald';
    color: #ffffff;
    text-align: center;
`

export const ErrorContainer = styled.div`
    background-color: #ffb5b5;
    border: 1px solid #ef7777;
    margin-left: 250px;
    @media(max-width: 580px) {
        margin-left: 0;
        margin-top: 3.8em;
    }
`