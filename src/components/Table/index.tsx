import React from 'react';

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
    <table {...props} className={'w-full border-collapse' + ' ' + className}>
      <thead>{head}</thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
