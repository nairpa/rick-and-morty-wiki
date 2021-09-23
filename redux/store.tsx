import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import characterReducer from './reducers'

export const store = configureStore({
    reducer: {
        character: characterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;