import styles from "./styles.module.css";
import { Button as ButtonPrimitive } from "@base-ui/react/button";

type ButtonProps = Omit<ButtonPrimitive.Props, "className"> & {
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "link";
  size?: "sm" | "md" | "lg" | "icon" | "icon-sm" | "icon-lg";
};

function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-size={size}
      data-variant={variant}
      className={`${styles.button} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export default Button;
