import styles from "./styles.module.css";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";

function Breadcrumb({ ...props }: ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ ...props }: ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      {...props}
      className={`${styles["breadcrumb-list"]} ${props.className ?? ""}`.trim()}
    />
  );
}

function BreadcrumbItem({ ...props }: ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      {...props}
      className={`${styles["breadcrumb-item"]} ${props.className ?? ""}`.trim()}
    />
  );
}

function BreadcrumbLink({
  asChild,
  ...props
}: ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      data-slot="breadcrumb-link"
      {...props}
      className={`${styles["breadcrumb-link"]} ${props.className ?? ""}`.trim()}
    />
  );
}

function BreadcrumbPage({ ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      {...props}
      className={`${styles["breadcrumb-page"]} ${props.className ?? ""}`.trim()}
    />
  );
}

function BreadcrumbSeparator({ children, ...props }: ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      {...props}
      className={`${styles["breadcrumb-separator"]} ${
        props.className ?? ""
      }`.trim()}>
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({ ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      {...props}
      className={`${styles["breadcrumb-separator"]} ${
        props.className ?? ""
      }`.trim()}>
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
