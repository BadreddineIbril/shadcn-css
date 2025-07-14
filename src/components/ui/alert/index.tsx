import styles from "./styles.module.css";
import type { ComponentProps } from "react";

type AlertProps = ComponentProps<"div"> & {
  variant?: "default" | "destructive";
};

function Alert({ variant = "default", ...props }: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      {...props}
      className={`${styles.alert} ${props.className ?? ""}`.trim()}
      data-variant={variant}
    />
  );
}

function AlertTitle({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      {...props}
      className={`${styles["alert-title"]} ${props.className ?? ""}`.trim()}
    />
  );
}

function AlertDescription({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      {...props}
      className={`${styles["alert-description"]} ${
        props.className ?? ""
      }`.trim()}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
