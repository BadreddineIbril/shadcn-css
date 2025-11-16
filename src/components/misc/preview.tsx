import type { ReactNode } from "react";

export default function Preview({ children }: { children: ReactNode }) {
  return (
    <div data-misc="preview">
      <div>{children}</div>
    </div>
  );
}
