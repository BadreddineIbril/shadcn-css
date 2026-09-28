import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

type WithClassName<T> = Omit<T, "className"> & { className?: string };

function Tabs({
  className,
  ...props
}: WithClassName<ComponentProps<typeof TabsPrimitive.Root>>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      {...props}
      className={`${styles.tabs} ${className ?? ""}`.trim()}
    />
  );
}

function TabsList({
  className,
  ...props
}: WithClassName<ComponentProps<typeof TabsPrimitive.List>>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      {...props}
      className={`${styles["tabs-list"]} ${className ?? ""}`.trim()}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: WithClassName<ComponentProps<typeof TabsPrimitive.Tab>>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      {...props}
      className={`${styles["tabs-trigger"]} ${className ?? ""}`.trim()}
    />
  );
}

function TabsContent({
  className,
  ...props
}: WithClassName<ComponentProps<typeof TabsPrimitive.Panel>>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      {...props}
      className={`${styles["tabs-content"]} ${className ?? ""}`.trim()}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
