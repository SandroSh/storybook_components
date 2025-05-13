import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { Modal } from "@/components/Modal";

type ModalProps = ComponentProps<typeof Modal>;

const meta: Meta<ModalProps> = {
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    variant: {
      options: ['default', 'outlined', 'filled', 'ghost', 'unstyled'],
      control: { type: 'select' },
    },
    isOpen: {
      control: { type: 'boolean' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '500px', backgroundColor: '#f2f2f2' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    isOpen: true,
    size: 'md',
    variant: 'default',
    onClose: () => console.log("Modal closed"),
  },
  render: (args, { updateArgs }) => {
    const [{ isOpen }, setArgs] = useArgs();

    const handleClose = () => {
      setArgs({ isOpen: false });
    };

    return (
      <Modal {...args} isOpen={isOpen} onClose={handleClose}>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Modal Title</h2>
          <p className="mt-2 text-sm">This is modal content.</p>
        </div>
      </Modal>
    );
  }
};

export default meta;

type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Unstyled: Story = {
  args: {
    variant: 'unstyled',
  },
};
