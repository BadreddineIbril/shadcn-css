import { toast } from "sonner";
import Button from "@/components/ui/button";

export default function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: new Date().toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          }),
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }>
      Show Toast
    </Button>
  );
}
