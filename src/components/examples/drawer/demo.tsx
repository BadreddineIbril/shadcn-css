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
        <div style={{ marginInline: "auto", width: "450px" }}>
          <DrawerHeader style={{ textAlign: "start" }}>
            <DrawerTitle>Drawer for React.</DrawerTitle>
            <DrawerDescription>
              This component can be used as a Dialog replacement on mobile and
              tablet devices. You can read about why and how it was built
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
