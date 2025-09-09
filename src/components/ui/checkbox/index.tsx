import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

function Checkbox({
  className,
  ...props
}: ComponentProps<typeof CheckboxPrimitives.Root>) {
  return (
    <CheckboxPrimitives.Root
      className={`${styles.checkbox} ${className ?? ""}`.trim()}
      {...props}>
      <CheckboxPrimitives.Indicator className={styles["checkbox-indicator"]}>
        <Check />
      </CheckboxPrimitives.Indicator>
    </CheckboxPrimitives.Root>
  );
}

export default Checkbox;
