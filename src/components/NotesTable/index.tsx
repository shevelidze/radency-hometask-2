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
import styles from './NotesTable.module.css';
import findDates from '../../utils/findDates';

const NotesTable: React.FC = () => {
  const [showArchived, setShowArchived] = useState(false);

  const notes = useAppSelector(
    showArchived ? selectArchivedNotes : selectActiveNotes
  );

  return (
    <Table
      head={
        <TableRow>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Created</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Content</TableHeaderCell>
          <TableHeaderCell>Dates</TableHeaderCell>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell>
            <ArchiveButton
              onClick={() => setShowArchived(!showArchived)}
              variant={showArchived ? 'unarchive' : 'archive'}
              light
            />
          </TableHeaderCell>
          <TableHeaderCell></TableHeaderCell>
        </TableRow>
      }
      className={styles.notesTable}
    >
      {notes.map((note) => (
        <NoteRow
          key={note.id}
          name={note.name}
          created={note.createdDate.toLocaleDateString()}
          category={note.category.name}
          content={note.content || ''}
          categoryIconUrl={note.category.iconUrl}
          dates={findDates(note.content || '').join(', ')}
        />
      ))}
    </Table>
  );
};

export default NotesTable;
