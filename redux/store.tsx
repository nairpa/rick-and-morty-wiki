import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import characterReducer from './reducers'
import { loadState, saveState } from "../utils/localStorageManagment"

const persistedState = loadState()

export const store = configureStore({
    reducer: {
        character: characterReducer,
    }, 
    preloadedState: persistedState
})

store.subscribe(() => {
    saveState(store.getState());
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;