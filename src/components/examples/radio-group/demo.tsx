import Label from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}
