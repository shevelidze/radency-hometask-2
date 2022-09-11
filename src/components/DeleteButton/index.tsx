import React from 'react';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from './deleteIcon.svg';

const DeleteButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <IconButton {...props}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
