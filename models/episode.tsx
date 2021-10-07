export interface Episode {
    id: number,
    name: string,
    episode: string,
    air_date: string,
    created: string,
    characters: {
        name: string,
    }[]
}