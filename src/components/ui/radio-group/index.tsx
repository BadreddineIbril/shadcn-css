import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

function RadioGroup({
  className,
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={`${styles["radio-group"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={`${styles["radio-group-item"]} ${className ?? ""}`.trim()}
      {...props}>
      <RadioGroupPrimitive.Indicator data-slot="radio-group-indicator">
        <Circle />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
