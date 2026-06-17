import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
    title: "Componentes/Select",
    component: Select,
}

export default meta;

type Story = StoryObj<typeof Select>;

// Estados do select
export const Default: Story = {
    args: {
        label: "Sexo:",
        id: "sexo",
        options: [
            {
                label: "Selecione...",
                value: "",
            },
            {
                label: "Masculino",
                value: "masculino",
            },
            {
                label: "Feminino",
                value: "feminino",
            },
            {
                label: "Outros",
                value: "outros",
            },
        ],
    }
}