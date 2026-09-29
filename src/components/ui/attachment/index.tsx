import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import Button from "@/components/ui/button";
import styles from "./styles.module.css";

function Attachment({
  className,
  state = "done",
  size = "default",
  orientation = "horizontal",
  ...props
}: ComponentProps<"div"> & {
  state?: "idle" | "uploading" | "processing" | "error" | "done";
  size?: "default" | "sm" | "xs";
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      data-slot="attachment"
      data-state={state}
      data-size={size}
      data-orientation={orientation}
      className={`${styles.attachment} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AttachmentMedia({
  className,
  variant = "icon",
  ...props
}: ComponentProps<"div"> & { variant?: "icon" | "image" }) {
  return (
    <div
      data-slot="attachment-media"
      data-variant={variant}
      className={`${styles["attachment-media"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AttachmentContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-content"
      className={`${styles["attachment-content"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AttachmentTitle({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-title"
      className={`${styles["attachment-title"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AttachmentDescription({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-description"
      className={`${styles["attachment-description"]} ${
        className ?? ""
      }`.trim()}
      {...props}
    />
  );
}

function AttachmentActions({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-actions"
      className={`${styles["attachment-actions"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AttachmentAction({
  className,
  variant = "ghost",
  size = "icon-sm",
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="attachment-action"
      variant={variant}
      size={size}
      className={`${styles["attachment-action"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AttachmentTrigger({
  className,
  asChild = false,
  type,
  ...props
}: ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="attachment-trigger"
      type={asChild ? undefined : (type ?? "button")}
      className={`${styles["attachment-trigger"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AttachmentGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-group"
      className={`${styles["attachment-group"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentTrigger,
};
