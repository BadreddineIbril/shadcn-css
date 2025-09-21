import { COMPONENTS } from "@/components/ui";
import { Box, Puzzle, Send } from "lucide-react";

const GLOBAL_NAVIGATION = [
  { name: "Docs", id: "introduction" },
  { name: "Components", id: "components" },
  { name: "Colors", id: "colors" },
];

const DOCS_NAVIGATION = [
  {
    icon: Send,
    name: "Getting Started",
    links: [
      { name: "Introduction", id: "introduction" },
      { name: "Installation", id: "installation" },
      { name: "components.json", id: "components.json" },
      { name: "Theming", id: "theming" },
      { name: "Dark mode", id: "dark-mode" },
      { name: "CLI", id: "cli" },
      { name: "Typography", id: "typography" },
      { name: "Figma", id: "figma" },
      { name: "Changelog", id: "changelog" },
    ],
  },
  {
    icon: Box,
    name: "Installation",
    links: [
      { name: "Vite", id: "vite" },
      { name: "Next.js", id: "next" },
      { name: "Laravel", id: "laravel" },
      { name: "React Router", id: "react-router" },
      { name: "Astro", id: "astro" },
      { name: "TanStack Start", id: "tanstack" },
      { name: "TanStack Router", id: "tanstack-router" },
      { name: "Manual", id: "manual" },
    ],
  },
  {
    icon: Puzzle,
    name: "Components",
    links: Object.values(COMPONENTS),
  },
];

export { GLOBAL_NAVIGATION, DOCS_NAVIGATION };
