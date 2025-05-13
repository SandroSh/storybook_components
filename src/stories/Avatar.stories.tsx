import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/components/Avatar";


type AvatarStoryProps = ComponentProps<typeof Avatar>;

const meta: Meta<AvatarStoryProps> = {
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    variant: {
      options: ["default", "rounded", "bordered", "shadowed"],
      control: { type: "select" },
    },
    status: {
      options: ["online", "offline", "busy", "away"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<AvatarStoryProps>;

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/100?img=1",
    size: "md",
    variant: "default",
    status: "online",
  },
  render: (args) => <Avatar {...args} />,
};

export const Rounded: Story = {
  args: {
    src: "https://i.pravatar.cc/100?img=1",
    size: "md",
    variant: "rounded",
    status: "offline",
  },
  render: (args) => <Avatar {...args} />,
};

export const Bordered: Story = {
  args: {
    src: "https://i.pravatar.cc/100?img=1",
    size: "md",
    variant: "bordered",
    status: "busy",
  },
  render: (args) => <Avatar {...args} />,
};

export const Shadowed: Story = {
  args: {
    src: "https://i.pravatar.cc/100?img=1",
    size: "md",
    variant: "shadowed",
    status: "away",
  },
  render: (args) => <Avatar {...args} />,
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      {(["sm", "md", "lg", "xl"] as const).map((size, i) => (
        <Avatar
          key={size}
          src={`https://i.pravatar.cc/100?img=1`}
          size={size}
          variant="default"
          status="online"
        />
      ))}
    </div>
  ),
};
