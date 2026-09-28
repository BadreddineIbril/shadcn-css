import type { ComponentProps } from "react";
import styles from "./styles.module.css";

function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={`${styles.label} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export default Label;
