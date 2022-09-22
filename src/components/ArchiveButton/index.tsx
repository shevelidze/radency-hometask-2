import React from 'react';
import IconButton from '../IconButton';
import { ReactComponent as ArchiveIcon } from './archiveIcon.svg';
import { ReactComponent as UnarchiveIcon } from './unarchiveIcon.svg';

export interface ArchiveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  light?: boolean;
  variant: 'archive' | 'unarchive';
}

const ArchiveButton: React.FC<ArchiveButtonProps> = ({
  light,
  variant,
  ...props
}) => {
  const iconClassName = light ? 'fill-white' : '';
  return (
    <IconButton {...props}>
      {variant === 'archive' ? (
        <ArchiveIcon className={iconClassName} />
      ) : (
        <UnarchiveIcon className={iconClassName} />
      )}
    </IconButton>
  );
};

export default ArchiveButton;
