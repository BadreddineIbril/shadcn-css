import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

function Progress({
  className,
  value,
  ...props
}: ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={`${styles.progress} ${className ?? ""}`.trim()}
      {...props}>
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={styles["progress-indicator"]}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export default Progress;
