import Button from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TooltipInspiration() {
  return (
    <div className="tooltip-box">
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button variant="outline">Device Stats</Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="tooltip-info">
            <div className="head">
              <span className="label">Impressions</span>
              <p className="sub-label">Today</p>
            </div>
            <div className="core">
              <div className="item">
                <span className="label">Desktop</span>
                <span className="value">1</span>
              </div>
              <div className="item">
                <span className="label">Mobile</span>
                <span className="value">49</span>
              </div>
              <div className="item">
                <span className="label">Tablet</span>
                <span className="value">5</span>
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
