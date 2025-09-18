import Label from "@/components/ui/label";
import Switch from "@/components/ui/switch";

export default function SwitchDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
