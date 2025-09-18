import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      style={{
        minWidth: "450px",
        borderRadius: "10px",
        border: "1px solid var(--color-border)",
      }}>
      <ResizablePanel defaultSize={50}>
        <div
          style={{
            display: "flex",
            height: "200px",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}>
          <span style={{ fontWeight: 500 }}>One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div
              style={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
              }}>
              <span style={{ fontWeight: 500 }}>Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div
              style={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
              }}>
              <span style={{ fontWeight: 500 }}>Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
