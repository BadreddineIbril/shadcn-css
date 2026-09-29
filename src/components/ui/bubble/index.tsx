import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";

function BubbleGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={`${styles["bubble-group"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function Bubble({
  variant = "default",
  align = "start",
  className,
  ...props
}: ComponentProps<"div"> & {
  variant?:
    | "default"
    | "secondary"
    | "muted"
    | "tinted"
    | "outline"
    | "ghost"
    | "destructive";
  align?: "start" | "end";
}) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      data-align={align}
      className={`${styles.bubble} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function BubbleContent({
  asChild = false,
  className,
  ...props
}: ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="bubble-content"
      className={`${styles["bubble-content"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function BubbleReactions({
  side = "bottom",
  align = "end",
  className,
  ...props
}: ComponentProps<"div"> & {
  align?: "start" | "end";
  side?: "top" | "bottom";
}) {
  return (
    <div
      data-slot="bubble-reactions"
      data-align={align}
      data-side={side}
      className={`${styles["bubble-reactions"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export { BubbleGroup, Bubble, BubbleContent, BubbleReactions };
