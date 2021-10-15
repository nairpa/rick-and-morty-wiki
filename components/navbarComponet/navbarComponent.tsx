import React from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Span, Input, SearchContainer, Container } from "./navbarSyles"
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { selectCharacterState, setSearchValue } from '../../redux/reducers'

const NavbarComponent:React.FC = ():JSX.Element => {
    const dispatch = useAppDispatch()
    const searchValue = useAppSelector(selectCharacterState)
    const handleInput = (e: {target: {value: string}}): void => {
        if(e.target.value.length >= 3 || !e.target.value.length) {
            dispatch(setSearchValue(e.target.value))
        } 
        return;
    }

    return (
    <Container>
        <SearchContainer>
            <Input onChange={(e) => handleInput(e)} type='search' defaultValue={searchValue.searchValue}/>
            <Span> <FontAwesomeIcon icon={faSearch}/> </Span>
        </SearchContainer>
    </Container>
    )
}

export default NavbarComponent