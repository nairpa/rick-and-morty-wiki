import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../apollo/queries/characters";
import { Button, Container, Image, ImageContainer, NameText, SpeciesText } from "./cardStyles";

interface CharData {
    id: number,
    image: string,
    name: string,
    species: string,
}

const CardComponent = ({charData}):JSX.Element => {
    return (
        <> 
            {charData.map((el: CharData) => { 
                return (
                    <Container key={el.id}>
                        <ImageContainer>
                            <Image src={el.image} alt={el.name} />
                        </ImageContainer>
                        <NameText>{el.name}</NameText>
                        <SpeciesText>{el.species}</SpeciesText>
                        <Button>Ver detalle</Button>
                    </Container>
                )
            })}
        </>   
    )
}

export default CardComponent