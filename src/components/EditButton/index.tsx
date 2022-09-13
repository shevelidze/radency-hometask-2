import React from 'react';
import IconButton from '../IconButton';
import { ReactComponent as EditIcon } from './editIcon.svg';

const EditButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <IconButton {...props}>
      <EditIcon />
    </IconButton>
  );
};

export default EditButton;
