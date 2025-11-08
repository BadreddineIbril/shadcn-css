import { ArrowUpRightIcon, Cloud, Folder } from "lucide-react";
import Button from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EmptyDemo() {
  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Folder />
          </EmptyMedia>
          <EmptyTitle>No Projects Yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t created any projects yet. Get started by creating
            your first project.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button>Create Project</Button>
            <Button variant="outline">Import Project</Button>
          </div>
        </EmptyContent>
        <Button
          variant="link"
          asChild
          style={{ color: "var(--color-muted-foreground)" }}
          size="sm">
          <a href="#">
            Learn More <ArrowUpRightIcon />
          </a>
        </Button>
      </Empty>
      <Empty style={{ border: "1px dashed var(--color-border)" }}>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Cloud />
          </EmptyMedia>
          <EmptyTitle>Cloud Storage Empty</EmptyTitle>
          <EmptyDescription>
            Upload files to your cloud storage to access them anywhere.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="sm">
            Upload Files
          </Button>
        </EmptyContent>
      </Empty>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="default">
            <Avatar style={{ width: "48px", height: "48px" }}>
              <AvatarImage
                src="https://github.com/shadcn.png"
                style={{ filter: "grayscale(1)" }}
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </EmptyMedia>
          <EmptyTitle>User Offline</EmptyTitle>
          <EmptyDescription>
            This user is currently offline. You can leave a message to notify
            them or try again later.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Leave Message</Button>
        </EmptyContent>
      </Empty>
    </div>
  );
}
