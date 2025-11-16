import Button from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
import { ArrowUp, ArrowUpRightIcon, Bookmark, GitBranch } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div style={{ display: "grid", gap: "16px" }}>
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
        <Button variant="outline" disabled>
          <Spinner />
          Submit
        </Button>
        <Button variant="outline" size="icon" style={{ borderRadius: "50%" }}>
          <ArrowUp />
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "start",
          gap: "32px",
        }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <Button size="sm" variant="outline">
            Small
          </Button>
          <Button size="icon-sm" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <Button variant="outline">Default</Button>
          <Button size="icon" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <Button variant="outline" size="lg">
            Large
          </Button>
          <Button size="icon-lg" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
