import React from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Image, ImageContainer, Input, Navbar, SearchContainer } from "./navbarSyles"

const NavbarComponent:React.FC<{handleInput: (e) => void}> = ({handleInput}):JSX.Element => {
    return (
        <header>
            <Navbar>
                <ImageContainer>
                    <Image src='/logo.png' alt='logo'/>
                </ImageContainer>
                <SearchContainer>
                    <Input onChange={(e) => handleInput(e)} type='search'/>
                    <Button> <FontAwesomeIcon icon={faSearch}/> </Button>
                </SearchContainer>
            </Navbar>
        </header>
    )
}

export default NavbarComponent