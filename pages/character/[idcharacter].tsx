import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ID } from '../../apollo/queries/getById'
import { useRouter } from 'next/router'
import { DetailCardComponent } from '../../components/detailCardComponent/detailCardComponent'

export default function CharacterDetail():JSX.Element {
    const router = useRouter()
    const { idcharacter } = router.query
    const id = parseInt(idcharacter)

    const {loading, error, data} = useQuery(GET_ID(id, `character`))

    return (
        <>
            {loading ? <h1>loading</h1> : <DetailCardComponent data={data.character} />}
        </>
    )
}   

