import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { Check } from "lucide-react";

function Checkbox({
  className,
  nativeButton = true,
  render = <button type="button" />,
  ...props
}: Omit<ComponentProps<typeof CheckboxPrimitive.Root>, "className"> & {
  className?: string;
}) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      nativeButton={nativeButton}
      render={render}
      className={`${styles.checkbox} ${className ?? ""}`.trim()}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={styles["checkbox-indicator"]}>
        <Check />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export default Checkbox;
