import type { ComponentProps } from "react";

function AspectRatio({
  ratio = 1,
  style,
  ...props
}: ComponentProps<"div"> & { ratio?: number }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: ratio }}>
      <div
        data-slot="aspect-ratio"
        style={{ ...style, position: "absolute", inset: 0 }}
        {...props}
      />
    </div>
  );
}

export { AspectRatio };
