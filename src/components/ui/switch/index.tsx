import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

function Switch({
  className,
  ...props
}: ComponentProps<typeof SwitchPrimitives.Root>) {
  return (
    <SwitchPrimitives.Root
      className={`${styles.switch} ${className ?? ""}`.trim()}
      {...props}>
      <SwitchPrimitives.Thumb className={styles["switch-thumb"]} />
    </SwitchPrimitives.Root>
  );
}

export default Switch;
