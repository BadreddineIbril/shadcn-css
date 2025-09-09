import styles from "./styles.module.css";
import type { ComponentProps } from "react";

function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input className={`${styles.input} ${className ?? ""}`.trim()} {...props} />
  );
}

export default Input;
