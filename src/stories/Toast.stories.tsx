import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Toast } from '@/components/Toast';

type ToastProps = ComponentProps<typeof Toast>;

const meta: Meta<ToastProps> = {
  component: Toast,

  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['success', 'error', 'info', 'warning'],
      control: { type: 'select' },
    },
  },
  args: {
    message: 'This is a toast message.',
    variant: 'info',
  },
};

export default meta;

type Story = StoryObj<ToastProps>;

const withClose = (args: ToastProps) => {
  const [{}, updateArgs] = useArgs();
  return <Toast {...args} onClose={() =>{}} className='max-w-[400px]' />;
};

export const Success: Story = {
  args: {
    message: 'success',
    variant: 'success',
  },
  render: withClose,
};

export const Error: Story = {
  args: {
    message: 'error',
    variant: 'error',
  },
  render: withClose,
};

export const Info: Story = {
  args: {
    message: 'info',
    variant: 'info',
  },
  render: withClose,
};

export const Warning: Story = {
  args: {
    message: 'warning',
    variant: 'warning',
  },
  render: withClose,
};
