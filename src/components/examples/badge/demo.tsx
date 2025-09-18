import { BadgeCheckIcon } from "lucide-react";
import Badge from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gap: "8px",
        }}>
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gap: "8px",
        }}>
        <Badge
          variant="secondary"
          style={{
            backgroundColor: "var(--color-blue-500)",
            color: "var(--color-white",
          }}>
          <BadgeCheckIcon size={12} />
          Verified
        </Badge>
        <Badge
          style={{
            height: "20px",
            minWidth: "20px",
            borderRadius: "9999px",
            paddingInline: "4px",
            fontFamily: "monospace",
          }}>
          8
        </Badge>
        <Badge
          style={{
            height: "20px",
            minWidth: "20px",
            borderRadius: "9999px",
            paddingInline: "4px",
            fontFamily: "monospace",
          }}
          variant="destructive">
          99
        </Badge>
        <Badge
          style={{
            height: "20px",
            minWidth: "20px",
            borderRadius: "9999px",
            paddingInline: "4px",
            fontFamily: "monospace",
          }}
          variant="outline">
          20+
        </Badge>
      </div>
    </div>
  );
}
