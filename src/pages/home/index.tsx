import Button from "@/components/ui/button";
import { Bookmark } from "lucide-react";

function Home() {
  return (
    <main>
      Home
      <div style={{ display: "grid", gap: "2em", padding: "2em" }}>
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
