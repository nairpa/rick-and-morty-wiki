import ResultContainer from "../containers/resultContainer/resultContainer";
import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../apollo/queries/characters";
import { selectCharacterState, getCharacters, setPagination, clearPagination } from "../redux/reducers";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { ErrorComponent } from "../components/errorComponent/errorComponent";
import { CardContainer } from "../containers/resultContainer/resultStyles";
import ReactLoading from 'react-loading';
import NavbarComponent from "../components/navbarComponet/navbarComponent";

export default function Characters() {
    const characters = useAppSelector(selectCharacterState)
    const dispatch = useAppDispatch()

    const { loading, error, data } = useQuery(GET_CHARACTERS(characters.pagination.currentPage, `characters`, characters.searchValue))
    
    let type;
    React.useEffect(() => {
        dispatch(clearPagination())
    }, [])

    React.useEffect(() => {
        if(!loading) {
            dispatch(setPagination({...characters.pagination, currentPage: data.characters.info.prev? data.characters.info.prev + 1 : 1, nextPage: data.characters.info.next, prevPage: data.characters.info.prev, totalPage: data.characters.info.pages}))
            dispatch(getCharacters(data.characters.results))
        }
    }, [data])

    if(!error && !loading) {
        type = Object.keys(data)[0]
    }

    return (
        <>
            {error ? 
                <>
                    <ErrorComponent errorText={'No characters found by that name'} />
                    <NavbarComponent /> 
                </> : 
            loading ? 
                <CardContainer>
                    <ReactLoading type={'bars'} color={'#168b44'} height={100} width={100}/>
                </CardContainer> :
            <ResultContainer type={type} />
            }
        </>
    )
}
