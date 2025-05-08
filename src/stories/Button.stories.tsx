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
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'outlined', 'transparent', 'filled', 'link', 'danger', 'success', 'warning', 'unstyled'],
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
export const Default: Story = {
  args: {
    buttonText: 'test button',
    variant: 'default',
    size: 'md'
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>
  }

};
export const Outlined: Story = {
  args: {
    buttonText: 'test button',
    variant: 'outlined',
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

export const Filled: Story = {
  args: {
    buttonText: 'test button',
    variant: 'filled',
    size: 'md',
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>
  }

};
export const Link: Story = {
  args: {
    buttonText: 'test button',
    variant: 'link',
    size: 'md',
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>
  }

};
export const Danger: Story = {
  args: {
    buttonText: 'test button',
    variant: 'danger',
    size: 'md',
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>
  }

};
export const Success: Story = {
  args: {
    buttonText: 'test button',
    variant: 'success',
    size: 'md',
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>
  }

};
export const Warning: Story = {
  args: {
    buttonText: 'test button',
    variant: 'warning',
    size: 'md',
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>
  }

};
export const Unstyled: Story = {
  args: {
    buttonText: 'test button',
    variant: 'unstyled',
    size: 'md',
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>
  }

};
