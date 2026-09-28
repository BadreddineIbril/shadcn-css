import Checkbox from "@/components/base-ui/checkbox";
import Label from "@/components/base-ui/label";

export default function LabelDemo() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
