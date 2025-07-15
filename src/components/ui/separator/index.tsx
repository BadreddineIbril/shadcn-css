import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

function Separator({
  orientation = "horizontal",
  decorative = true,
  ...props
}: ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      {...props}
      className={`${styles.separator} ${props.className ?? ""}`.trim()}
    />
  );
}

export default Separator;
