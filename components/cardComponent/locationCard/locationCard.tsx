import * as React from "react";
import { Button, Container, NameText, EpisodeText, TextContainer, DateText } from "./locationStyles";
import  { Locations }  from '../../../models/locations'
import Router from 'next/router'
import { CardContainer } from "../../../containers/resultContainer/resultStyles";
import ReactLoading from 'react-loading';

const LocationCard:React.FC<{locationData: Locations[]}> = ({locationData}):JSX.Element => {
    const handleDetail = (id: number) => {
        Router.push('/location/' + id)
    }

    return (
        <> 
            {locationData ? locationData.map((el: Locations):JSX.Element => { 
                const { name, id, dimension, type } = el
                return (
                    <Container key={id}>
                        <TextContainer >
                            <NameText>{name}</NameText>
                            <EpisodeText>{dimension}</EpisodeText>
                            <DateText>{type}</DateText>
                        </TextContainer>
                        <Button onClick={() => handleDetail(id)}>Ver detalle</Button>
                    </Container>
                )
            }) : <CardContainer><ReactLoading type={'bars'} color={'#168b44'} height={100} width={100}/></CardContainer>}
        </>   
    )
}

export default LocationCard