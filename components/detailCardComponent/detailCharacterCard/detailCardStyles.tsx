import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-left: 250px;
    @media(max-width: 580px) {
        padding-left: 0;
        margin-top: 3.7em;
    }
`

export const Name = styled.h1`
    font-family: 'Oswald';
    font-size: 30px;
    color: #ffffff;
    margin: 0;
    text-transform: uppercase;
`

export const Image = styled.img`
    width: 100%;
    border-radius: 4px 4px 4px 4px;
    object-fit: cover;
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
export const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 4px 4px 4px 4px; 
    border: 2px solid #ffffff;
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
export const IconContainer = styled.div`
    margin-left: 0.5em;
    align-self: center;
    justify-self: flex-end;
    font-size: 20px;
    color: red;
    cursor: pointer;
`