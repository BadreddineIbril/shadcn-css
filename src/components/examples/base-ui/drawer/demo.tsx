import Button from "@/components/base-ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/base-ui/drawer";

export default function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        Open Drawer
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
            <DrawerClose
              render={<Button variant="outline" style={{ width: "100%" }} />}>
              Close
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
