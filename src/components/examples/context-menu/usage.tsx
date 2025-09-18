import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>;
