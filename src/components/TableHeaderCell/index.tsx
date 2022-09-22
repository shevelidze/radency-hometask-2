import React from 'react';

const TableHeaderCell: React.FC<
  React.ThHTMLAttributes<HTMLTableCellElement> & React.PropsWithChildren
> = ({ className = '', ...props }) => {
  return (
    <th
      {...props}
      className={
        'text-ellipsis overflow-hidden whitespace-nowrap px-3 py-1' +
        ' ' +
        className
      }
    />
  );
};

export default TableHeaderCell;
