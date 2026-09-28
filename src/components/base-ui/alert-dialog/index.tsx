import type { ComponentProps } from "react";
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import Button from "@/components/base-ui/button";
import styles from "./styles.module.css";

type WithClassName<T> = Omit<T, "className"> & { className?: string };

function AlertDialog({
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

function AlertDialogPortal({
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

function AlertDialogOverlay({
  className,
  ...props
}: WithClassName<ComponentProps<typeof AlertDialogPrimitive.Backdrop>>) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-overlay"
      className={`${styles["alert-dialog-overlay"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  ...props
}: WithClassName<ComponentProps<typeof AlertDialogPrimitive.Popup>>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Popup
        data-slot="alert-dialog-content"
        className={`${styles["alert-dialog-content"]} ${
          className ?? ""
        }`.trim()}
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={`${styles["alert-dialog-header"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AlertDialogFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={`${styles["alert-dialog-footer"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: WithClassName<ComponentProps<typeof AlertDialogPrimitive.Title>>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={`${styles["alert-dialog-title"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: WithClassName<ComponentProps<typeof AlertDialogPrimitive.Description>>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={`${styles["alert-dialog-description"]} ${
        className ?? ""
      }`.trim()}
      {...props}
    />
  );
}

function AlertDialogAction({
  variant,
  size,
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Close> &
  Pick<ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-action"
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  );
}

function AlertDialogCancel({
  variant = "outline",
  size,
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Close> &
  Pick<ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
