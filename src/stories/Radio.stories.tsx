import RadioButton from '@/components/Radio/Radio';
import { Meta, StoryObj } from '@storybook/react';

import { ComponentProps, useState } from 'react';

type Props = ComponentProps<typeof RadioButton>;

const meta: Meta<Props> = {
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'filled', 'outline'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
};
export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    id: 'radio-1',
    name: 'example',
    value: 'one',
    variant: 'default',
    size: 'md',
  },
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <RadioButton
        {...args}
        checked={checked}
        onChange={() => setChecked(true)}
      />
    );
  },
};

export const Filled: Story = {
  args: {
    id: 'radio-2',
    name: 'example',
    value: 'two',
    variant: 'filled',
    size: 'md',
    checked: false,
    onChange: () => {},
  },
};

export const Outline: Story = {
  args: {
    id: 'radio-3',
    name: 'example',
    value: 'three',
    variant: 'outline',
    size: 'md',
    checked: false,
    onChange: () => {},
  },
};
