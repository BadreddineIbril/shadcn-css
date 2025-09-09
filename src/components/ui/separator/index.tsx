import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={`${styles.separator} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export default Separator;
