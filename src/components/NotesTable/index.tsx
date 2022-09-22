import React, { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import {
  selectActiveNotes,
  selectArchivedNotes,
} from '../../redux/slices/notes';
import Table from '../Table';
import TableRow from '../TableRow';
import TableHeaderCell from '../TableHeaderCell';
import ArchiveButton from '../ArchiveButton';
import NoteRow from './NoteRow';

const NotesTable: React.FC = () => {
  const [showArchived, setShowArchived] = useState(false);

  const notes = useAppSelector(
    showArchived ? selectArchivedNotes : selectActiveNotes
  );

  return (
    <Table
      className="table-fixed"
      head={
        <TableRow isHead>
          <TableHeaderCell className="w-20" />
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Created</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Content</TableHeaderCell>
          <TableHeaderCell>Dates</TableHeaderCell>
          <TableHeaderCell className="w-11" />
          <TableHeaderCell className="w-11">
            <ArchiveButton
              onClick={() => setShowArchived(!showArchived)}
              variant={showArchived ? 'unarchive' : 'archive'}
              light
            />
          </TableHeaderCell>
          <TableHeaderCell className="w-11" />
        </TableRow>
      }
    >
      {notes.map((note) => (
        <NoteRow key={note.id} note={note} isArchived={showArchived} />
      ))}
    </Table>
  );
};

export default NotesTable;
