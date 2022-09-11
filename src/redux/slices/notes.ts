import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import categories, { type Category } from '../../configs/categories';
import { RootState } from '../store';

export interface Note {
  id: string;
  name: string;
  content?: string;
  category: Category;
  createdDate: Date;
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
  active: [
    {
      id: '123',
      name: 'Dantist appointment',
      category: categories[0],
      content: `I’m gonna have a dentist appointment on the 3/5/2021,
I moved it from 5/5/2021`,
      createdDate: new Date(),
    },
  ],
  archived: [
    {
      id: '12434',
      name: 'Archived note',
      category: categories[1],
      createdDate: new Date(),
    },
  ],
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
