import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

function Tabs({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Root>) {
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
}: ComponentProps<typeof TabsPrimitive.List>) {
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
}: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      {...props}
      className={`${styles["tabs-trigger"]} ${className ?? ""}`.trim()}
    />
  );
}

function TabsContent({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      {...props}
      className={`${styles["tabs-content"]} ${className ?? ""}`.trim()}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
