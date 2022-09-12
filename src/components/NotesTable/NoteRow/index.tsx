import React from 'react';
import TableRow from '../../TableRow';
import TableCell from '../../TableCell';
import EditButton from '../../EditButton';
import DeleteButton from '../../DeleteButton';
import ArchiveButton from '../../ArchiveButton';
import CategoryIcon from '../../CategoryIcon';
import { type Note } from '../../../redux/slices/notes';
import findDates from '../../../utils/findDates';
import { useAppDispatch } from '../../../redux/hooks';
import { archive, unarchive, remove } from '../../../redux/slices/notes';

export interface NoteRowProps {
  note: Note;
  isArchived: boolean;
}

const NoteRow: React.FC<NoteRowProps> = ({ note, isArchived }) => {
  const dispatch = useAppDispatch();

  return (
    <TableRow>
      <TableCell>
        <CategoryIcon url={note.category.iconUrl} />
      </TableCell>
      <TableCell>{note.name}</TableCell>
      <TableCell>{note.createdDate.toLocaleDateString()}</TableCell>
      <TableCell>{note.category.name}</TableCell>
      <TableCell>{note.content}</TableCell>
      <TableCell>{findDates(note.content || '').join(', ')}</TableCell>
      <TableCell>
        <EditButton />
      </TableCell>
      <TableCell>
        <ArchiveButton
          variant={isArchived ? 'unarchive' : 'archive'}
          onClick={() => dispatch((isArchived ? unarchive : archive)(note.id))}
        />
      </TableCell>
      <TableCell>
        <DeleteButton onClick={() => dispatch(remove(note.id))}/>
      </TableCell>
    </TableRow>
  );
};

export default NoteRow;
