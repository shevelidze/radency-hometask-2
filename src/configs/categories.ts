export interface Category {
  name: string;
  iconUrl: string;
}

const categories: Category[] = [
  {
    name: 'Task',
    iconUrl: '/images/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg',
  },
  {
    name: 'Random thought',
    iconUrl: '/images/psychology_FILL0_wght400_GRAD0_opsz48.svg',
  },
  {
    name: 'Idea',
    iconUrl: '/images/emoji_objects_FILL0_wght400_GRAD0_opsz48.svg',
  },
];

export default categories;
