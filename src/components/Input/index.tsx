import React from 'react';
import styles from './Input.module.css';

interface InputInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  tag: 'input';
}

interface InputSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  tag: 'select';
}

interface InputTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  tag: 'textarea';
}

export type InputProps =
  | InputInputProps
  | InputSelectProps
  | InputTextAreaProps;

const Input: React.FC<InputProps> = ({ tag, ...props }) => {
  return React.createElement(tag, { ...props, className: styles.input });
};

export default Input;
