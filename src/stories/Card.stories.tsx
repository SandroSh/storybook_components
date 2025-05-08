import { Card } from "@/components/Card";
import { InputField } from "@/components/InputField";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type CardStoryProps = ComponentProps<typeof Card>;


const meta: Meta<CardStoryProps>  = {
    component: Card,
    tags:['autodocs'],
    argTypes: {
        variant:{
            options:['basic', 'outlined', 'elevated', 'clickable'],
            control:{
                type: 'select'
            }
        },
        size:{
            options:['sm', 'md', 'lg'],
            control:{
                type:'select'
            }
        }
    }
}
export default meta;

type Story = StoryObj<CardStoryProps>;

export const Basic:Story = {
    args: {
        variant: 'basic',
        size: 'md',
        children: (
          <>
            <h2 className="text-lg font-bold mb-2">Basic Card</h2>
            <p>This is a basic card with some example content.</p>
          </>
        ),
      },
};