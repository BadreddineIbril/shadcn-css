import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

type WithClassName<T> = Omit<T, "className"> & { className?: string };

function TooltipProvider({
  delay = 0,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  );
}

function Tooltip({ ...props }: ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

// Radix adds the arrow height to sideOffset; 10 keeps the same spacing
function TooltipContent({
  className,
  side = "top",
  align = "center",
  sideOffset = 10,
  alignOffset = 0,
  children,
  ...props
}: WithClassName<ComponentProps<typeof TooltipPrimitive.Popup>> &
  Pick<
    ComponentProps<typeof TooltipPrimitive.Positioner>,
    "side" | "align" | "sideOffset" | "alignOffset"
  >) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        className={styles["tooltip-positioner"]}>
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={`${styles["tooltip-content"]} ${className ?? ""}`.trim()}
          {...props}>
          {children}
          <TooltipPrimitive.Arrow className={styles["tooltip-arrow"]} />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
