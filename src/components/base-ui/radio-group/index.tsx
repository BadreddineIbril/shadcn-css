import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { Circle } from "lucide-react";

function RadioGroup({
  className,
  ...props
}: Omit<ComponentProps<typeof RadioGroupPrimitive>, "className"> & {
  className?: string;
}) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={`${styles["radio-group"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  nativeButton = true,
  render = <button type="button" />,
  ...props
}: Omit<ComponentProps<typeof RadioPrimitive.Root>, "className"> & {
  className?: string;
}) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      nativeButton={nativeButton}
      render={render}
      className={`${styles["radio-group-item"]} ${className ?? ""}`.trim()}
      {...props}>
      <RadioPrimitive.Indicator data-slot="radio-group-indicator">
        <Circle />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
