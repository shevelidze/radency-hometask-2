import React from 'react';
import TableRow from '../../TableRow';
import TableCell from '../../TableCell';
import EditButton from '../../EditButton';
import DeleteButton from '../../DeleteButton';
import ArchiveButton from '../../ArchiveButton';
import CategoryIcon from '../../CategoryIcon';

export interface NoteRowProps {
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  categoryIconUrl: string;
}

const NoteRow: React.FC<NoteRowProps> = ({
  name,
  created,
  category,
  content,
  dates,
  categoryIconUrl,
}) => {
  return (
    <TableRow>
      <TableCell>
        <CategoryIcon url={categoryIconUrl} />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{created}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{content}</TableCell>
      <TableCell>{dates}</TableCell>
      <TableCell>
        <EditButton />
      </TableCell>
      <TableCell>
        <ArchiveButton variant="archive" />
      </TableCell>
      <TableCell>
        <DeleteButton />
      </TableCell>
    </TableRow>
  );
};

export default NoteRow;
