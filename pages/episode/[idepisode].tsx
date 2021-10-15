import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ID } from '../../apollo/queries/getEpisodeId'
import { useRouter } from 'next/router'
import { DetailEpisodeCard } from '../../components/detailCardComponent/detailEpisodeCard/detailEpisodeCard'
import { CardContainer } from '../../containers/resultContainer/resultStyles'
import ReactLoading from 'react-loading'

export default function CharacterDetail():JSX.Element {
    const router = useRouter()
    const { idepisode } = router.query
    const id = parseInt(idepisode)

    const {loading, error, data} = useQuery(GET_ID(id, `episode`))
    console.log(data)
    return (
        <>
            {loading ? <CardContainer><ReactLoading type={'bars'} color={'#168b44'} height={100} width={100}/></CardContainer> : <DetailEpisodeCard data={data.episode} />}
        </>
    )
}   