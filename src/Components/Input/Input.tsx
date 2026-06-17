import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

// Interface com as propriedades de um input
// InputHTMLAttributes aceita todos os atributos nativos do próprio input
interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

export function Input({ label, id, ...rest }: PropsInput) {
    return (
        <div className={styles.espacamento}>
            <label htmlFor={id}>{label}</label>
            <input id={id} className={styles.input} {...rest} />
        </div>
    );
}