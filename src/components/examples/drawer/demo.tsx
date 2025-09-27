import Button from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div style={{ marginInline: "auto", width: "300px" }}>
          <DrawerHeader style={{ textAlign: "center" }}>
            <DrawerTitle>Drawer for React.</DrawerTitle>
            <DrawerDescription style={{ textWrap: "balance" }}>
              This component can be used as a Dialog replacement on mobile and
              tablet devices.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter style={{ display: "grid", gap: "8px" }}>
            <Button style={{ width: "100%" }}>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline" style={{ width: "100%" }}>
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
