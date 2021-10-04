import { gql } from '@apollo/client'

export const GET_EPISODES = (page: number = 1, typename: string, filter?: string)  => {
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
                air_date,
                episode,
            }
        }
    }
`
}