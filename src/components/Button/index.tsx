import React from 'react';

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren
> = (props) => {
  return <button {...props} className="text-white bg-gray-500 p-3" />;
};

export default Button;
