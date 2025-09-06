import styles from "./styles.module.css";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { createContext, useContext, type ComponentProps } from "react";
import type Toggle from "@/components/ui/toggle";
import ToggleItemStyles from "@/components/ui/toggle/styles.module.css";

type ToggleProps = ComponentProps<typeof Toggle>;
const ToggleGroupContext = createContext<Pick<ToggleProps, "size" | "variant">>(
  {
    size: "md",
    variant: "default",
  }
);

function ToggleGroup({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: ComponentProps<typeof ToggleGroupPrimitive.Root> &
  Pick<ToggleProps, "size" | "variant">) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={`${styles["toggle-group"]} ${className ?? ""}`.trim()}
      {...props}>
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: ComponentProps<typeof ToggleGroupPrimitive.Item> &
  Pick<ToggleProps, "size" | "variant">) {
  const context = useContext(ToggleGroupContext);

  console.log(context);
  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={`${ToggleItemStyles.toggle} ${styles["toggle-group-item"]} ${
        className ?? ""
      }`.trim()}
      {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
