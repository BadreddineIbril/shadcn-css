import { Bold } from "lucide-react";
import Toggle from "@/components/ui/toggle";

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold />
    </Toggle>
  );
}
