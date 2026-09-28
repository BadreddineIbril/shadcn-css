import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";

type WithClassName<T> = Omit<T, "className"> & { className?: string };

function Sheet({ ...props }: ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: WithClassName<ComponentProps<typeof SheetPrimitive.Backdrop>>) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={`${styles["sheet-overlay"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: WithClassName<ComponentProps<typeof SheetPrimitive.Popup>> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={`${styles["sheet-content"]} ${className ?? ""}`.trim()}
        {...props}>
        {children}
        <SheetPrimitive.Close className={styles["sheet-close"]}>
          <XIcon />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={`${styles["sheet-header"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={`${styles["sheet-footer"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: WithClassName<ComponentProps<typeof SheetPrimitive.Title>>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={`${styles["sheet-title"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: WithClassName<ComponentProps<typeof SheetPrimitive.Description>>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={`${styles["sheet-description"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
