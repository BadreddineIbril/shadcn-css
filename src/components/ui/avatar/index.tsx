import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

function Avatar({
  className,
  ...props
}: ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={`${styles.avatar} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={`${styles["avatar-image"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={`${styles["avatar-fallback"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
