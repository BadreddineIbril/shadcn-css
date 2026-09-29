import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { ChevronDownIcon } from "lucide-react";

function NativeSelect({
  className,
  size = "default",
  ...props
}: Omit<ComponentProps<"select">, "size"> & { size?: "sm" | "default" }) {
  return (
    <div
      data-slot="native-select-wrapper"
      className={`${styles["native-select"]} ${className ?? ""}`.trim()}>
      <select
        data-slot="native-select"
        data-size={size}
        className={styles["native-select-control"]}
        {...props}
      />
      <ChevronDownIcon
        data-slot="native-select-icon"
        aria-hidden="true"
        className={styles["native-select-icon"]}
      />
    </div>
  );
}

function NativeSelectOption({ className, ...props }: ComponentProps<"option">) {
  return (
    <option
      data-slot="native-select-option"
      className={`${styles["native-select-option"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function NativeSelectOptGroup({
  className,
  ...props
}: ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={`${styles["native-select-option"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
