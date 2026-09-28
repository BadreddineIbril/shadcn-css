import Button from "@/components/base-ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base-ui/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        Hover
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}
