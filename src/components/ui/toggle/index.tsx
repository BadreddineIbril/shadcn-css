import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

type ToggleProps = ComponentProps<typeof TogglePrimitive.Root> & {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
};

function Toggle({
  className,
  variant = "default",
  size = "md",
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive.Root
      data-size={size}
      data-variant={variant}
      className={`${styles.toggle} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export default Toggle;
