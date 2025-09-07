import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { ChevronDownIcon } from "lucide-react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={`${styles["navigation-menu"]} ${className ?? ""}`.trim()}
      {...props}>
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.List>) {
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
}: ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={`${styles["navigation-menu-item"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={`${styles["navigation-menu-trigger"]} ${
        className ?? ""
      }`.trim()}
      {...props}>
      {children} <ChevronDownIcon aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.Content>) {
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

function NavigationMenuViewport({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className={styles["navigation-menu-viewport-wrapper"]}>
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={`${styles["navigation-menu-viewport"]} ${className ?? ""}`.trim()}
        {...props}
      />
    </div>
  );
}

function NavigationMenuLink({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={`${styles["navigation-menu-link"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={`${styles["navigation-menu-indicator"]} ${
        className ?? ""
      }`.trim()}
      {...props}>
      <div />
    </NavigationMenuPrimitive.Indicator>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
