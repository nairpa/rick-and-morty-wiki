import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ID } from '../../apollo/queries/getById'
import { useRouter } from 'next/router'
import { DetailCardComponent } from '../../components/detailCardComponent/detailCharacterCard/detailCardComponent'
import ReactLoading from 'react-loading'
import { CardContainer } from '../../containers/resultContainer/resultStyles'

export default function CharacterDetail():JSX.Element {
    const router = useRouter()
    const { idcharacter } = router.query
    const id = parseInt(idcharacter)

    const {loading, error, data} = useQuery(GET_ID(id, `character`))

    return (
        <>
            {loading ? <CardContainer><ReactLoading type={'bars'} color={'#168b44'} height={100} width={100}/></CardContainer>: <DetailCardComponent data={data.character} />}
        </>
    )
}   

