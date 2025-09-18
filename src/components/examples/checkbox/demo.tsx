import Checkbox from "@/components/ui/checkbox";
import Label from "@/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
        <Checkbox id="terms-2" defaultChecked />
        <div style={{ display: "grid", gap: "8px" }}>
          <Label htmlFor="terms-2">Accept terms and conditions</Label>
          <p
            style={{
              fontSize: "14px",
              color: "var(--color-muted-foreground)",
            }}>
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Checkbox id="toggle" disabled />
        <Label htmlFor="toggle">Enable notifications</Label>
      </div>
    </div>
  );
}
