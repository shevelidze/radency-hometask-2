import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import categories, { type Category } from '../../configs/categories';
import { RootState } from '../store';
import deleteIfFound from '../../utils/deleteIfFound';

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

function generateNoteIdCheckPredicate(noteId: Note['id']) {
  return (note: Note) => note.id === noteId;
}

function getNoteById(state: NotesSlice, noteId: Note['id']) {
  const noteHasNeededId = generateNoteIdCheckPredicate(noteId);

  return (
    state.archived.find(noteHasNeededId) || state.active.find(noteHasNeededId)
  );
}

function deleteNote(state: NotesSlice, noteId: Note['id']) {
  const noteHasNeededId = generateNoteIdCheckPredicate(noteId);

  deleteIfFound(state.active, noteHasNeededId) ||
    deleteIfFound(state.archived, noteHasNeededId);
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Note>) => {
      state.active.push(action.payload);
    },
    remove: (state, action: PayloadAction<Note['id']>) => {
      deleteNote(state, action.payload);
    },
    update: (
      state,
      action: PayloadAction<{
        noteId: Note['id'];
        update: NoteUpdate;
      }>
    ) => {
      const note = getNoteById(state, action.payload.noteId);

      if (note !== undefined) Object.assign(note, action.payload.update);
    },
    archive: (state, action: PayloadAction<Note['id']>) => {
      const note = getNoteById(state, action.payload);

      if (note !== undefined) {
        deleteNote(state, action.payload);
        state.archived.push(note);
      }
    },
    unarchive: (state, action: PayloadAction<Note['id']>) => {
      const note = getNoteById(state, action.payload);

      if (note !== undefined) {
        deleteNote(state, action.payload);
        state.active.push(note);
      }
    },
  },
});

export const { add, remove, update, archive, unarchive } = notesSlice.actions;

export const selectActiveNotes = (state: RootState) => state.notes.active;
export const selectArchivedNotes = (state: RootState) => state.notes.archived;

export default notesSlice.reducer;
