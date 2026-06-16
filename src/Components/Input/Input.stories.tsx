import { Input } from "./Input";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Input> = {
    title: 'Componentes/Input',
    component: Input,
}

export default meta;
type Story = StoryObj<typeof Input>

// História principal: todos os testes
export const Default: Story = {
    args: {
        label: 'Nome',
        id: 'nome',
        placeholder: 'Digite seu nome...',
    }
}

// Variações do input
export const Disabled: Story = {
    args: {
        label: 'Campo desativado',
        id: 'campoDesativado',
        disabled: true,
        placeholder: 'Não é possivel clicar.',

    }
}

export const CampoIdade: Story = {
    args: {
        label: 'Idade:',
        id: 'idade',
        placeholder: 'Digite sua idade...',
        type: 'number',
    }
}