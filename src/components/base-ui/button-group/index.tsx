import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { ComponentProps } from "react";
import Separator from "@/components/base-ui/separator";
import styles from "./styles.module.css";

type ButtonGroupProps = ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
};

function ButtonGroup({
  className,
  orientation = "horizontal",
  ...props
}: ButtonGroupProps) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={`${styles["button-group"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function ButtonGroupText({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      { className: `${styles["button-group-text"]} ${className ?? ""}`.trim() },
      props
    ),
  });
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={`${styles["button-group-separator"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
