import type { RegistryDefinition } from "@/types/core";
import type { ComponentContextDefinition } from "@/types/context";
import type { ComponentType } from "react";
import { formatName } from "@/utils/helpers";

const tsxFiles = import.meta.glob<string>("./*/index.tsx", {
  query: "?raw",
  import: "default",
  eager: true,
});
const cssFiles = import.meta.glob<string>("./*/styles.module.css", {
  query: "?raw",
  import: "default",
  eager: true,
});
const registries = import.meta.glob("./*/registry.json", { eager: true });
const demoFiles = import.meta.glob("../examples/*/demo.tsx", { eager: true });
const demoRawFiles = import.meta.glob<string>("../examples/*/demo.tsx", {
  query: "?raw",
  import: "default",
  eager: true,
});
const usageFiles = import.meta.glob<string>("../examples/*/usage.tsx", {
  query: "?raw",
  import: "default",
  eager: true,
});

// All Components
export const COMPONENTS: Record<string, { id: string; name: string }> =
  Object.fromEntries(
    Object.keys(registries).map((path) => {
      const name = path.split("/")[1];
      return [name, { id: name, name: formatName(name) }];
    })
  );

// Get Single Component
export function getComponent(
  name: string
): ComponentContextDefinition["component"] {
  const registry = registries[`./${name}/registry.json`] as
    | RegistryDefinition
    | undefined;
  if (!registry) return undefined;

  const tsx = tsxFiles[`./${name}/index.tsx`];
  const css = cssFiles[`./${name}/styles.module.css`];
  const demo = demoFiles[`../examples/${name}/demo.tsx`] as {
    default: ComponentType<unknown>;
  };
  const demoCode = demoRawFiles[`../examples/${name}/demo.tsx`];
  const usage = usageFiles[`../examples/${name}/usage.tsx`];

  return {
    ...COMPONENTS[name],
    description: registry.description,
    base: {
      preview: demo.default,
      code: { type: "tsx", content: demoCode },
    },
    installation: {
      manual: {
        dependencies: registry.dependencies,
        code: [
          { type: "tsx", content: tsx },
          { type: "css", content: css },
        ],
      },
    },
    usage: { code: { type: "tsx", content: usage } },
  };
}
