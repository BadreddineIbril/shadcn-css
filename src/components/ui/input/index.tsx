import styles from "./styles.module.css";
import type { ComponentProps } from "react";

function Input({ ...props }: ComponentProps<"input">) {
  return (
    <input
      {...props}
      className={`${styles.input} ${props.className ?? ""}`.trim()}
    />
  );
}

export default Input;
