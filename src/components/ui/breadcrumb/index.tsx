import styles from "./styles.module.css";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";

function Breadcrumb({ ...props }: ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={`${styles["breadcrumb-list"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={`${styles["breadcrumb-item"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function BreadcrumbLink({
  className,
  asChild,
  ...props
}: ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      data-slot="breadcrumb-link"
      className={`${styles["breadcrumb-link"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={`${styles["breadcrumb-page"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  className,
  children,
  ...props
}: ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={`${styles["breadcrumb-separator"]} ${className ?? ""}`.trim()}
      {...props}>
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={`${styles["breadcrumb-separator"]} ${className ?? ""}`.trim()}
      {...props}>
      <MoreHorizontal />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
