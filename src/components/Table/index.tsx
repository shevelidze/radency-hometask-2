import React from 'react';
import ClassList from '../../utils/classList';

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    React.PropsWithChildren {
  head?: React.ReactNode;
}

const Table: React.FC<TableProps> = ({
  children,
  head,
  className,
  ...props
}) => {
  return (
    <table
      {...props}
      className={new ClassList('w-full border-collapse', className).compose()}
    >
      <thead>{head}</thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
