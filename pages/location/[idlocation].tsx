import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ID } from '../../apollo/queries/getLocationId'
import { useRouter } from 'next/router'
import { DetailLocationCard } from '../../components/detailCardComponent/detailLocationCard/detailLocationCard'

export default function CharacterDetail():JSX.Element {
    const router = useRouter()
    const { idlocation } = router.query
    const id = parseInt(idlocation)

    const {loading, error, data} = useQuery(GET_ID(id, `location`))
    console.log(data)
    return (
        <>
            {loading ? <h1>loading</h1> : <DetailLocationCard data={data.location} />}
        </>
    )
}   