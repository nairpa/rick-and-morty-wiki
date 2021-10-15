import * as React from "react";
import { Button, Container, NameText, EpisodeText, TextContainer, DateText } from "./episodeStyles";
import  { Episodes }  from '../../../models/episodes'
import Router from 'next/router'
import { CardContainer } from "../../../containers/resultContainer/resultStyles";
import ReactLoading from 'react-loading';

const EpisodeCard:React.FC<{episodeData: Episodes[]}> = ({episodeData}):JSX.Element => {
    const handleDetail = (id: number) => {
        Router.push('/episode/' + id)
    }

    return (
        <> 
            {episodeData ? episodeData.map((el: Episodes):JSX.Element => { 
                const { name, id, air_date, episode } = el
                return (
                    <Container key={id}>
                        <TextContainer >
                            <NameText>{name}</NameText>
                            <EpisodeText>{episode}</EpisodeText>
                            <DateText>{air_date}</DateText>
                        </TextContainer>
                        <Button onClick={() => handleDetail(id)}>Ver detalle</Button>
                    </Container>
                )
            }) : <CardContainer><ReactLoading type={'bars'} color={'#168b44'} height={100} width={100}/></CardContainer>}
        </>   
    )
}

export default EpisodeCard