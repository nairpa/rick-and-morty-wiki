import { gql } from '@apollo/client'

export const GET_LOCATIONS = (page: number = 1, typename: string, filter?: string)  => {
    return gql`
    query {
        ${typename}(page:${page}, filter: {name: "${filter? filter: " "}"}) {
            info {
                pages,
                next,
                prev,
            },
            results {
                id,
                name,
                dimension,
                type,
            }
        }
    }
`
}