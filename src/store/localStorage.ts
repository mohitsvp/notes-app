import { type Middleware } from '@reduxjs/toolkit';
import { type RootState } from './store';
import { type Note } from '../types';

const LOCAL_STORAGE_KEY = 'swaayaat_notes';

export const loadState = (): Note[] | undefined => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as Note[];
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return undefined;
  }
};

export const localStorageMiddleware: Middleware = store => next => (action : any) => {
  const result = next(action);

  const actionType = action.type as string;
  if (actionType.startsWith('notes/')) {
    try {
      const state = store.getState() as RootState;
      const serializedState = JSON.stringify(state.notes.notes);
      localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
    } catch (err) {
      console.error("Could not save state to localStorage", err);
    }
  }

  return result;
};