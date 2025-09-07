import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Progress from "@/components/ui/progress";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Skeleton from "@/components/ui/skeleton";
import Slider from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bold, Bookmark, Italic, Underline } from "lucide-react";
import { toast } from "sonner";

function Home() {
  return (
    <main>
      Home
      <div style={{ display: "grid", gap: "2em", padding: "2em" }}>
        <NavigationMenu>
          <NavigationMenuList>
            {[...Array(5)].map((_, i) => (
              <NavigationMenuItem key={i}>
                <NavigationMenuTrigger>Item One {i + 1}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link {i + 1}</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem>
                Always Show Bookmarks Bar
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked>
                Always Show Full URLs
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Edit...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <Progress value={99} />

        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="outline">Can I use this in my project?</Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </CollapsibleContent>
        </Collapsible>

        <ScrollArea
          style={{ height: "200px", width: "350px", padding: "1rem" }}>
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop.
          <ScrollBar />
        </ScrollArea>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>

        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }>
          Show Toast
        </Button>

        <ResizablePanelGroup
          direction="horizontal"
          style={{
            border: "1px solid var(--border)",
            borderRadius: "1rem",
            overflow: "hidden",
          }}>
          <ResizablePanel defaultSize={50}>
            <div style={{ height: "200px", padding: "6rem" }}>
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div style={{ height: "100%", padding: "6rem" }}>
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div style={{ height: "100%", padding: "6rem" }}>
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>

        <Slider defaultValue={[33]} max={100} step={1} />

        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <ToggleGroup type="single" size="lg">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold style={{ width: "1rem", height: "1rem" }} />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic style={{ width: "1rem", height: "1rem" }} />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough">
            <Underline style={{ width: "1rem", height: "1rem" }} />
          </ToggleGroupItem>
        </ToggleGroup>

        <div style={{ padding: "2em" }}>
          <Carousel style={{ width: "100%" }}>
            <CarouselContent style={{ marginLeft: "-1rem" }}>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} style={{ paddingLeft: "1rem" }}>
                  <div style={{ padding: "1rem" }}>
                    <Card>
                      <CardContent
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "6rem",
                        }}>
                        <span>{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <AspectRatio ratio={16 / 9}>
          <img
            src="https://www.shutterstock.com/editorial/image-editorial/NaDeQ913MdT5Eb0bMDAxMQ==/adolf-hitler-1889-1945-german-politician-leader-nazi-440nw-4423909a.jpg"
            alt="Adolf"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </AspectRatio>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent side="right">
            The React Framework – created and maintained by @vercel.
          </HoverCardContent>
        </HoverCard>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>

        <Tabs defaultValue="account" style={{ width: "400px" }}>
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

        <Skeleton style={{ width: "100px", height: "100px" }} />

        <div style={{ display: "grid", gap: "1em", width: "fit-content" }}>
          <Button variant="primary" size="icon">
            <Bookmark />
          </Button>
          <Button variant="secondary" size="icon">
            <Bookmark />
          </Button>
          <Button variant="outline" size="icon">
            <Bookmark />
          </Button>
          <Button variant="ghost" size="icon">
            <Bookmark />
          </Button>
          <Button variant="destructive" size="icon">
            <Bookmark />
          </Button>
          <Button variant="link" size="icon">
            <Bookmark />
          </Button>
        </div>
        <div style={{ display: "grid", gap: "1em", width: "fit-content" }}>
          <Button size="xs">
            <Bookmark />
            Button
          </Button>
          <Button size="sm">
            <Bookmark />
            Button
          </Button>
          <Button size="md">
            <Bookmark />
            Button
          </Button>
          <Button size="lg">
            <Bookmark />
            Button
          </Button>
        </div>
        <div style={{ display: "grid", gap: "1em", width: "fit-content" }}>
          <Button variant="secondary" size="xs">
            Button
          </Button>
          <Button variant="secondary" size="sm">
            Button
          </Button>
          <Button variant="secondary" size="md">
            Button
          </Button>
          <Button variant="secondary" size="lg">
            Button
          </Button>
        </div>
        <div style={{ display: "grid", gap: "1em", width: "fit-content" }}>
          <Button variant="outline" size="xs">
            Button
          </Button>
          <Button variant="outline" size="sm">
            Button
          </Button>
          <Button variant="outline" size="md">
            Button
          </Button>
          <Button variant="outline" size="lg">
            Button
          </Button>
        </div>
        <div style={{ display: "grid", gap: "1em", width: "fit-content" }}>
          <Button variant="ghost" size="xs">
            Button
          </Button>
          <Button variant="ghost" size="sm">
            Button
          </Button>
          <Button variant="ghost" size="md">
            Button
          </Button>
          <Button variant="ghost" size="lg">
            Button
          </Button>
        </div>
        <div style={{ display: "grid", gap: "1em", width: "fit-content" }}>
          <Button variant="destructive" size="xs">
            Button
          </Button>
          <Button variant="destructive" size="sm">
            Button
          </Button>
          <Button variant="destructive" size="md">
            Button
          </Button>
          <Button variant="destructive" size="lg">
            Button
          </Button>
        </div>
        <div style={{ display: "grid", gap: "1em", width: "fit-content" }}>
          <Button variant="link" size="xs">
            Link
          </Button>
          <Button variant="link" size="sm">
            Link
          </Button>
          <Button variant="link" size="md">
            Link
          </Button>
          <Button variant="link" size="lg">
            Link
          </Button>
        </div>
        <div style={{ display: "grid", gap: "1em", width: "fit-content" }}>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
          <Button variant="ghost" disabled>
            Disabled
          </Button>
          <Button variant="destructive" disabled>
            Disabled
          </Button>
          <Button variant="link" disabled>
            Disabled
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Home;
