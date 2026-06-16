// Como o botão deve se comportar visualmente
import styles from "./Button.module.css";

interface PropriedadesBotao {
    descricao: string;
    variant?: 'primary' | 'secondary'; // Variant: serve para dizer qual é o estilo do componente
    isDisabled?: boolean;
    onClick?: () => void;
}

export function Button({ descricao, variant = 'primary', isDisabled, onClick }: PropriedadesBotao) {
    // Montando as classes dinamicamente
    const classname = `${styles.botao} ${variant === 'primary' ? styles.primary : styles.secondary}`;

    return (
        <button className={classname} disabled={isDisabled} onClick={onClick}>{descricao}</button>
    );
}