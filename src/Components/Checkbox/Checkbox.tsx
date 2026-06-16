import type { InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

interface PropsCheckbox extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function Checkbox({ label, ...rest }: PropsCheckbox) {
    return (
        <>
            <label>{label}</label>
            <input type="checkbox" className={styles.checkbox} {...rest} />
        </>
    );
}