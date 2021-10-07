import { Character } from '../../../models/character'
import { Nav, Image, Name, ImageContainer, Button, Container, TextContainer, Text, List, Item, IconContainer, Wrapper } from './detailCardStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fillHeart from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { selectCharacterState, toggleFav } from '../../../redux/reducers'
import  Router from 'next/router'
export const DetailCardComponent:React.FC<{data : Character}> = ({data}):JSX.Element => {
    const { name, id, image, species } = data
    const dispatch = useAppDispatch()
    const charState = useAppSelector(selectCharacterState)
    
    const handleClick = () => {
        Router.push('/')
    }

    return (
        <Wrapper>
        {data ? 
            <>
            <Nav>
                <Container>
                    <div>
                        <Name>{data.name}</Name>
                        <IconContainer>
                            <FontAwesomeIcon onClick={() => dispatch(toggleFav({name, id, image, species}))} icon={charState.favChar.filter(el => el.id === data.id).length ? fillHeart.faHeart : faHeart}/>
                        </IconContainer>
                    </div>
                    <Button onClick={() => handleClick()}>Volver</Button>
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
        </Wrapper>
    )
}