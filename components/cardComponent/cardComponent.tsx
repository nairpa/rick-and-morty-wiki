import * as React from "react";
import { Button, Container, Image, ImageContainer, NameText, SpeciesText, TextContainer, IconContainer } from "./cardStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import * as fillHeart from '@fortawesome/free-solid-svg-icons'
import  { Characters }  from '../../models/characters'
import Router from 'next/router'
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { toggleFav, selectCharacterState } from "../../redux/reducers";

const CardComponent:React.FC<{charData: Characters[]}> = ({charData}):JSX.Element => {
    
    const dispatch = useAppDispatch()
    const charState = useAppSelector(selectCharacterState)

    React.useEffect(() => {
    
    }, [charState])

    const handleDetail = (id: number) => {
        Router.push('/character/' + id)
    }
    console.log(charState.favChar)
    return (
        <> 
            {charData.map((el: Characters):JSX.Element => { 
                const { name, id, image, species } = el
                return (
                    <Container key={id}>
                        <ImageContainer>
                            <Image src={image} alt={name} />
                        </ImageContainer>
                        <TextContainer >
                            <NameText>{name}</NameText>
                            <SpeciesText>{species}</SpeciesText>
                            <IconContainer>
                                <FontAwesomeIcon onClick={() => dispatch(toggleFav(el))} icon={charState.favChar.filter(e => e.id === el.id).length ? fillHeart.faHeart : faHeart}/>
                            </IconContainer>
                        </TextContainer>
                        <Button onClick={() => handleDetail(id)}>Ver detalle</Button>
                    </Container>
                )
            })}
        </>   
    )
}

export default CardComponent