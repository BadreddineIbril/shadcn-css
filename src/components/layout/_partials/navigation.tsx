import { Link } from "react-router-dom";
import LogoIcon from "@/assets/icons/logo";
import Button from "@/components/ui/button";
import { Github, Moon, Sun } from "lucide-react";
import { useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Separator from "@/components/ui/separator";
import { useTheme } from "@/contexts";

function Navigation() {
  const { theme, setTheme } = useTheme();
  const [search, setSearch] = useState(false);

  return (
    <header data-layout="navigation">
      <div className="links">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/" className="logo">
            <LogoIcon />
            shadcn/css
          </Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/docs/introduction">Docs</Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/docs/components">Components</Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/colors">Colors</Link>
        </Button>
      </div>
      <div className="actions">
        <button className="search" onClick={() => setSearch(true)}>
          Search documentation...
          <div className="commands">
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </div>
        </button>
        <CommandDialog open={search} onOpenChange={setSearch}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        <Separator orientation="vertical" />
        <Button variant="ghost" size="sm" aria-label="github" asChild>
          <a
            href="https://github.com/BadreddineIbril/shadcn-css"
            target="_blank">
            <Github />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          aria-label="theme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? <Sun /> : <Moon />}
        </Button>
      </div>
    </header>
  );
}

export default Navigation;
