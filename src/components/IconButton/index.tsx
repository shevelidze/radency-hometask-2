import React from 'react';
import styles from './IconButton.module.css';

const IconButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren
> = (props) => {
  return <button {...props} className={styles.button} />;
};

export default IconButton;
