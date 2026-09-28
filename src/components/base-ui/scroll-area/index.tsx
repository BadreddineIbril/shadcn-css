import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

type WithClassName<T> = Omit<T, "className"> & { className?: string };

function ScrollArea({
  className,
  children,
  ...props
}: WithClassName<ComponentProps<typeof ScrollAreaPrimitive.Root>>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={`${styles["scroll-area"]} ${className ?? ""}`.trim()}
      {...props}>
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className={styles["scroll-area-viewport"]}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: WithClassName<ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>>) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={`${styles["scroll-area-scrollbar"]} ${className ?? ""}`.trim()}
      {...props}>
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className={styles["scroll-area-thumb"]}
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollBar };
