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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Skeleton from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bookmark } from "lucide-react";

function Home() {
  return (
    <main>
      Home
      <div style={{ display: "grid", gap: "2em", padding: "2em" }}>
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
