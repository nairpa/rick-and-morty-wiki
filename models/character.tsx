export interface Character {
    id: number,
    image: string,
    name: string,
    species: string,
    gender: string,
    location: {name: string},
    origin: {name: string},
    status: string,
    episode: object[],
}