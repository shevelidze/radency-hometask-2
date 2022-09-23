import React from 'react';
import Button from '../../Button';
import Input from '../../Input';
import categories from '../../../configs/categories';
import ClassList from '../../../utils/classList';

export interface NoteFormProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  initialValues: {
    name: string;
    content: string;
    categoryIndex: number;
  };
}

const NoteForm: React.FC<NoteFormProps> = ({ initialValues, ...props }) => {
  return (
    <form
      {...props}
      className={new ClassList(
        'fixed left-1/2 top-1/2 flex flex-col gap-3',
        'p-6 bg-white -translate-x-1/2 -translate-y-1/2'
      ).compose()}
    >
      <Input
        tag="input"
        type="text"
        placeholder="Name"
        name="name"
        defaultValue={initialValues.name}
        required
      ></Input>
      <Input
        tag="select"
        name="categoryIndex"
        defaultValue={initialValues.categoryIndex}
      >
        {categories.map((category, categoryIndex) => (
          <option key={categoryIndex} value={categoryIndex}>
            {category.name}
          </option>
        ))}
      </Input>
      <Input
        tag="textarea"
        placeholder="Content"
        name="content"
        rows={10}
        cols={50}
        defaultValue={initialValues.content}
      ></Input>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default NoteForm;
