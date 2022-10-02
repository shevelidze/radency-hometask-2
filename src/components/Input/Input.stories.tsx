import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from '.';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputText = Template.bind({});
InputText.args = {
  tag: 'input',
  placeholder: 'Placeholder',
};

export const Textarea = Template.bind({});
Textarea.args = {
  tag: 'textarea',
  placeholder: 'Placeholder',
  rows: 5,
  cols: 100,
};

export const Select: ComponentStory<typeof Input> = (args) => (
  <Input {...args}>
    <option value="1" selected>
      Option 1
    </option>
    <option value="2">Option 2</option>
  </Input>
);
Select.args = {
  tag: 'select',
};
