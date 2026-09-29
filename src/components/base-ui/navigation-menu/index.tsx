import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { ChevronDownIcon } from "lucide-react";

type WithClassName<T> = Omit<T, "className"> & { className?: string };

function NavigationMenu({
  align = "start",
  className,
  children,
  ...props
}: WithClassName<ComponentProps<typeof NavigationMenuPrimitive.Root>> &
  Pick<ComponentProps<typeof NavigationMenuPrimitive.Positioner>, "align">) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={`${styles["navigation-menu"]} ${className ?? ""}`.trim()}
      {...props}>
      {children}
      <NavigationMenuPositioner align={align} />
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: WithClassName<ComponentProps<typeof NavigationMenuPrimitive.List>>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={`${styles["navigation-menu-list"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: WithClassName<ComponentProps<typeof NavigationMenuPrimitive.Item>>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={`${styles["navigation-menu-item"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

// Trigger styles, reusable on links (e.g. a top-level "Docs" link)
function navigationMenuTriggerStyle() {
  return styles["navigation-menu-trigger"];
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: WithClassName<ComponentProps<typeof NavigationMenuPrimitive.Trigger>>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={`${navigationMenuTriggerStyle()} ${className ?? ""}`.trim()}
      {...props}>
      {children}{" "}
      <NavigationMenuPrimitive.Icon
        className={styles["navigation-menu-trigger-icon"]}>
        <ChevronDownIcon aria-hidden="true" />
      </NavigationMenuPrimitive.Icon>
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: WithClassName<ComponentProps<typeof NavigationMenuPrimitive.Content>>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={`${styles["navigation-menu-content"]} ${
        className ?? ""
      }`.trim()}
      {...props}
    />
  );
}

function NavigationMenuPositioner({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  ...props
}: WithClassName<ComponentProps<typeof NavigationMenuPrimitive.Positioner>>) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={`${styles["navigation-menu-positioner"]} ${
          className ?? ""
        }`.trim()}
        {...props}>
        <NavigationMenuPrimitive.Popup
          data-slot="navigation-menu-viewport"
          className={styles["navigation-menu-viewport"]}>
          <NavigationMenuPrimitive.Viewport
            className={styles["navigation-menu-viewport-inner"]}
          />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  );
}

function NavigationMenuLink({
  className,
  ...props
}: WithClassName<ComponentProps<typeof NavigationMenuPrimitive.Link>>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={`${styles["navigation-menu-link"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
};
