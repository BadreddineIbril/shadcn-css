import styles from "./styles.module.css";
import type { ComponentProps } from "react";

function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      {...props}
      className={`${styles.skeleton} ${className ?? ""}`.trim()}
    />
  );
}

export default Skeleton;
