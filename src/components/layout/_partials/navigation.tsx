import { Link, useLocation } from "react-router-dom";
import LogoIcon from "@/assets/icons/logo";
import Button from "@/components/ui/button";
import { Github, Grip, Moon, Route, Sun } from "lucide-react";
import { useEffect, useState } from "react";
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
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { GLOBAL_NAVIGATION } from "@/utils/constants";
import GlobalNav from "@/pages/docs/_components/nav/global-nav";

function Navigation() {
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();
  const [search, setSearch] = useState(false);
  const [mobileMenuState, setMobileMenuState] = useState(false);

  useEffect(() => setMobileMenuState(false), [pathname]);

  return (
    <header data-layout="navigation">
      <Drawer open={mobileMenuState} onClose={() => setMobileMenuState(false)}>
        <DrawerTrigger asChild>
          <Button
            className="menu"
            variant="ghost"
            size="sm"
            aria-label="menu"
            onClick={() => setMobileMenuState(true)}>
            <Grip />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="menu-box">
          <GlobalNav>
            <div className="category">
              <span className="label">
                <Route /> Menu
              </span>
              <ul className="links">
                <li className="link">
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/" className="logo">
                      <LogoIcon />
                      shadcn/css
                    </Link>
                  </Button>
                </li>
                {GLOBAL_NAVIGATION.map((link, i) => (
                  <li key={i} className="link">
                    <Button key={i} variant="ghost" size="sm" asChild>
                      <Link
                        to={
                          link.id === "colors" ? link.id : `/docs/${link.id}`
                        }>
                        {link.name}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </GlobalNav>
        </DrawerContent>
      </Drawer>
      <div className="links">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/" className="logo">
            <LogoIcon />
            shadcn/css
          </Link>
        </Button>
        {GLOBAL_NAVIGATION.map((link, i) => (
          <Button key={i} variant="ghost" size="sm" asChild>
            <Link to={link.id === "colors" ? link.id : `/docs/${link.id}`}>
              {link.name}
            </Link>
          </Button>
        ))}
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
