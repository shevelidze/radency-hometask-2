import React from 'react';
import styles from './IconButton.module.css';

const IconButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren
>((props, ref) => {
  return <button {...props} ref={ref} className={styles.button} />;
});

export default IconButton;
