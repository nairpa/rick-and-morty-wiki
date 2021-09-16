import * as React from "react";
import { Button, Container, Image, ImageContainer, NameText, SpeciesText, TextContainer, IconContainer } from "./cardStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import * as fillHeart from '@fortawesome/free-solid-svg-icons'
import  { Characters }  from '../../models/characters'
import Router from 'next/router'
import { SearchContext } from "../../context/searchContext";

const CardComponent:React.FC<{charData: Characters[]}> = ({charData}):JSX.Element => {
    const { handleFav, listFav } = React.useContext(SearchContext)

    const handleDetail = (id: number) => {
        Router.push('/' + id)
    }

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
                                <FontAwesomeIcon onClick={() => handleFav(id)} icon={listFav.includes(el) ? fillHeart.faHeart : faHeart}/>
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