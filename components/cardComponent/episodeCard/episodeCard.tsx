import * as React from "react";
import { Button, Container, NameText, EpisodeText, TextContainer, DateText } from "./episodeStyles";
import  { Episodes }  from '../../../models/episodes'
import Router from 'next/router'

const EpisodeCard:React.FC<{episodeData: Episodes[]}> = ({episodeData}):JSX.Element => {
    const handleDetail = (id: number) => {
        Router.push('/episode/' + id)
    }

    return (
        <> 
            {episodeData ? episodeData.map((el: Episodes):JSX.Element => { 
                const { name, id, air_date, episode } = el
                console.log(air_date)
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
            }) : <h1>Loading</h1>}
        </>   
    )
}

export default EpisodeCard