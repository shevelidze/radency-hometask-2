export interface Category {
  name: string;
  iconUrl: string;
}

const categories: Category[] = [
  {
    name: 'Task',
    iconUrl: '/images/taskIcon.svg',
  },
  {
    name: 'Random thought',
    iconUrl: '/images/thoughtIcon.svg',
  },
  {
    name: 'Idea',
    iconUrl: '/images/ideaIcon.svg',
  },
];

export default categories;
