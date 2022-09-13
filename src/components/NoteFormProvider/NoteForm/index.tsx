import React from 'react';
import Button from '../../Button';
import styles from './NoteForm.module.css';
import Input from '../../Input';
import categories from '../../../configs/categories';

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
    <form {...props} className={styles.noteForm}>
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
