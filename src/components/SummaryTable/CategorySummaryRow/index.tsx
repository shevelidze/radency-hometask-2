import React from 'react';
import categories from '../../../configs/categories';
import CategoryIcon from '../../CategoryIcon';
import TableRow from '../../TableRow';
import TableCell from '../../TableCell';
import { useAppSelector } from '../../../redux/hooks';
import {
  Note,
  selectActiveNotes,
  selectArchivedNotes,
} from '../../../redux/slices/notes';

export interface CategorySummaryRowProps {
  categoryIndex: number;
}

const CategorySummaryRow: React.FC<CategorySummaryRowProps> = ({
  categoryIndex,
}) => {
  const activeNotes = useAppSelector(selectActiveNotes);
  const archivedNotes = useAppSelector(selectArchivedNotes);

  const noteHasNeededCategory = (note: Note) =>
    note.categoryIndex === categoryIndex;

  const category = categories[categoryIndex];
  const activeNotesNumber = activeNotes.filter(noteHasNeededCategory).length;
  const archivedNotesNumber = archivedNotes.filter(
    noteHasNeededCategory
  ).length;

  return (
    <TableRow>
      <TableCell>
        <CategoryIcon url={category.iconUrl} />
      </TableCell>
      <TableCell>{category.name}</TableCell>
      <TableCell>{activeNotesNumber}</TableCell>
      <TableCell>{archivedNotesNumber}</TableCell>
    </TableRow>
  );
};

export default CategorySummaryRow;
