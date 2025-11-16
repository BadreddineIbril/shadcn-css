import styles from "./styles.module.css";
import { Loader2Icon } from "lucide-react";
import type { ComponentProps } from "react";

function Spinner({ className, ...props }: ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={`${styles.spinner} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export default Spinner;
