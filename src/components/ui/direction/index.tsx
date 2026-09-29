import type { ComponentProps } from "react";
import * as DirectionPrimitive from "@radix-ui/react-direction";

type Direction = ComponentProps<
  typeof DirectionPrimitive.DirectionProvider
>["dir"];

function DirectionProvider({
  dir,
  direction,
  children,
}: Omit<ComponentProps<typeof DirectionPrimitive.DirectionProvider>, "dir"> & {
  dir?: Direction;
  direction?: Direction;
}) {
  return (
    <DirectionPrimitive.DirectionProvider dir={direction ?? dir ?? "ltr"}>
      {children}
    </DirectionPrimitive.DirectionProvider>
  );
}

const useDirection = DirectionPrimitive.useDirection;

export { DirectionProvider, useDirection };
