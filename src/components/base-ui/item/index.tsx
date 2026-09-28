import type { ComponentProps } from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import Separator from "@/components/base-ui/separator";
import styles from "./styles.module.css";

function ItemGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={`${styles["item-group"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function ItemSeparator({
  className,
  ...props
}: ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={`${styles["item-separator"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function Item({
  className,
  variant = "default",
  size = "default",
  render,
  ...props
}: useRender.ComponentProps<"div"> & {
  variant?: "default" | "outline" | "muted";
  size?: "default" | "sm";
}) {
  return useRender({
    defaultTagName: "div",
    render,
    state: { slot: "item", variant, size },
    props: mergeProps<"div">(
      { className: `${styles.item} ${className ?? ""}`.trim() },
      props
    ),
  });
}

function ItemMedia({
  className,
  variant = "default",
  ...props
}: ComponentProps<"div"> & { variant?: "default" | "icon" | "image" }) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={`${styles["item-media"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function ItemContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={`${styles["item-content"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function ItemTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={`${styles["item-title"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function ItemDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={`${styles["item-description"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function ItemActions({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={`${styles["item-actions"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function ItemHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={`${styles["item-header"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function ItemFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={`${styles["item-footer"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
};
