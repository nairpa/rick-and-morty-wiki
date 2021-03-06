import { Location } from '../../../models/location'
import { Nav, Name, Button, Container, TextContainer, Text, List, Item, Wrapper } from './detailLocationStyles'
import ReactLoading from 'react-loading'

export const DetailLocationCard:React.FC<{data : Location}> = ({data}):JSX.Element => {   
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
                <Text>Tipo: {data.type}</Text>
                <Text>Dimensión: {data.dimension}</Text>
                <Text>Creado: {data.created}</Text>
                <Text>Personajes:</Text>
                <List>
                    {data.residents ? data.residents.map((el: {name: string}, i) => <Item key={i}>{i +1} : {el.name} </Item>) : null}
                </List>
                </div>
            </TextContainer>
            </> : <ReactLoading type={'bars'} color={'#168b44'} height={100} width={100}/> }           
        </Wrapper>
    )
}