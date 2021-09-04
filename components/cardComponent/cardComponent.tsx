import * as React from "react";
import { Button, Container, Image, ImageContainer, NameText, SpeciesText, TextContainer, IconContainer } from "./cardStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import * as fillHeart from '@fortawesome/free-solid-svg-icons'
import  { Character }  from '../../models/characters'

const CardComponent:React.FC<{charData: Character[]}> = ({charData}):JSX.Element => {
    let favorite = false;

    return (
        <> 
            {charData.map((el: Character):JSX.Element => { 
                return (
                    <Container key={el.id}>
                        <ImageContainer>
                            <Image src={el.image} alt={el.name} />
                        </ImageContainer>
                        <TextContainer >
                            <NameText>{el.name}</NameText>
                            <SpeciesText>{el.species}</SpeciesText>
                            <IconContainer>
                                <FontAwesomeIcon icon={favorite ? fillHeart.faHeart : faHeart}/>
                            </IconContainer>
                        </TextContainer>
                        <Button>Ver detalle</Button>
                    </Container>
                )
            })}
        </>   
    )
}

export default CardComponent