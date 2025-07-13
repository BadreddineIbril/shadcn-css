import styles from "./styles.module.css";
import type { ComponentProps } from "react";

function Textarea({ ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      {...props}
      className={`${styles.textarea} ${props.className ?? ""}`.trim()}
    />
  );
}

export default Textarea;
