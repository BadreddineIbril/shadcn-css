import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

function Accordion({
  ...props
}: ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={`${styles["accordion-item"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function AccordionTrigger({
  children,
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header data-slot="accordion-header">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={`${styles["accordion-trigger"]} ${className ?? ""}`.trim()}
        {...props}>
        {children}
        <ChevronDownIcon />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  children,
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={`${styles["accordion-content"]} ${className ?? ""}`.trim()}
      {...props}>
      <div>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
