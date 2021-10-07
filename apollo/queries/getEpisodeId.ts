import { gql } from '@apollo/client'

export const GET_ID = (id: number, typename: string)  => {
    return gql`
    query {
        ${typename}(id: ${id}) {
            id,
            name,
            air_date,
            episode,
            characters {
                name
            },
            created,
        }
    }
`
}