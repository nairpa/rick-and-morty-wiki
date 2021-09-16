import { Character } from '../../models/character'
import { Nav, Image, Name, ImageContainer, Button, Container, TextContainer, Text, List, Item, IconContainer } from './detailCardStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fillHeart from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useContext, useEffect } from 'react'
import { SearchContext } from '../../context/searchContext'

export const DetailCardComponent:React.FC<{data : Character}> = ({data}):JSX.Element => {
    const { handleFav, listFav } = useContext(SearchContext)
    
    return (
        <>
        {data ? 
            <>
            <Nav>
                <Container>
                    <Name>{data.name}</Name>
                    <IconContainer>
                            <FontAwesomeIcon onClick={() => handleFav(data.id)} icon={listFav.map(el =>  el.id.includes(data.id)) ? fillHeart.faHeart : faHeart}/>
                    </IconContainer>
                    <Button onClick={() => window.history.back()}>Volver</Button>
                </Container>
                <ImageContainer>
                    <Image src={data.image} alt={data.name}></Image>
                </ImageContainer>
            </Nav>
            <TextContainer>
                <div>
                <Text>Especie: {data.species}</Text>
                <Text>Género: {data.gender}</Text>
                <Text>Estado: {data.status}</Text>
                <Text>Ubicación: {data.location.name}</Text>
                <Text>Origen: {data.origin.name}</Text>
                <Text>Episodios:</Text>
                <List>
                    {data.episode ? data.episode.map((el: {name: string}, i) => <Item key={i}>{i +1} : {el.name} </Item>) : null}
                </List>
                </div>
            </TextContainer>
            </> : <h1>loading</h1> }           
        </>
    )
}