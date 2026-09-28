import styles from "./styles.module.css";
import { createContext, useContext, type ComponentProps } from "react";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

type WithClassName<T> = Omit<T, "className"> & { className?: string };
type DrawerDirection = "top" | "bottom" | "left" | "right";

const SWIPE_DIRECTIONS = {
  top: "up",
  bottom: "down",
  left: "left",
  right: "right",
} as const;

const DrawerContext = createContext<DrawerDirection>("bottom");

function Drawer({
  direction = "bottom",
  ...props
}: ComponentProps<typeof DrawerPrimitive.Root> & {
  direction?: DrawerDirection;
}) {
  return (
    <DrawerContext.Provider value={direction}>
      <DrawerPrimitive.Root
        data-slot="drawer"
        swipeDirection={SWIPE_DIRECTIONS[direction]}
        {...props}
      />
    </DrawerContext.Provider>
  );
}

function DrawerTrigger({
  ...props
}: ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({
  ...props
}: ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({
  ...props
}: ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
  className,
  ...props
}: WithClassName<ComponentProps<typeof DrawerPrimitive.Backdrop>>) {
  return (
    <DrawerPrimitive.Backdrop
      data-slot="drawer-overlay"
      className={`${styles["drawer-overlay"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function DrawerContent({
  className,
  children,
  ...props
}: WithClassName<ComponentProps<typeof DrawerPrimitive.Popup>>) {
  const direction = useContext(DrawerContext);

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Viewport
        data-direction={direction}
        className={styles["drawer-viewport"]}>
        <DrawerPrimitive.Popup
          data-slot="drawer-content"
          data-direction={direction}
          className={`${styles["drawer-content"]} ${className ?? ""}`.trim()}
          {...props}>
          <div className={styles["drawer-handle"]} />
          <DrawerPrimitive.Content className={styles["drawer-body"]}>
            {children}
          </DrawerPrimitive.Content>
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={`${styles["drawer-header"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={`${styles["drawer-footer"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function DrawerTitle({
  className,
  ...props
}: WithClassName<ComponentProps<typeof DrawerPrimitive.Title>>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={`${styles["drawer-title"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: WithClassName<ComponentProps<typeof DrawerPrimitive.Description>>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={`${styles["drawer-description"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
