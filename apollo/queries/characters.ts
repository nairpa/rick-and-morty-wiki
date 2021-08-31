import { gql } from '@apollo/client'

export const GET_CHARACTERS = (page: number = 1, typename: string) => {
    return gql`
    query {
        ${typename}(page:${page}) {
            info {
                pages,
                next,
                prev,
            },
            results {
                id,
                name,
                species,
                image,
            }
        }
    }
`
}