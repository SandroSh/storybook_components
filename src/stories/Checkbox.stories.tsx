import { Checkbox } from '@/components/Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';

type CheckboxStoryProps = ComponentProps<typeof Checkbox>;

const meta: Meta<CheckboxStoryProps> = {
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' },
        },
        variant: {
            options: ['basic', 'rounded', 'outlined', 'filled'],
            control: { type: 'select' },
        },
    },
   
};
export default meta;

type Story = StoryObj<CheckboxStoryProps>;

export const Basic: Story = {
  args: {
    size: 'md',
    variant: 'basic',
  },
  render: (args) => {
    const [checked, setChecked] = useState(true);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};
export const Rounded: Story = {
  args: {
    size: 'md',
    variant: 'rounded',
  },
  render: (args) => {
    const [checked, setChecked] = useState(true);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const Outlined: Story = {
  args: {
    size: 'md',
    variant: 'outlined',
  },
  render: (args) => {
    const [checked, setChecked] = useState(true);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const Filled: Story = {
  args: {
    size: 'md',
    variant: 'filled',
  },
  render: (args) => {
    const [checked, setChecked] = useState(true);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};


