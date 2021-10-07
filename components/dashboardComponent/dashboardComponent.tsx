import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Container, Image, ImageContainer, NameText, SpeciesText, TextContainer, IconContainer } from '../../components/cardComponent/cardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import * as fillHeart from '@fortawesome/free-solid-svg-icons';
import { toggleFav, setPagination, clearPagination, selectCharacterState  } from "../../redux/reducers";
import { CardContainer } from "../../containers/resultContainer/resultStyles";
import PageComponent from "../pageComponent/pageComponent";
import { useEffect } from "react";

export const DashboardComponent:React.FC = ():JSX.Element => {
    const favChar = useAppSelector(selectCharacterState)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(clearPagination())
    }, [])

    let tPage = Math.ceil(favChar.favChar.length / 10)

    useEffect(() => {
        if(favChar.favChar.length > 10) {
            let pageFav = favChar.favChar.splice(10)
            console.log(pageFav)
        }
        dispatch(setPagination({...favChar.pagination, totalPage: tPage }))
    }, [favChar.favChar])

    const handleClick = (cPage:number, nPage:number, pPage:number): void => {
        dispatch(setPagination({...favChar.pagination, currentPage: cPage, nextPage: nPage, prevPage: pPage}))
    }

    return (
        <>
        <CardContainer>
            {favChar.favChar.length ? favChar.favChar.map(el => {
                return (
                    <Container key={el.id}>
                        <ImageContainer>
                            <Image src={el.image} alt={el.name} />
                        </ImageContainer>
                        <TextContainer >
                            <NameText>{el.name}</NameText>
                            <SpeciesText>{el.species}</SpeciesText>
                            <IconContainer>
                                <FontAwesomeIcon onClick={() => dispatch(toggleFav(el))} icon={favChar.favChar.filter(e => e.id === el.id).length ? fillHeart.faHeart : faHeart}/>
                            </IconContainer>
                        </TextContainer>
                    </Container>
                )
            }) : <h1>Favorite characters not found</h1>}
        </CardContainer>
        <PageComponent pagination={favChar.pagination} handleClick={handleClick}/>
        </>
    )
}