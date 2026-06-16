import type { SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";

// Seleções do option
interface SelectOption {
    label: string;
    value: string;
}

interface PropsSelect extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    id: string;
    options: SelectOption[];
}

export function Select({ label, id, options, ...rest }: PropsSelect) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select id={id} {...rest} className={styles.select}>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </>
    );
}