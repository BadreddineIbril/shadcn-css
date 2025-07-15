import styles from "./styles.module.css";
import * as SelectPrimitive from "@radix-ui/react-select";
import type { ComponentProps } from "react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

function Select({ ...props }: ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

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
  size = "default",
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      {...props}
      className={`${styles["select-trigger"]} ${props.className ?? ""}`.trim()}
      data-size={size}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  children,
  position = "popper",
  ...props
}: ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        {...props}
        data-is-popper={position === "popper"}
        className={`${styles["select-content"]} ${
          props.className ?? ""
        }`.trim()}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          data-is-popper={position === "popper"}
          className={styles["select-viewport"]}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  ...props
}: ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      {...props}
      className={`${styles["select-label"]} ${props.className ?? ""}`.trim()}
    />
  );
}

function SelectItem({
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      {...props}
      className={`${styles["select-item"]} ${props.className ?? ""}`.trim()}>
      <span>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  ...props
}: ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      {...props}
      className={`${styles["select-separator"]} ${
        props.className ?? ""
      }`.trim()}
    />
  );
}

function SelectScrollUpButton({
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      {...props}
      className={`${styles["select-scroll-up-button"]} ${
        props.className ?? ""
      }`.trim()}>
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      {...props}
      className={`${styles["select-scroll-down-button"]} ${
        props.className ?? ""
      }`.trim()}>
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
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
