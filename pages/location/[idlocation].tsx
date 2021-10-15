import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ID } from '../../apollo/queries/getLocationId'
import { useRouter } from 'next/router'
import { DetailLocationCard } from '../../components/detailCardComponent/detailLocationCard/detailLocationCard'
import ReactLoading from 'react-loading'
import { CardContainer } from '../../containers/resultContainer/resultStyles'

export default function CharacterDetail():JSX.Element {
    const router = useRouter()
    const { idlocation } = router.query
    const id = parseInt(idlocation)

    const {loading, error, data} = useQuery(GET_ID(id, `location`))
    console.log(loading)
    return (
        <>
            {loading ? <CardContainer><ReactLoading type={'bars'} color={'#168b44'} height={100} width={100}/></CardContainer> : <DetailLocationCard data={data.location} />}
        </>
    )
}   