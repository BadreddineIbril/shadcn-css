import { Bold } from "lucide-react";
import Toggle from "@/components/base-ui/toggle";

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold />
    </Toggle>
  );
}
