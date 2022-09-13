import React from 'react';
import './App.css';
import Button from './components/Button';
import NotesTable from './components/NotesTable';
import useNoteForm from './hooks/useNoteForm';

function App() {
  const openNoteForm = useNoteForm();

  return (
    <div>
      <NotesTable />
      <Button onClick={() => openNoteForm(null)}>New note</Button>
    </div>
  );
}

export default App;
