import styles from "./styles.module.css";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import type { ComponentProps } from "react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

type WithClassName<T> = Omit<T, "className"> & { className?: string };

const Select = SelectPrimitive.Root;

function SelectGroup({
  ...props
}: ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: WithClassName<ComponentProps<typeof SelectPrimitive.Trigger>> & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={`${styles["select-trigger"]} ${className ?? ""}`.trim()}
      {...props}>
      {children}
      <SelectPrimitive.Icon
        data-slot="select-icon"
        className={styles["select-icon"]}>
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  children,
  className,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  alignItemWithTrigger = false,
  ...props
}: WithClassName<ComponentProps<typeof SelectPrimitive.Popup>> &
  Pick<
    ComponentProps<typeof SelectPrimitive.Positioner>,
    "side" | "sideOffset" | "align" | "alignOffset" | "alignItemWithTrigger"
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className={styles["select-positioner"]}>
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={`${styles["select-content"]} ${className ?? ""}`.trim()}
          {...props}>
          <SelectScrollUpButton />
          <SelectPrimitive.List className={styles["select-viewport"]}>
            {children}
          </SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: WithClassName<ComponentProps<typeof SelectPrimitive.GroupLabel>>) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={`${styles["select-label"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: WithClassName<ComponentProps<typeof SelectPrimitive.Item>>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={`${styles["select-item"]} ${className ?? ""}`.trim()}
      {...props}>
      <span>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText render={<span />}>
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: WithClassName<ComponentProps<typeof SelectPrimitive.Separator>>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={`${styles["select-separator"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: WithClassName<ComponentProps<typeof SelectPrimitive.ScrollUpArrow>>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={`${styles["select-scroll-up-button"]} ${
        className ?? ""
      }`.trim()}
      {...props}>
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: WithClassName<ComponentProps<typeof SelectPrimitive.ScrollDownArrow>>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={`${styles["select-scroll-down-button"]} ${
        className ?? ""
      }`.trim()}
      {...props}>
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
