import type { TextareaHTMLAttributes } from "react";
import styles from "./TextArea.module.css";

interface PropsTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    id: string;
    rows?: number;
}

export function TextArea({ label, id, rows, ...rest }: PropsTextArea) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} rows={rows} className={styles.textarea} {...rest}></textarea>
        </>
    );
}