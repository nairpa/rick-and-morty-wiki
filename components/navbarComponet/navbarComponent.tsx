import React from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Span, Image, ImageContainer, Input, Navbar, SearchContainer } from "./navbarSyles"
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setSearchValue } from '../../redux/reducers'

const NavbarComponent:React.FC = ():JSX.Element => {
    const dispatch = useAppDispatch()
    const handleInput = (e: {target: {value: string}}): void => {
        if(e.target.value.length >= 3 || !e.target.value.length) {
            dispatch(setSearchValue(e.target.value))
        } 
        return;
    }

    return (
        <header>
            <Navbar>
                <ImageContainer>
                    <Image src='/logo.png' alt='logo'/>
                </ImageContainer>
                <SearchContainer>
                    <Input onChange={(e) => handleInput(e)} type='search'/>
                    <Span> <FontAwesomeIcon icon={faSearch}/> </Span>
                </SearchContainer>
            </Navbar>
        </header>
    )
}

export default NavbarComponent