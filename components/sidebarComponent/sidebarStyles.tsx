import styled from 'styled-components'

export const Aside = styled.aside<{visible: boolean}>`
    display: flex;
    flex-direction: column;
    background-color: #168b44;
    color: #ffffff;
    font-family: 'Oswald';
    z-index: 99;
    width: 250px;
    bottom: 0;
    left: 0;
    top: 0;
    position: fixed;
    padding-top: 100px;
    padding-left: 1em;
    @media(max-width: 580px) {
        {
            display: ${props => props.visible ? 'flex' : 'none'};
        }
    }
`

export const IconContainer = styled.div`
    display: none;
    margin-top: 0.2em;
    font-size: 20px;
    color: white;
    z-index: 100;
    padding-left: 0.5em;
    position: fixed;
    padding: 0.5em;
    border-radius: 10px;
    cursor: pointer;
    @media(max-width: 580px) {
        {
            display: block;
        }
    }
`

export const Image = styled.img`
    width: 100%;
    object-fit: contain;
    z-index: 99;
`

export const ImageContainer = styled.div<{visible: boolean}>`
    left: 0;
    top: 0;
    margin-top: 0.2em;
    position: fixed;
    width: 200px;
    height: fit;
    z-index: 100;
    overflow: hidden;
    margin-left: 30px;
    display: block;
    @media(max-width: 580px) {
        display: none;
    }
`

export const Container = styled.div<{visible: boolean}>`
    top: 0;
    margin-top: 0.2em;
    display: block;
    width: 50px;
    height: 60px;
    padding: 0.2em;
    z-index: 100;
    background-color: #168b44;
    align-items: center;
    border-radius: 0px 10px 10px 0px;
    position: fixed;
    @media(max-width: 540px) {
        width: 100%;
        margin-top: 0;
        border-radius: 0;
        border-bottom: 1px solid #ffffff;
    }
    `