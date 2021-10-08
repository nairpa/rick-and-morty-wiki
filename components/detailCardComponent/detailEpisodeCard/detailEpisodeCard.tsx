import { Episode } from '../../../models/episode'
import { Nav, Name, Button, Container, TextContainer, Text, List, Item, Wrapper } from './detailEpisodeStyles'

export const DetailEpisodeCard:React.FC<{data : Episode}> = ({data}):JSX.Element => {   
    const handleClick = () => {
        window.history.back()
    }

    return (
        <Wrapper>
        {data ? 
            <>
            <Nav>
                <Container>
                    <div>
                        <Name>{data.name}</Name>
                    </div>
                    <Button onClick={() => handleClick()}>Volver</Button>
                </Container>
            </Nav>
            <TextContainer>
                <div>
                <Text>Nombre: {data.name}</Text>
                <Text>Fecha de emisión: {data.air_date}</Text>
                <Text>Episodio: {data.episode}</Text>
                <Text>Creado: {data.created}</Text>
                <Text>Personajes:</Text>
                <List>
                    {data.characters ? data.characters.map((el: {name: string}, i) => <Item key={i}>{i +1} : {el.name} </Item>) : null}
                </List>
                </div>
            </TextContainer>
            </> : <h1>loading</h1> }           
        </Wrapper>
    )
}