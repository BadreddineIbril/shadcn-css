import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

function Progress({
  className,
  children,
  ...props
}: Omit<ComponentProps<typeof ProgressPrimitive.Root>, "className"> & {
  className?: string;
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={`${styles.progress} ${className ?? ""}`.trim()}
      {...props}>
      {children}
      <ProgressPrimitive.Track
        data-slot="progress-track"
        className={styles["progress-track"]}>
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={styles["progress-indicator"]}
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  );
}

export default Progress;
