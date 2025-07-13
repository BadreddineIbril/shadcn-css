import type { ComponentProps } from "react";
import styles from "./styles.module.css";
import * as LabelPrimitive from "@radix-ui/react-label";

function Label({ ...props }: ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      {...props}
      className={`${styles.label} ${props.className ?? ""}`.trim()}
    />
  );
}

export default Label;
