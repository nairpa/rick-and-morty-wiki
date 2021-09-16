import { useQuery } from "@apollo/client"
import React, { useContext, useState } from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { GET_CHARACTERS } from "../../apollo/queries/characters"
import { Button, Image, ImageContainer, Input, Navbar, SearchContainer } from "./navbarSyles"
import { SearchContext } from "../../context/searchContext"

const NavbarComponent:React.FC = ():JSX.Element => {
    //const [name, setName] = useState<string>('')
    const { handleInput } = useContext(SearchContext)
    //const { loading, error, data } = useQuery(GET_CHARACTERS(null, `characters`, name))

    //console.log(data)
    //const handleInput = (e: {target: {value: string}}): void => {
    //    setName(e.target.value)
    //}

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