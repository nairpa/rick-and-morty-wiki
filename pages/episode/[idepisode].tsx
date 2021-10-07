import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ID } from '../../apollo/queries/getEpisodeId'
import { useRouter } from 'next/router'
import { DetailEpisodeCard } from '../../components/detailCardComponent/detailEpisodeCard/detailEpisodeCard'

export default function CharacterDetail():JSX.Element {
    const router = useRouter()
    const { idepisode } = router.query
    const id = parseInt(idepisode)

    const {loading, error, data} = useQuery(GET_ID(id, `episode`))
    console.log(data)
    return (
        <>
            {loading ? <h1>loading</h1> : <DetailEpisodeCard data={data.episode} />}
        </>
    )
}   