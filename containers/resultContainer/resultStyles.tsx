import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 250px;
    @media(max-width: 580px) {
        padding-left: 0;
        margin-top: 3.8em;
    }
`
    