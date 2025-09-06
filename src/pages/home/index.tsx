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
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
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

function Home() {
  return (
    <main>
      Home
      <div style={{ display: "grid", gap: "2em", padding: "2em" }}>
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
