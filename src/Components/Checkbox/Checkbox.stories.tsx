import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    title: 'Componentes/Checkbox',
    component: Checkbox,
}

export default meta;

type Story = StoryObj<typeof Checkbox>;

// Estados do checkbox
export const Default: Story = {
    args: {
        label: "Você é maior de idade?",
    }
}

export const Checked: Story = {
    args: {
        label: "Checkbox marcado.",
        checked: true,
    }
}

export const Disabled: Story = {
    args: {
        label: "Checkbox desmarcado.",
        checked: false,
    }
}