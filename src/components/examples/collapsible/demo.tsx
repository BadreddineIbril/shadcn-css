import { ChevronsUpDown } from "lucide-react";
import Button from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "350px",
        gap: "8px",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          paddingInline: "16px",
        }}>
        <h4 style={{ fontSize: "14px", fontWeight: 600 }}>
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            style={{ width: "32px", height: "32px" }}>
            <ChevronsUpDown />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div
        style={{
          border: "1px solid var(--color-border)",
          padding: "8px 16px",
          fontFamily: "monospace",
          fontSize: "14px",
          borderRadius: "8px",
        }}>
        @radix-ui/primitives
      </div>
      <CollapsibleContent
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div
          style={{
            border: "1px solid var(--color-border)",
            padding: "8px 16px",
            fontFamily: "monospace",
            fontSize: "14px",
            borderRadius: "8px",
          }}>
          @radix-ui/colors
        </div>
        <div
          style={{
            border: "1px solid var(--color-border)",
            padding: "8px 16px",
            fontFamily: "monospace",
            fontSize: "14px",
            borderRadius: "8px",
          }}>
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
