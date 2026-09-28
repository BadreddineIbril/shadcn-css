import Button from "@/components/base-ui/button";
import Input from "@/components/base-ui/input";
import Label from "@/components/base-ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/base-ui/popover";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open popover
      </PopoverTrigger>
      <PopoverContent style={{ width: "320px" }}>
        <div style={{ display: "grid", gap: "8px" }}>
          <div style={{ marginBlockEnd: "8px" }}>
            <h4 style={{ fontWeight: "500" }}>Dimensions</h4>
            <p
              style={{
                fontSize: "14px",
                color: "var(--color-muted-foreground)",
              }}>
              Set the dimensions for the layer.
            </p>
          </div>
          <div style={{ display: "grid", gap: "8px" }}>
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gap: "16px",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              }}>
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                style={{ height: "32px", gridColumn: "span 2 / span 2" }}
              />
            </div>
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gap: "16px",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              }}>
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                style={{ height: "32px", gridColumn: "span 2 / span 2" }}
              />
            </div>
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gap: "16px",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              }}>
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                style={{ height: "32px", gridColumn: "span 2 / span 2" }}
              />
            </div>
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gap: "16px",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              }}>
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                style={{ height: "32px", gridColumn: "span 2 / span 2" }}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
