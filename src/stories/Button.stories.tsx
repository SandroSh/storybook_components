import { Button } from "@/components/Button";
import { fn } from '@storybook/test'
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
  // argTypes is for selection of variant,size types in this case
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'transparent'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['sm', 'md', 'xl'],
      control: {
        type: 'select'
      }
    },
  },
  args: {
    onClick: fn()
  }
};

export default meta;

// Individual Story
type Story = StoryObj<StoryProps>;
export const Primary: Story = {
  args: {
    buttonText: 'test button',
    variant: 'primary',
    size: 'md'
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>
  }

};
export const Secondary: Story = {
  args: {
    buttonText: 'test button',
    variant: 'secondary',
    size: 'md',
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>
  }

};
export const Transparent: Story = {
  args: {
    buttonText: 'test button',
    variant: 'transparent',
    size: 'md',
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>
  }

};

