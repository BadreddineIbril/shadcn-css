import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import styles from "./styles.module.css";

type WithClassName<T> = Omit<T, "className"> & { className?: string };
type PositionerProps = Pick<
  ComponentProps<typeof MenuPrimitive.Positioner>,
  "side" | "sideOffset" | "align" | "alignOffset"
>;

function DropdownMenu({ ...props }: ComponentProps<typeof MenuPrimitive.Root>) {
  return <MenuPrimitive.Root {...props} />;
}

function DropdownMenuTrigger({
  ...props
}: ComponentProps<typeof MenuPrimitive.Trigger>) {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: ComponentProps<typeof MenuPrimitive.Portal>) {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
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
        className={styles["dropdown-menu-positioner"]}>
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={`${styles["dropdown-menu-content"]} ${className ?? ""}`.trim()}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({
  ...props
}: ComponentProps<typeof MenuPrimitive.Group>) {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuItem({
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
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={`${styles["dropdown-menu-item"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  ...props
}: WithClassName<ComponentProps<typeof MenuPrimitive.CheckboxItem>>) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={`${styles["dropdown-menu-checkbox-item"]} ${
        className ?? ""
      }`.trim()}
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

function DropdownMenuRadioGroup({
  ...props
}: ComponentProps<typeof MenuPrimitive.RadioGroup>) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: WithClassName<ComponentProps<typeof MenuPrimitive.RadioItem>>) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={`${styles["dropdown-menu-radio-item"]} ${className ?? ""}`.trim()}
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
function DropdownMenuLabel({
  className,
  inset,
  ...props
}: ComponentProps<"div"> & {
  inset?: boolean;
}) {
  return (
    <div
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={`${styles["dropdown-menu-label"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: WithClassName<ComponentProps<typeof MenuPrimitive.Separator>>) {
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={`${styles["dropdown-menu-separator"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function DropdownMenuShortcut({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={`${styles["dropdown-menu-shortcut"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function DropdownMenuSub({
  ...props
}: ComponentProps<typeof MenuPrimitive.SubmenuRoot>) {
  return <MenuPrimitive.SubmenuRoot {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: WithClassName<ComponentProps<typeof MenuPrimitive.SubmenuTrigger>> & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={`${styles["dropdown-menu-sub-trigger"]} ${className ?? ""}`.trim()}
      {...props}>
      {children}
      <ChevronRightIcon />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function DropdownMenuSubContent({
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
        className={styles["dropdown-menu-positioner"]}>
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-sub-content"
          className={`${styles["dropdown-menu-sub-content"]} ${
            className ?? ""
          }`.trim()}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
