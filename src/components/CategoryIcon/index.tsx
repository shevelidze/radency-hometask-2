import React from 'react';

export interface CategoryIconProps {
  url: string;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ url }) => {
  return <img alt="Category icon" src={url} />;
};

export default CategoryIcon;
