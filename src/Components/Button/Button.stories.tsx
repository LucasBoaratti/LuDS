// Arquivo story que testa todas as variações do botão, sem precisar rodar o app
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

// Configurando o grupo do componente no menu do storybook
const meta: Meta<typeof Button> = {
    title: 'Componentes/Button',
    component: Button,
}

export default meta;

// Usando StoryObj para definir o tipo de cada variação
type Story = StoryObj<typeof Button>;

// Criando os estados do componente botão
export const Primary: Story = {
    args: {
        descricao: 'Botão Primário',
        variant: 'primary',
        isDisabled: false,
    }
}

export const Secondary: Story = {
    args: {
        descricao: 'Botão Secundário',
        variant: 'secondary',
        isDisabled: false,
    }
}

export const Disabled: Story = {
    args: {
        descricao: 'Botão Desativado',
        variant: 'primary',
        isDisabled: true,
    }
}