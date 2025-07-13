import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

function RadioGroup({
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      {...props}
      className={`${styles["radio-group"]} ${props.className ?? ""}`.trim()}
    />
  );
}

function RadioGroupItem({
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      {...props}
      className={`${styles["radio-group-item"]} ${
        props.className ?? ""
      }`.trim()}>
      <RadioGroupPrimitive.Indicator data-slot="radio-group-indicator">
        <Circle />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
