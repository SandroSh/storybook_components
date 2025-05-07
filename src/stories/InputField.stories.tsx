import { fn } from '@storybook/test'
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputField } from "@/components/InputField";
import { useArgs } from '@storybook/preview-api';
type InputStoryProps = ComponentProps<typeof InputField>;

const meta: Meta<InputStoryProps> = {
    component: InputField,
    argTypes: {
        variant: {
            options: ['default', 'outlined', 'filled'],
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
        onChange: fn()
    }
};

export default meta;

// Individual Story
type Story = StoryObj<InputStoryProps>;
export const Primary: Story = {
    args: {
        variant: 'filled',
        size: 'md',
        id: 'input-id',
        name: 'input-name',
        placeholder: 'Email',
    },
    render: (args) => {
        const [{ value }, updateArgs] = useArgs();

        return (
            <InputField
                {...args}
                value={value}
                onChange={(val) => updateArgs({ value: val })}
            />
        );
    },
}
