import { toast } from "sonner";
import { DOCS_NAVIGATION } from "./constants";
import { COMPONENTS } from "@/components/ui";

function formatName(id: string) {
  return (id.charAt(0).toUpperCase() + id.slice(1)).replace("-", " ");
}

function getCssVarValue(cssVar: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(
    `--${cssVar}`
  );
}

async function copy(content: string, successMessage: string) {
  if (!content) return;

  try {
    await navigator.clipboard.writeText(content);

    toast(successMessage);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

function setMetaTags(
  title: string,
  description: string = "Beautifully designed components that you can copy and paste into your apps. Made with CSS Modules instead Tailwind CSS. Open source."
) {
  document.title = `${title} - shadcn/css`;

  const ogTitles = document.querySelectorAll<HTMLMetaElement>(
    "meta[name*='title'], meta[property*='title']"
  );
  const descriptions = document.querySelectorAll<HTMLMetaElement>(
    "meta[name*='description'], meta[property*='description']"
  );

  for (const title of ogTitles) title.content = `${title} - shadcn/css`;
  for (const desc of descriptions) desc.content = description;
}

function usePagination(pageId: string) {
  const allLinks = DOCS_NAVIGATION.flatMap((section) => section.links);
  const index = allLinks.findIndex((link) => link.id === pageId);

  if (index === -1) return { prev: null, next: null };

  return {
    prev: allLinks[index - 1] || null,
    next: allLinks[index + 1] || null,
  };
}

function getCommands(name: string) {
  const templates = {
    pnpm: {
      registry: `pnpm dlx shadcn-css add ${name}`,
      default: `pnpm add ${name}`,
    },
    npm: {
      registry: `npm shadcn-css add ${name}`,
      default: `npm install ${name}`,
    },
    yarn: {
      registry: `yarn shadcn-css add ${name}`,
      default: `yarn add ${name}`,
    },
    bun: {
      registry: `bunx --bun shadcn-css add ${name}`,
      default: `bun add ${name}`,
    },
  };

  return Object.fromEntries(
    Object.entries(templates).map(([k, v]) => [
      k,
      v[COMPONENTS[name] ? "registry" : "default"],
    ])
  );
}

export {
  formatName,
  getCssVarValue,
  getCommands,
  copy,
  setMetaTags,
  usePagination,
};
