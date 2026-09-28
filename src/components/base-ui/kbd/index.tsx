import styles from "./styles.module.css";
import type { ComponentProps } from "react";

function Kbd({ className, ...props }: ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={`${styles.kbd} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={`${styles["kbd-group"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
