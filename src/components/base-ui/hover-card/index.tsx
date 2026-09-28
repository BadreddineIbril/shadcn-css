import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";

type WithClassName<T> = Omit<T, "className"> & { className?: string };

function HoverCard({
  ...props
}: ComponentProps<typeof PreviewCardPrimitive.Root>) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({
  ...props
}: ComponentProps<typeof PreviewCardPrimitive.Trigger>) {
  return (
    <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

function HoverCardContent({
  className,
  side = "bottom",
  align = "center",
  sideOffset = 4,
  alignOffset = 0,
  ...props
}: WithClassName<ComponentProps<typeof PreviewCardPrimitive.Popup>> &
  Pick<
    ComponentProps<typeof PreviewCardPrimitive.Positioner>,
    "side" | "align" | "sideOffset" | "alignOffset"
  >) {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
      <PreviewCardPrimitive.Positioner
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        className={styles["hover-card-positioner"]}>
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className={`${styles["hover-card-content"]} ${className ?? ""}`.trim()}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
