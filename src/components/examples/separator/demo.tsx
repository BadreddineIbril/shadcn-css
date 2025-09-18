import Separator from "@/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div>
      <div style={{ marginBlockEnd: "4px" }}>
        <h4 style={{ fontSize: "12px", fontWeight: 500 }}>Radix Primitives</h4>
        <p style={{ fontSize: "12px", color: "var(--color-muted-foreground)" }}>
          An open-source UI component library.
        </p>
      </div>
      <Separator style={{ marginBlock: "16px" }} />
      <div
        style={{
          display: "flex",
          height: "20px",
          alignItems: "center",
          fontSize: "12px",
          gap: "16px",
        }}>
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
