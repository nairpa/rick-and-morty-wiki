import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-left: 200px;
    padding-top: 75px;
`

export const Name = styled.h1`
    font-family: 'Oswald';
    font-size: 30px;
    color: #ffffff;
    margin: 0;
    text-transform: uppercase;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5em;
    background: #168b44;
`

export const Button = styled.button`
    border: none;
    border-radius: 4px 4px 4px 4px;
    background: #FFFFFF;
    color: #168b44;
    border: 1px solid #ffffff;
    font-family: 'Oswald';
    text-transform: uppercase;
    transition: 0.3s all ease-in-out;
    :hover {
        color: #FFFFFF;
        background: #168b44;
    }
` 

export const Container = styled.div`
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    
`

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;    
    flex-wrap: wrap;
   
`

export const Item = styled.li`
    font-family: 'Oswald';
    padding-right: 0.5em;
`

export const Text = styled.p`
    font-family: 'Oswald';
    
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    `
