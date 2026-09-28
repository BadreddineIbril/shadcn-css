import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";

type WithClassName<T> = Omit<T, "className"> & { className?: string };

function Accordion({
  ...props
}: ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: WithClassName<ComponentProps<typeof AccordionPrimitive.Item>>) {
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
}: WithClassName<ComponentProps<typeof AccordionPrimitive.Trigger>>) {
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
}: WithClassName<ComponentProps<typeof AccordionPrimitive.Panel>>) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={`${styles["accordion-content"]} ${className ?? ""}`.trim()}
      {...props}>
      <div>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
