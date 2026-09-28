import Label from "@/components/base-ui/label";
import Switch from "@/components/base-ui/switch";

export default function SwitchDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
