import React from 'react';
import styles from '../TableCell/TableCell.module.css';

const TableHeaderCell: React.FC<
  React.ThHTMLAttributes<HTMLTableCellElement> & React.PropsWithChildren
> = ({ className, ...props }) => {
  return <th {...props} className={styles.cell + ' ' + className} />;
};

export default TableHeaderCell;
