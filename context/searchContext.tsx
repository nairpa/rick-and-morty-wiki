import { createContext, useContext, useState } from "react";
import { Characters } from "../models/characters";
import { Pages } from "../models/pages";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../apollo/queries/characters";

export const SearchContext = createContext(null)

export default function SearchProvider ({children}) {
    const [search, setSearch] = useState<string>('')

    const [pagination, setPagination] = useState<Pages>({
        currentPage: 0,
        nextPage: 0,
        prevPage: 0,
        totalPage: 0
    })

    const { loading, error, data } = useQuery(GET_CHARACTERS(pagination.currentPage, `characters`, search))
    const charData = data? data.characters.results : null

    const handleInput = (e: {target: {value: string}}): void => {
        if(e.target.value.length >= 3 || !e.target.value.length) {
            setSearch(e.target.value)
        } 
        return;
    }

    const [listFav, setListFav] = useState([])
    const handleFav = (id: number) => {
        const fav = charData.filter((el:Characters) => el.id == id)
        if(!listFav.includes(fav[0])) {
            setListFav([...listFav, fav[0]])
        } else {
            setListFav(listFav.filter((el:Characters) => el.id !== id))
        }
    }

    return (
        <SearchContext.Provider value={{search, handleInput, handleFav, listFav}}>
            {children}
        </SearchContext.Provider>
    )
}