import React from 'react';
import styles from './Button.module.css';

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren
> = (props) => {
  return <button {...props} className={styles.button} />;
};

export default Button;
