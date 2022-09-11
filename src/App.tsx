import React from 'react';
import './App.css';
import Table from './components/Table';
import TableRow from './components/TableRow';
import TableHeaderCell from './components/TableHeaderCell';
import TableCell from './components/TableCell';

function App() {
  return (
    <div>
      <Table
        head={
          <TableRow>
            <TableHeaderCell>Table header</TableHeaderCell>
          </TableRow>
        }
      >
        <TableRow>
          <TableCell>Table cell</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Table cell</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Table cell</TableCell>
        </TableRow>
      </Table>
    </div>
  );
}

export default App;
