import { COMPONENTS } from "@/components/ui";
import type {
  LinkDefinition,
  NavigationDefinition,
  PackageManagers,
} from "@/types/core";
import { Box, Puzzle, Send } from "lucide-react";

const GLOBAL_NAVIGATION: LinkDefinition[] = [
  { name: "Docs", id: "introduction" },
  { name: "Components", id: "components" },
  { name: "Colors", id: "colors" },
];

const DOCS_NAVIGATION: NavigationDefinition[] = [
  {
    icon: Send,
    name: "Getting Started",
    links: [
      {
        name: "Introduction",
        id: "introduction",
        description:
          "Beautifully designed components that you can copy and paste into your apps. Made with CSS Modules instead Tailwind CSS. Open source.",
      },
      {
        name: "Installation",
        id: "installation",
        description: "How to install dependencies and structure your app.",
      },
      {
        name: "components.json",
        id: "components.json",
        description: "Configuration for your project.",
      },
      {
        name: "Theming",
        id: "theming",
        description:
          "Use CSS Variables to customize the look and feel of your application.",
      },
      {
        name: "Dark mode",
        id: "dark-mode",
        description: "Adding dark mode to your site.",
      },
      {
        name: "CLI",
        id: "cli",
        description: "Use the CLI to add components to your project.",
      },
      {
        name: "Typography",
        id: "typography",
        description: "Styles for headings, paragraphs, lists...etc",
      },
      {
        name: "Figma",
        id: "figma",
        description:
          "Every component recreated in Figma. With customizable props, typography and icons.",
      },
      {
        name: "Changelog",
        id: "changelog",
        description: "Latest updates and announcements.",
      },
    ],
  },
  {
    icon: Box,
    name: "Installation",
    links: [
      {
        name: "Vite",
        id: "vite",
        description: "Install and configure shadcn/css for Vite.",
      },
      {
        name: "Next.js",
        id: "next",
        description: "Install and configure shadcn/css for Next.js.",
      },
      {
        name: "Laravel",
        id: "laravel",
        description: "Install and configure shadcn/css for Laravel.",
      },
      {
        name: "React Router",
        id: "react-router",
        description: "Install and configure shadcn/css for React Router.",
      },
      {
        name: "Astro",
        id: "astro",
        description: "Install and configure shadcn/css for Astro.",
      },
      {
        name: "TanStack Start",
        id: "tanstack",
        description: "Install and configure shadcn/css for TankStack Start.",
      },
      {
        name: "TanStack Router",
        id: "tanstack-router",
        description: "Install and configure shadcn/css for TankStack Router.",
      },
      {
        name: "Manual",
        id: "manual",
        description: "Add dependencies to your project manually.",
      },
    ],
  },
  {
    icon: Puzzle,
    name: "Components",
    links: Object.values(COMPONENTS),
  },
];

const COLOR_TOKENS: string[] = [
  "neutral",
  "stone",
  "zinc",
  "slate",
  "gray",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const PACKAGE_MANAGERS: PackageManagers[] = ["pnpm", "npm", "yarn", "bun"];

export { GLOBAL_NAVIGATION, DOCS_NAVIGATION, COLOR_TOKENS, PACKAGE_MANAGERS };
