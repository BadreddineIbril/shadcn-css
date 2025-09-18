import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent style={{ width: "320px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
          }}>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div style={{ marginBlockStart: "-2px" }}>
            <h4 style={{ fontSize: "14px", fontWeight: 600 }}>@nextjs</h4>
            <p style={{ fontSize: "14px" }}>
              The React Framework – created and maintained by @vercel.
            </p>
            <div
              style={{
                fontSize: "12px",
                color: "var(--color-muted-foreground)",
              }}>
              Joined December 2021
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
