import { gql } from '@apollo/client'

export const GET_ID = (id: number, typename: string)  => {
    return gql`
    query {
        ${typename}(id: ${id}) {
            id,
            name,
            status,
            species,
            type,
            gender,
            origin {
                name,
            },
            location {
                name,
            },
            image,
            episode {
                name,
            }
        }
    }
`
}