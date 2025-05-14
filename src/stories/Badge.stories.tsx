import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/Badge';


type BadgeStoryProps = ComponentProps<typeof Badge>;

const meta: Meta<BadgeStoryProps> = {
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    variant: {
      options: ['solid', 'subtle', 'outline'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<BadgeStoryProps>;

export const Solid: Story = {
  args: {
    text: 'Badge',
    size: 'md',
    variant: 'solid',
  },
  render: (args:BadgeStoryProps) => <Badge {...args} />,
};

export const Subtle: Story = {
  args: {
    text: 'Badge',
    size: 'md',
    variant: 'subtle',
  },
  render: (args:BadgeStoryProps) => <Badge {...args} />,
};

export const Outline: Story = {
  args: {
    text: 'Badge',
    size: 'md',
    variant: 'outline',
  },
  render: (args:BadgeStoryProps) => <Badge {...args} />,
};

