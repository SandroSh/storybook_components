import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputField } from "@/components/InputField";



type InputStoryProps = ComponentProps<typeof InputField>;
const meta: Meta<InputStoryProps> = {
    component: InputField,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['default', 'outlined', 'filled', 'underline', 'ghost', 'flushed', 'unstyled'],
            control: {
                type: 'select'
            }
        },
        type: {
            options: ['text', 'password', 'email', 'number'],
            control: {
                type: 'select'
            }
        },
        size: {
            options: ['sm', 'md', 'lg', 'xl'],
            control: {
                type: 'select'
            }
        },
        disabled: {
            options: [true, false],
            control: {
                type: 'select'
            }
        },
    },
    args: {
        // onChange: fn()
    }
};

export default meta;

// Individual Story
type Story = StoryObj<InputStoryProps>;
export const Primary: Story = {
    args: {
        variant: 'default',
        size: 'md',
        id: 'input-id',
        name: 'input-name',
        placeholder: 'Email',
    },
    render: (args) => {
        // const [{ value }, updateArgs] = useArgs();

        return (
            <InputField
                {...args}
            />
        );
    },
}
export const Outlined: Story = {
    args: {
        variant: 'outlined',
        size: 'md',
        id: 'input-id',
        name: 'input-name',
        placeholder: 'Email',
    },
    render: (args) => {
        // const [{ value }, updateArgs] = useArgs();

        return (
            <InputField
                {...args}
            />
        );
    },
}
export const Filled: Story = {
    args: {
        variant: 'filled',
        size: 'md',
        id: 'input-id',
        name: 'input-name',
        placeholder: 'Email',
    },
    render: (args) => {
        // const [{ value }, updateArgs] = useArgs();
        return (
            <InputField
                {...args}
            />
        );
    },
}
export const Underline: Story = {
    args: {
        variant: 'underline',
        size: 'md',
        id: 'input-id',
        name: 'input-name',
        placeholder: 'Email',
    },
    render: (args) => {
        // const [{ value }, updateArgs] = useArgs();
        return (
            <InputField
                {...args}
            />
        );
    },
}
export const Ghost: Story = {
    args: {
        variant: 'ghost',
        size: 'md',
        id: 'input-id',
        name: 'input-name',
        placeholder: 'Email',
    },
    render: (args) => {
        // const [{ value }, updateArgs] = useArgs();
        return (
            <InputField
                {...args}
            />
        );
    },
}
export const Flushed: Story = {
    args: {
        variant: 'flushed',
        size: 'md',
        id: 'input-id',
        name: 'input-name',
        placeholder: 'Email',
    },
    render: (args) => {
        // const [{ value }, updateArgs] = useArgs();
        return (
            <InputField
                {...args}
            />
        );
    },
}
export const Unstyled: Story = {
    args: {
        variant: 'unstyled',
        size: 'md',
        id: 'input-id',
        name: 'input-name',
        placeholder: 'Email',
    },
    render: (args) => {
        // const [{ value }, updateArgs] = useArgs();
        return (
            <InputField
                {...args}
            />
        );
    },
}
