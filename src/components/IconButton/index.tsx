import React from 'react';

const IconButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren
> = (props) => {
  return <button {...props} className="w-5 h-5 p-0" />;
};

export default IconButton;
