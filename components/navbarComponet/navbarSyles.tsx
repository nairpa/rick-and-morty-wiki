import styled from 'styled-components'

export const Image = styled.img`
    width: 100%;
    object-fit: contain;
`

export const ImageContainer = styled.div`
    left: 0;
    top: 0;
    position: relative;
    width: 200px;
    height: fit;
    overflow: hidden;
`

export const Input = styled.input`
    width: 80%;
    padding: 0.5em;
    border: 1px solid #168b44;
    border-radius: 4px 0px 0px 4px;
 `

export const Button = styled.button`
    padding: 0.5em;
    width: 20%;
    border: 1px solid #168b44;
    border-radius: 0px 4px 4px 0px;
    color: #FFFFFF;
    background-color: #168b44;
    cursor: pointer;
    :hover {
        background: #FFFFFF;
        color: #168b44;
        border-left: 1px solid #ffffff;
    }
`

export const Navbar = styled.nav`
    top: 0;
    width: 100%;
    padding: 0.5em;
    position: fixed;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #168b44;
    min-width: 300px;
`

export const SearchContainer = styled.div`
    margin-left: auto;
`