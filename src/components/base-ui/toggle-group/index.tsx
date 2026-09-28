import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { createContext, useContext, type ComponentProps } from "react";
import type Toggle from "@/components/base-ui/toggle";
import ToggleItemStyles from "@/components/base-ui/toggle/styles.module.css";
import styles from "./styles.module.css";

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
}: Omit<ComponentProps<typeof ToggleGroupPrimitive>, "className"> & {
  className?: string;
} & Pick<ToggleProps, "size" | "variant">) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={`${styles["toggle-group"]} ${className ?? ""}`.trim()}
      {...props}>
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: Omit<ComponentProps<typeof TogglePrimitive>, "className"> & {
  className?: string;
} & Pick<ToggleProps, "size" | "variant">) {
  const context = useContext(ToggleGroupContext);

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={`${ToggleItemStyles.toggle} ${styles["toggle-group-item"]} ${
        className ?? ""
      }`.trim()}
      {...props}>
      {children}
    </TogglePrimitive>
  );
}

export { ToggleGroup, ToggleGroupItem };
