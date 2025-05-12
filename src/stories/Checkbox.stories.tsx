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
  },
};
export default meta;

type Story = StoryObj<CheckboxStoryProps>;

export const Default: Story = {
  args: {
    label: 'Accept Terms',
    size: 'md',
    checked: true,
    onChange: () => {},
  },
};

export const WithLongLabel: Story = {
  args: {
    label: 'I agree to receive marketing emails and newsletters.',
    size: 'lg',
    checked: false,
    onChange: () => {},
  },
};
