import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import styles from "./styles.module.css";

type WithClassName<T> = Omit<T, "className"> & { className?: string };
type PositionerProps = Pick<
  ComponentProps<typeof MenuPrimitive.Positioner>,
  "side" | "sideOffset" | "align" | "alignOffset"
>;

function Menubar({
  className,
  ...props
}: WithClassName<ComponentProps<typeof MenubarPrimitive>>) {
  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={`${styles.menubar} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function MenubarMenu({ ...props }: ComponentProps<typeof MenuPrimitive.Root>) {
  return <MenuPrimitive.Root {...props} />;
}

function MenubarTrigger({
  className,
  ...props
}: WithClassName<ComponentProps<typeof MenuPrimitive.Trigger>>) {
  return (
    <MenuPrimitive.Trigger
      data-slot="menubar-trigger"
      className={`${styles["menubar-trigger"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function MenubarPortal({
  ...props
}: ComponentProps<typeof MenuPrimitive.Portal>) {
  return <MenuPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

function MenubarContent({
  className,
  sideOffset = 8,
  align = "start",
  alignOffset = -4,
  side,
  ...props
}: WithClassName<ComponentProps<typeof MenuPrimitive.Popup>> &
  PositionerProps) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        side={side}
        className={styles["menubar-positioner"]}>
        <MenuPrimitive.Popup
          data-slot="menubar-content"
          className={`${styles["menubar-content"]} ${className ?? ""}`.trim()}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

function MenubarGroup({
  ...props
}: ComponentProps<typeof MenuPrimitive.Group>) {
  return <MenuPrimitive.Group data-slot="menubar-group" {...props} />;
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: WithClassName<ComponentProps<typeof MenuPrimitive.Item>> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <MenuPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={`${styles["menubar-item"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function MenubarCheckboxItem({
  className,
  children,
  ...props
}: WithClassName<ComponentProps<typeof MenuPrimitive.CheckboxItem>>) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={`${styles["menubar-checkbox-item"]} ${className ?? ""}`.trim()}
      {...props}>
      <span>
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

function MenubarRadioGroup({
  ...props
}: ComponentProps<typeof MenuPrimitive.RadioGroup>) {
  return (
    <MenuPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  );
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: WithClassName<ComponentProps<typeof MenuPrimitive.RadioItem>>) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={`${styles["menubar-radio-item"]} ${className ?? ""}`.trim()}
      {...props}>
      <span>
        <MenuPrimitive.RadioItemIndicator>
          <CircleIcon />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
}

// A plain element so it can also be used outside of a group
function MenubarLabel({
  className,
  inset,
  ...props
}: ComponentProps<"div"> & {
  inset?: boolean;
}) {
  return (
    <div
      data-slot="menubar-label"
      data-inset={inset}
      className={`${styles["menubar-label"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function MenubarSeparator({
  className,
  ...props
}: WithClassName<ComponentProps<typeof MenuPrimitive.Separator>>) {
  return (
    <MenuPrimitive.Separator
      data-slot="menubar-separator"
      className={`${styles["menubar-separator"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function MenubarShortcut({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={`${styles["menubar-shortcut"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function MenubarSub({
  ...props
}: ComponentProps<typeof MenuPrimitive.SubmenuRoot>) {
  return <MenuPrimitive.SubmenuRoot {...props} />;
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: WithClassName<ComponentProps<typeof MenuPrimitive.SubmenuTrigger>> & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={`${styles["menubar-sub-trigger"]} ${className ?? ""}`.trim()}
      {...props}>
      {children}
      <ChevronRightIcon />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function MenubarSubContent({
  className,
  sideOffset = 0,
  alignOffset = 0,
  ...props
}: WithClassName<ComponentProps<typeof MenuPrimitive.Popup>> &
  PositionerProps) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        className={styles["menubar-positioner"]}>
        <MenuPrimitive.Popup
          data-slot="menubar-sub-content"
          className={`${styles["menubar-sub-content"]} ${
            className ?? ""
          }`.trim()}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarPortal,
  MenubarContent,
  MenubarGroup,
  MenubarLabel,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
};
