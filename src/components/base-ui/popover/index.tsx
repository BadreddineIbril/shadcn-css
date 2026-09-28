import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

type WithClassName<T> = Omit<T, "className"> & { className?: string };

function Popover({ ...props }: ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}: ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  side = "bottom",
  align = "center",
  sideOffset = 4,
  alignOffset = 0,
  ...props
}: WithClassName<ComponentProps<typeof PopoverPrimitive.Popup>> &
  Pick<
    ComponentProps<typeof PopoverPrimitive.Positioner>,
    "side" | "align" | "sideOffset" | "alignOffset"
  >) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        className={styles["popover-positioner"]}>
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={`${styles["popover-content"]} ${className ?? ""}`.trim()}
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
}

export { Popover, PopoverTrigger, PopoverContent };
