import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";

function Marker({
  className,
  variant = "default",
  asChild = false,
  ...props
}: ComponentProps<"div"> & {
  variant?: "default" | "separator" | "border";
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="marker"
      data-variant={variant}
      className={`${styles.marker} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function MarkerIcon({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-icon"
      aria-hidden="true"
      className={`${styles["marker-icon"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function MarkerContent({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-content"
      className={`${styles["marker-content"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export { Marker, MarkerIcon, MarkerContent };
