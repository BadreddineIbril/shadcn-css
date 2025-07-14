import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

function Avatar({ ...props }: ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      {...props}
      className={`${styles.avatar} ${props.className ?? ""}`.trim()}
    />
  );
}

function AvatarImage({
  ...props
}: ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      {...props}
      className={`${styles["avatar-image"]} ${props.className ?? ""}`.trim()}
    />
  );
}

function AvatarFallback({
  ...props
}: ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      {...props}
      className={`${styles["avatar-fallback"]} ${props.className ?? ""}`.trim()}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
