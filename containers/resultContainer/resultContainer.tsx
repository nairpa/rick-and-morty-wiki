import * as React from "react";
import CardComponent from '../../components/cardComponent/cardComponent'
import { CardContainer } from './resultStyles'
import PageComponent from "../../components/pageComponent/pageComponent";
import { selectCharacterState, setPagination} from "../../redux/reducers";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import EpisodeCard from "../../components/cardComponent/episodeCard/episodeCard";
import LocationCard from "../../components/cardComponent/locationCard/locationCard";
import NavbarComponent from "../../components/navbarComponet/navbarComponent";
import { TitleComponent } from "../../components/titleComponent/titleComponent";

const ResultContainer:React.FC<{type?}> = ({type}):JSX.Element => {
    const characters = useAppSelector(selectCharacterState)
    const dispatch = useAppDispatch()

    const handleClick = (cPage:number, nPage:number, pPage:number): void => {
        dispatch(setPagination({...characters.pagination, currentPage: cPage, nextPage: nPage, prevPage: pPage }))
    }

    return (
        <>
            <NavbarComponent />
            <TitleComponent title={type}/>
            <CardContainer>
                { type == 'characters' ? <CardComponent charData={characters.characters}/> : type == 'episodes' ? <EpisodeCard episodeData={characters.episodes}/> : <LocationCard locationData={characters.locations} />}     
            </CardContainer>
            <PageComponent handleClick={handleClick} pagination={characters.pagination}/>
        </>
    )
}

export default ResultContainer