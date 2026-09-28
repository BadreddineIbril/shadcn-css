import styles from "./styles.module.css";
import type { ComponentProps } from "react";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={`${styles.textarea} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export default Textarea;
