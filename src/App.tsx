import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Button from './components/Button';
import NotesTable from './components/NotesTable';

function App() {
  return (
    <Provider store={store}>
      <div>
        <NotesTable />
        <Button>Push me</Button>
      </div>
    </Provider>
  );
}

export default App;
