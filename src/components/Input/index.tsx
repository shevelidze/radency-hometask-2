import React from 'react';
import ClassList from '../../utils/classList';

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

const Input: React.FC<InputProps> = ({ tag, className, ...props }) => {
  const classList = new ClassList(
    'border-solid border-b-2 border-gray-300',
    'outline-none focus:border-gray-600',
    'p-3',
    'transition',
    className
  );

  return React.createElement(tag, {
    ...props,
    className: classList.compose(),
  });
};

export default Input;
