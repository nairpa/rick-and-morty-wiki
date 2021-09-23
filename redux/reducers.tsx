import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Characters } from "../models/characters";
import { RootState } from '../redux/store';
import { Pages } from '../models/pages'

interface CharacterState {
    characters: Characters[],
    favChar: Characters[],
    pagination: Pages,
    searchValue: string,
}

export const characterSlice = createSlice({
    name: 'character',
    initialState: { 
        characters: [],
        favChar: [], 
        pagination: {
            currentPage: 0, 
            nextPage: 0, 
            prevPage: 0, 
            totalPage: 0
        }, 
        searchValue: '' 
    } as CharacterState,
    reducers: {
        getCharacters: (state, action: PayloadAction<Characters[]>) => {
            state.characters = action.payload
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

export const { toggleFav, getCharacters,setPagination, setSearchValue } = characterSlice.actions
export const selectCharacterState = (state: RootState) => state.character
export default characterSlice.reducer
