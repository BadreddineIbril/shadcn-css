import styles from "./styles.module.css";
import type { ComponentProps } from "react";

function Card({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      {...props}
      className={`${styles.card} ${props.className ?? ""}`.trim()}
    />
  );
}

function CardHeader({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      {...props}
      className={`${styles["card-header"]} ${props.className ?? ""}`.trim()}
    />
  );
}

function CardTitle({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      {...props}
      className={`${styles["card-title"]} ${props.className ?? ""}`.trim()}
    />
  );
}

function CardDescription({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      {...props}
      className={`${styles["card-description"]} ${
        props.className ?? ""
      }`.trim()}
    />
  );
}

function CardAction({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      {...props}
      className={`${styles["card-action"]} ${props.className ?? ""}`.trim()}
    />
  );
}

function CardContent({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      {...props}
      className={`${styles["card-content"]} ${props.className ?? ""}`.trim()}
    />
  );
}

function CardFooter({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      {...props}
      className={`${styles["card-footer"]} ${props.className ?? ""}`.trim()}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
