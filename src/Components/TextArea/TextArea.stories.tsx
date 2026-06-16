import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
    title: "Componentes/TextArea",
    component: TextArea,
}

export default meta;

type Story = StoryObj<typeof TextArea>;

// Estados do textarea
export const Default: Story = {
    args: {
        label: "Digite um texto:",
        id: "texto",
        placeholder: "Digite algo...",
        rows: 5,
    }
}