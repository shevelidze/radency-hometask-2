import React from 'react';
import styles from './Button.module.css';

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren
>((props, ref) => {
  return <button {...props} ref={ref} className={styles.button} />;
});

export default Button;
