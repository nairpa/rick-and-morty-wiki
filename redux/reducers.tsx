import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Characters } from "../models/characters";
import { RootState } from '../redux/store';
import { Pages } from '../models/pages'
import { Episodes } from "../models/episodes";
import { Locations } from '../models/locations';

interface CharacterState {
    locations: Locations[],
    characters: Characters[],
    episodes: Episodes[],
    favChar: Characters[],
    currentFav: Characters[],
    pagination: Pages,
    searchValue: string,
}

export const characterSlice = createSlice({
    name: 'character',
    initialState: { 
        episodes: [],
        characters: [],
        locations: [],
        favChar: [],
        currentFav: [], 
        pagination: {
            currentPage: 0, 
            nextPage: 0, 
            prevPage: 0, 
            offset: 0,
            pageLimit: 10,
            totalPage: 0
        }, 
        searchValue: '' 
    } as CharacterState,
    reducers: {
        getCharacters: (state, action: PayloadAction<Characters[]>) => {
            state.characters = action.payload
        },
        getEpisodes: (state, action: PayloadAction<Episodes[]>) => {
            state.episodes = action.payload
        },
        getLocations: (state, action: PayloadAction<Locations[]>) => {
            state.locations = action.payload
        },
        setPagination: (state, action: PayloadAction<Pages>) => {
            state.pagination = {
                ...state.pagination, 
                currentPage: action.payload.currentPage, 
                nextPage: action.payload.nextPage, 
                prevPage: action.payload.prevPage, 
                totalPage: action.payload.totalPage
            }
        },
        setOffset: (state) => {
            state.pagination = {
                ...state.pagination,
                offset: (state.pagination.currentPage - 1) * state.pagination.pageLimit,
            }
        },
        setCurrentFav: (state) => {
            state.currentFav = state.favChar.slice(state.pagination.offset, state.pagination.offset + state.pagination.pageLimit)
        },
        clearPagination: (state) => {
            state.pagination = { 
                currentPage: 0,
                nextPage: 0,
                prevPage: 0,
                totalPage: 0,
                pageLimit: 10,
                offset: 0,
            }
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        toggleFav: (state, action: PayloadAction<Characters>) => {
            const  value  = current(state.favChar)
            if(!value.filter(el => el.id == action.payload.id).length) {
                state.favChar.push(action.payload)  
            } else {
                state.favChar = state.favChar.filter(el => el.id !== action.payload.id)
            }      
        },
    }
})

export const { 
    toggleFav, 
    getCharacters,
    setPagination, 
    setSearchValue, 
    getEpisodes, 
    clearPagination, 
    getLocations,
    setOffset,
    setCurrentFav, 
} = characterSlice.actions
export const selectCharacterState = (state: RootState) => state.character
export default characterSlice.reducer
