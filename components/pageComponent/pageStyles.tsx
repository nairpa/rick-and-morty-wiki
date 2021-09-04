import styled from 'styled-components'

export const PageContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-around;
    padding: 1em;
    bottom: 0;
`
export const PageIndexContainer = styled.li`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    font-family: 'Oswald';
    color: #168b44;
    transition: 0.3s all ease-in-out;
    :hover {
        background: #FFFFFF;
        border: 1px solid #168b44;
    }
`

export const PageIndex = styled.a`
    :hover {
        cursor: pointer;
    }
`