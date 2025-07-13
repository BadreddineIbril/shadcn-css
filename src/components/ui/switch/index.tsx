import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

function Switch({ ...props }: ComponentProps<typeof SwitchPrimitives.Root>) {
  return (
    <SwitchPrimitives.Root
      {...props}
      className={`${styles.switch} ${props.className ?? ""}`.trim()}>
      <SwitchPrimitives.Thumb className={styles["switch-thumb"]} />
    </SwitchPrimitives.Root>
  );
}

export default Switch;
