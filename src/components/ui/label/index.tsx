import type { ComponentProps } from "react";
import styles from "./styles.module.css";
import * as LabelPrimitive from "@radix-ui/react-label";

function Label({
  className,
  ...props
}: ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      className={`${styles.label} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export default Label;
