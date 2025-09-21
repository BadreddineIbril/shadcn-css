import Button from "@/components/ui/button";
import { Bookmark, GitBranch } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Button>Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="secondary" style={{ width: "36px" }}>
        <Bookmark />
      </Button>
      <Button variant="outline">
        <GitBranch />
        New Branch
      </Button>
    </div>
  );
}
