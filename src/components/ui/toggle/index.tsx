import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

type ToggleProps = ComponentProps<typeof TogglePrimitive.Root> & {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
};

function Toggle({ variant = "default", size = "md", ...props }: ToggleProps) {
  return (
    <TogglePrimitive.Root
      {...props}
      className={`${styles.toggle} ${props.className ?? ""}`.trim()}
      data-variant={variant}
      data-size={size}
    />
  );
}

export default Toggle;
