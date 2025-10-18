import { configureStore } from '@reduxjs/toolkit'
import { loadState, localStorageMiddleware } from './localStorage';
import notesReducer from "./notesSlice";


const preloadedNotes = loadState();


export const store = configureStore(
    {
        reducer: {
            notes: notesReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
        preloadedState: {
            notes: {
                notes: preloadedNotes ||[]
            }
        }
        
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch