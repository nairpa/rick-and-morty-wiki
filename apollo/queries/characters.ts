import { gql } from '@apollo/client'

export const GET_CHARACTERS = (page: number, typename: string) => {
    return gql`
    query {
        ${typename}(page:${page}) {
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