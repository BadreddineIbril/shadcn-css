import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: Omit<ComponentProps<typeof SeparatorPrimitive>, "className"> & {
  className?: string;
}) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={`${styles.separator} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export default Separator;
