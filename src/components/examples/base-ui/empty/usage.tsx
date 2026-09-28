import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/base-ui/empty";
import { Database } from "lucide-react";
import Button from "@/components/base-ui/button";

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Database />
    </EmptyMedia>
    <EmptyTitle>No data</EmptyTitle>
    <EmptyDescription>No data found</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Add data</Button>
  </EmptyContent>
</Empty>;
