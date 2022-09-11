import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Category } from '../../configs/categories';
import { RootState } from '../store';

export interface Note {
  name: string;
  content: string;
  category: Category;
}

export interface NoteUpdate {
  name?: string;
  content?: string;
  category?: Category;
}

export interface NotesSlice {
  active: Note[];
  archived: Note[];
}

const initialState: NotesSlice = {
  active: [],
  archived: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Note>) => {
      state.active.push(action.payload);
    },
    remove: (
      state,
      action: PayloadAction<{ noteIndex: number; isArchived: boolean }>
    ) => {
      (action.payload.isArchived ? state.archived : state.active).splice(
        action.payload.noteIndex,
        1
      );
    },
    update: (
      state,
      action: PayloadAction<{
        noteIndex: number;
        isArchived: boolean;
        update: NoteUpdate;
      }>
    ) => {
      Object.assign(
        (action.payload.isArchived ? state.archived : state.active)[
          action.payload.noteIndex
        ],
        action.payload.update
      );
    },
  },
});

export const { add, remove, update } = notesSlice.actions;

export const selectActiveNotes = (state: RootState) => state.notes.active;
export const selectArchivedNotes = (state: RootState) => state.notes.archived;

export default notesSlice.reducer;
