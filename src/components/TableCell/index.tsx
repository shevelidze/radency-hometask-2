import React from 'react';

const TableCell: React.FC<
  React.TdHTMLAttributes<HTMLTableCellElement> & React.PropsWithChildren
> = ({ className = '', ...props }) => {
  return (
    <td
      {...props}
      className={
        'text-ellipsis overflow-hidden whitespace-nowrap text-gray-600 px-3 py-1' +
        ' ' +
        className
      }
    />
  );
};

export default TableCell;
