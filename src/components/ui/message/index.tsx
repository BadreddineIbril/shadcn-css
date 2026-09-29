import styles from "./styles.module.css";
import type { ComponentProps } from "react";

function MessageGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="message-group"
      className={`${styles["message-group"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function Message({
  className,
  align = "start",
  ...props
}: ComponentProps<"div"> & { align?: "start" | "end" }) {
  return (
    <div
      data-slot="message"
      data-align={align}
      className={`${styles.message} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function MessageAvatar({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="message-avatar"
      className={`${styles["message-avatar"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function MessageContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="message-content"
      className={`${styles["message-content"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function MessageHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="message-header"
      className={`${styles["message-header"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function MessageFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="message-footer"
      className={`${styles["message-footer"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export {
  MessageGroup,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
};
