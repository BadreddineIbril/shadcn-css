import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

function Switch({
  className,
  nativeButton = true,
  render = <button type="button" />,
  ...props
}: Omit<ComponentProps<typeof SwitchPrimitive.Root>, "className"> & {
  className?: string;
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      nativeButton={nativeButton}
      render={render}
      className={`${styles.switch} ${className ?? ""}`.trim()}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={styles["switch-thumb"]}
      />
    </SwitchPrimitive.Root>
  );
}

export default Switch;
