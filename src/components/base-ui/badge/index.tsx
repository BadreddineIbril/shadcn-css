import styles from "./styles.module.css";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

type BadgeProps = useRender.ComponentProps<"span"> & {
  variant?: "primary" | "secondary" | "outline" | "destructive";
};

function Badge({
  className,
  variant = "primary",
  render,
  ...props
}: BadgeProps) {
  return useRender({
    defaultTagName: "span",
    render,
    state: { slot: "badge", variant },
    props: mergeProps<"span">(
      { className: `${styles.badge} ${className ?? ""}`.trim() },
      props
    ),
  });
}

export default Badge;
