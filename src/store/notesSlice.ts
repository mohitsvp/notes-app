import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Note } from '../types';

interface NotesState {
    notes: Note[];
}

const initialState: NotesState = {
    notes: []
}

export const notesSlices = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<Note>) => {
            state.notes.unshift(action.payload);
        },
        updateNote: (state, action: PayloadAction<Note>) => {
            const index = state.notes.findIndex((note) => note.id === action.payload.id);
            if (index !== -1) {
                state.notes[index] = action.payload;
            }
        },
        deleteNote: (state, action: PayloadAction<Note>) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload.id);
        },
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.notes = action.payload
        } 
    }
})


export const {addNote, updateNote, deleteNote, setNotes} = notesSlices.actions;

export const selectAllNotes = (state: {notes: NotesState}) => state.notes.notes;

export default notesSlices.reducer;