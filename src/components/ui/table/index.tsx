import styles from "./styles.module.css";
import type { ComponentProps } from "react";

function Table({ className, ...props }: ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className={`${styles["table-container"]} ${className ?? ""}`.trim()}>
      <table
        data-slot="table"
        className={`${styles.table} ${className ?? ""}`.trim()}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={`${styles["table-header"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={`${styles["table-body"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={`${styles["table-footer"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={`${styles["table-row"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={`${styles["table-head"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={`${styles["table-cell"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={`${styles["table-caption"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
