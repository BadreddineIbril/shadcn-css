import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";

type ToggleProps = Omit<ComponentProps<typeof TogglePrimitive>, "className"> & {
  className?: string;
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
    <TogglePrimitive
      data-slot="toggle"
      data-size={size}
      data-variant={variant}
      className={`${styles.toggle} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export default Toggle;
