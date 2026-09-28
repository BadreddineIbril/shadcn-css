import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import styles from "./styles.module.css";

type WithClassName<T> = Omit<T, "className"> & { className?: string };
type PositionerProps = Pick<
  ComponentProps<typeof ContextMenuPrimitive.Positioner>,
  "side" | "sideOffset" | "align" | "alignOffset"
>;

function ContextMenu({
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root {...props} />;
}

function ContextMenuTrigger({
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  );
}

function ContextMenuPortal({
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

function ContextMenuContent({
  className,
  sideOffset = 0,
  align = "start",
  alignOffset = 0,
  side,
  ...props
}: WithClassName<ComponentProps<typeof ContextMenuPrimitive.Popup>> &
  PositionerProps) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        side={side}
        className={styles["context-menu-positioner"]}>
        <ContextMenuPrimitive.Popup
          data-slot="context-menu-content"
          className={`${styles["context-menu-content"]} ${className ?? ""}`.trim()}
          {...props}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  );
}

function ContextMenuGroup({
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: WithClassName<ComponentProps<typeof ContextMenuPrimitive.Item>> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={`${styles["context-menu-item"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function ContextMenuCheckboxItem({
  className,
  children,
  ...props
}: WithClassName<ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={`${styles["context-menu-checkbox-item"]} ${
        className ?? ""
      }`.trim()}
      {...props}>
      <span>
        <ContextMenuPrimitive.CheckboxItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

function ContextMenuRadioGroup({
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: WithClassName<ComponentProps<typeof ContextMenuPrimitive.RadioItem>>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={`${styles["context-menu-radio-item"]} ${className ?? ""}`.trim()}
      {...props}>
      <span>
        <ContextMenuPrimitive.RadioItemIndicator>
          <CircleIcon />
        </ContextMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

// A plain element so it can also be used outside of a group
function ContextMenuLabel({
  className,
  inset,
  ...props
}: ComponentProps<"div"> & {
  inset?: boolean;
}) {
  return (
    <div
      data-slot="context-menu-label"
      data-inset={inset}
      className={`${styles["context-menu-label"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: WithClassName<ComponentProps<typeof ContextMenuPrimitive.Separator>>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={`${styles["context-menu-separator"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function ContextMenuShortcut({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={`${styles["context-menu-shortcut"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function ContextMenuSub({
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.SubmenuRoot>) {
  return <ContextMenuPrimitive.SubmenuRoot {...props} />;
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: WithClassName<ComponentProps<typeof ContextMenuPrimitive.SubmenuTrigger>> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={`${styles["context-menu-sub-trigger"]} ${className ?? ""}`.trim()}
      {...props}>
      {children}
      <ChevronRightIcon />
    </ContextMenuPrimitive.SubmenuTrigger>
  );
}

function ContextMenuSubContent({
  className,
  sideOffset = 0,
  alignOffset = 0,
  ...props
}: WithClassName<ComponentProps<typeof ContextMenuPrimitive.Popup>> &
  PositionerProps) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        className={styles["context-menu-positioner"]}>
        <ContextMenuPrimitive.Popup
          data-slot="context-menu-sub-content"
          className={`${styles["context-menu-sub-content"]} ${
            className ?? ""
          }`.trim()}
          {...props}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
};
