import { ScrollArea } from "@/components/ui/scroll-area";
import Separator from "@/components/ui/separator";
import { Fragment } from "react";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function ScrollAreaDemo() {
  return (
    <ScrollArea
      style={{
        height: "288px",
        width: "192px",
        borderRadius: "8px",
        border: "1px solid var(--color-border)",
      }}>
      <div style={{ padding: "16px" }}>
        <h4
          style={{ marginBlockEnd: "16px", fontSize: "12px", fontWeight: 500 }}>
          Tags
        </h4>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <div style={{ fontSize: "12px" }}>{tag}</div>
            <Separator style={{ marginBlock: "8px" }} />
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
