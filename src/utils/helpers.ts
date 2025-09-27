import { toast } from "sonner";
import { DOCS_NAVIGATION } from "./constants";

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

function getCommands(
  name: string,
  type: "dependencies" | "shadcn-css" | "global"
) {
  const templates = {
    pnpm: {
      ["shadcn-css"]: `pnpm dlx shadcn-css@latest ${name}`,
      dependencies: `pnpm add ${name}`,
      global: `pnpm ${name}`,
    },
    npm: {
      ["shadcn-css"]: `npx shadcn-css@latest ${name}`,
      dependencies: `npm install ${name}`,
      global: `npm ${name}`,
    },
    yarn: {
      ["shadcn-css"]: `yarn shadcn-css@latest ${name}`,
      dependencies: `yarn add ${name}`,
      global: `yarn ${name}`,
    },
    bun: {
      ["shadcn-css"]: `bunx --bun shadcn-css@latest ${name}`,
      dependencies: `bun add ${name}`,
      global: `bun ${name}`,
    },
  };

  return Object.fromEntries(
    Object.entries(templates).map(([k, v]) => [k, v[type]])
  );
}

function getAIPrompt(model: "v0" | "gpt" | "claude") {
  const models = {
    v0: "https://v0.app",
    gpt: "https://chatgpt.com",
    claude: "https://claude.ai/new",
  };
  const prompt = `I'm looking at this shadcn-css documentation: ${location.href}. \nHelp me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.`;

  return `${models[model]}?q=${encodeURIComponent(prompt)}`;
}

function getBaseStyles() {
  const [tokens] = Object.values(
    import.meta.glob("../assets/styles/base/tokens.css", {
      import: "default",
      query: "?raw",
      eager: true,
    })
  ) as [string];
  const [globals] = Object.values(
    import.meta.glob("../assets/styles/base/globals.css", {
      import: "default",
      query: "?raw",
      eager: true,
    })
  ) as [string];

  return { tokens, globals };
}

export {
  formatName,
  getCssVarValue,
  getCommands,
  getAIPrompt,
  getBaseStyles,
  copy,
  setMetaTags,
  usePagination,
};
