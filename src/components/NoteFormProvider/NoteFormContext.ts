import { createContext } from 'react';
import { type Note } from '../../redux/slices/notes';

export type OpenNoteFormFunction = (note: Note | null) => void;

const NoteFormContext = createContext<OpenNoteFormFunction>(() => {
  throw new Error('Failed to find note form provider.');
});

export default NoteFormContext;
