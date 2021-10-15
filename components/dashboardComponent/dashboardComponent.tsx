import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Container, Image, ImageContainer, NameText, SpeciesText, TextContainer, IconContainer } from '../../components/cardComponent/cardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import * as fillHeart from '@fortawesome/free-solid-svg-icons';
import { toggleFav, setPagination, clearPagination, selectCharacterState, setOffset, setCurrentFav } from "../../redux/reducers";
import { CardContainer } from "../../containers/resultContainer/resultStyles";
import PageComponent from "../pageComponent/pageComponent";
import { useEffect } from "react";
import { TitleComponent } from "../titleComponent/titleComponent";
import { ErrorComponent } from "../errorComponent/errorComponent";

export const DashboardComponent:React.FC = ():JSX.Element => {
    const favChar = useAppSelector(selectCharacterState)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(clearPagination())
    }, [])

    let tPage = Math.ceil(favChar.favChar.length / 10)

    useEffect(() => {
        dispatch(setPagination({...favChar.pagination, totalPage: tPage }))
        dispatch(setCurrentFav())

    }, [favChar.favChar])

    const handleClick = (cPage:number, nPage:number, pPage:number): void => {
        dispatch(setPagination({...favChar.pagination, currentPage: cPage, nextPage: nPage, prevPage: pPage}))
        dispatch(setOffset())
        dispatch(setCurrentFav())
    }

    return (
        <>
        {favChar.favChar.length ? <TitleComponent title={'Favorites'}/> : <ErrorComponent errorText={"You haven't added any favorite characters, start adding them"}/>}
        <CardContainer>
            {favChar.favChar.length ? favChar.currentFav.map(el => {
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
            }) : null}
        </CardContainer>
        <PageComponent pagination={favChar.pagination} handleClick={handleClick}/>
        </>
    )
}