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
import categories from '../../../configs/categories';
import useNoteForm from '../../../hooks/useNoteForm';

export interface NoteRowProps {
  note: Note;
  isArchived: boolean;
}

const NoteRow: React.FC<NoteRowProps> = ({ note, isArchived }) => {
  const dispatch = useAppDispatch();
  const openNoteForm = useNoteForm();

  const noteCategory = categories[note.categoryIndex];

  return (
    <TableRow>
      <TableCell>
        <CategoryIcon url={noteCategory.iconUrl} />
      </TableCell>
      <TableCell className="font-bold">{note.name}</TableCell>
      <TableCell>{note.createdDate}</TableCell>
      <TableCell>{noteCategory.name}</TableCell>
      <TableCell>{note.content}</TableCell>
      <TableCell>{findDates(note.content || '').join(', ')}</TableCell>
      <TableCell>
        <EditButton onClick={() => openNoteForm(note)} />
      </TableCell>
      <TableCell>
        <ArchiveButton
          variant={isArchived ? 'unarchive' : 'archive'}
          onClick={() => dispatch((isArchived ? unarchive : archive)(note.id))}
        />
      </TableCell>
      <TableCell>
        <DeleteButton onClick={() => dispatch(remove(note.id))} />
      </TableCell>
    </TableRow>
  );
};

export default NoteRow;
