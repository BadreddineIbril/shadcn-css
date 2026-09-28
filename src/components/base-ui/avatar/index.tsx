import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

function Avatar({
  className,
  ...props
}: Omit<ComponentProps<typeof AvatarPrimitive.Root>, "className"> & {
  className?: string;
}) {
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
}: Omit<ComponentProps<typeof AvatarPrimitive.Image>, "className"> & {
  className?: string;
}) {
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
}: Omit<ComponentProps<typeof AvatarPrimitive.Fallback>, "className"> & {
  className?: string;
}) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={`${styles["avatar-fallback"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
