import React from 'react';
import './App.css';
import Button from './components/Button';
import NotesTable from './components/NotesTable';
import useNoteForm from './hooks/useNoteForm';
import Root from './layouts/Root';

function App() {
  const openNoteForm = useNoteForm();

  return (
    <Root>
      <NotesTable />
      <Button onClick={() => openNoteForm(null)}>New note</Button>
    </Root>
  );
}

export default App;
