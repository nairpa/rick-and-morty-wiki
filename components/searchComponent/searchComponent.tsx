import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../apollo/queries/characters";
import { Button, Container, Image, ImageContainer, NameText, SpeciesText } from "./searchStyles";

interface CharData {
    id: number,
    image: string,
    name: string,
    species: string,
}

const SearchComponent = ():JSX.Element => {
    const { loading, error, data } = useQuery(GET_CHARACTERS(1, `characters`))
    console.log(data)

    const charData = data? data.characters.results : null   

    console.log(charData)
    return (
        <> 
            {loading ? <div>Loading</div> : <div>{charData.map((el: CharData) => { 
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
            })
            }</div> }  
        </>
    )
}

export default SearchComponent