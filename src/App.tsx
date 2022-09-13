import React from 'react';
import './App.css';
import Root from './layouts/Root';
import useNoteForm from './hooks/useNoteForm';
import NotesTable from './components/NotesTable';
import Button from './components/Button';
import SummaryTable from './components/SummaryTable';

function App() {
  const openNoteForm = useNoteForm();

  return (
    <Root>
      <NotesTable />
      <Button onClick={() => openNoteForm(null)}>New note</Button>
      <SummaryTable />
    </Root>
  );
}

export default App;
