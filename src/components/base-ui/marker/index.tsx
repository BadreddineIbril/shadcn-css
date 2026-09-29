import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

function Marker({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"div"> & {
  variant?: "default" | "separator" | "border";
}) {
  return useRender({
    defaultTagName: "div",
    render,
    state: { slot: "marker", variant },
    props: mergeProps<"div">(
      { className: `${styles.marker} ${className ?? ""}`.trim() },
      props
    ),
  });
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
