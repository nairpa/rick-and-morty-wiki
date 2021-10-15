import ResultContainer from "../containers/resultContainer/resultContainer";
import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../apollo/queries/episodes";
import { selectCharacterState, setPagination, getEpisodes, clearPagination } from "../redux/reducers";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { ErrorComponent } from "../components/errorComponent/errorComponent";
import ReactLoading from 'react-loading';
import { CardContainer } from "../containers/resultContainer/resultStyles";
import NavbarComponent from "../components/navbarComponet/navbarComponent";

export default function Episodes() {
    const episodes = useAppSelector(selectCharacterState)
    const { loading, error, data } = useQuery(GET_EPISODES(episodes.pagination.currentPage, `episodes`, episodes.searchValue))
    const dispatch = useAppDispatch()
    
    let type;

    React.useEffect(() => {
        dispatch(clearPagination())
    }, [])
    
    React.useEffect(() => {
        if(!loading) {
            dispatch(setPagination({...episodes.pagination, currentPage: data.episodes.info.prev? data.episodes.info.prev + 1 : 1, nextPage: data.episodes.info.next, prevPage: data.episodes.info.prev, totalPage: data.episodes.info.pages}))
            dispatch(getEpisodes(data.episodes.results))
        }
    }, [data])

    if(!error && !loading) {
        type = Object.keys(data)[0]
    }

    return (
        <>
            {error ? 
                <>
                    <ErrorComponent errorText={'No episodes found by that name'} />
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
