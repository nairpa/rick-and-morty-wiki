import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../apollo/queries/characters";
import CardComponent from '../../components/cardComponent/cardComponent'
import { CardContainer } from './resultStyles'
import PageComponent from "../../components/pageComponent/pageComponent";
import NavbarComponent from "../../components/navbarComponet/navbarComponent";
import { selectCharacterState, getCharacters, setPagination, setSearchValue } from "../../redux/reducers";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

const ResultContainer:React.FC = ():JSX.Element => {
    const characters = useAppSelector(selectCharacterState)
    const { loading, error, data } = useQuery(GET_CHARACTERS(characters.pagination.currentPage, `characters`, characters.searchValue))
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if(!loading) {
            dispatch(getCharacters(data.characters.results))
            dispatch(setPagination({...characters.pagination, currentPage: data.characters.info.prev? data.characters.info.prev + 1 : 1, nextPage: data.characters.info.next, prevPage: data.characters.info.prev, totalPage: data.characters.info.pages}))
            console.log(characters.pagination)
        }
    }, [data])

    const handleClick = (cPage:number, nPage:number, pPage:number): void => {
        console.log(cPage, nPage, pPage)
        dispatch(setPagination({...characters.pagination, currentPage: cPage, nextPage: nPage, prevPage: pPage }))
    }

    const handleInput = (e: {target: {value: string}}): void => {
        if(e.target.value.length >= 3 || !e.target.value.length) {
            dispatch(setSearchValue(e.target.value))
        } 
        return;
    }

    return (
        <>
            <NavbarComponent handleInput={handleInput} />
            {loading ? <div>Loading</div> : 
            <CardContainer>
                <CardComponent charData={characters.characters}/>
            </CardContainer>
            }
            <PageComponent handleClick={handleClick} pagination={characters.pagination}/>
        </>
    )
}

export default ResultContainer