import React from 'react';

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    React.PropsWithChildren {
  isHead?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({
  className = '',
  isHead = false,
  ...props
}) => {
  return (
    <tr
      {...props}
      className={
        (isHead ? 'bg-gray-500 text-white' : 'bg-gray-50 odd:bg-gray-200') +
        ' ' +
        className
      }
    />
  );
};

export default TableRow;
