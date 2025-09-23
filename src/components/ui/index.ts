import type { RegistryDefinition } from "@/types/core";
import type { ComponentContextDefinition } from "@/types/context";
import type { ComponentType } from "react";
import { formatName } from "@/utils/helpers";

const tsxFiles = import.meta.glob("./*/index.tsx", { as: "raw", eager: true });
const cssFiles = import.meta.glob("./*/styles.module.css", {
  as: "raw",
  eager: true,
});
const registries = import.meta.glob("./*/registry.json", { eager: true });
const demoFiles = import.meta.glob("../examples/*/demo.tsx", {
  eager: true,
});
const demoRawFiles = import.meta.glob("../examples/*/demo.tsx", {
  as: "raw",
  eager: true,
});
const usageFiles = import.meta.glob("../examples/*/usage.tsx", {
  as: "raw",
  eager: true,
});

// All Components
export const COMPONENTS: Record<string, { id: string; name: string }> = {};

for (const path in registries) {
  const name = path.split("/")[1];
  COMPONENTS[name] = {
    id: name,
    name: formatName(name),
  };
}

// Get Component
export function getComponent(
  name: string
): ComponentContextDefinition["component"] {
  const registry = registries[`./${name}/registry.json`] as
    | RegistryDefinition
    | undefined;

  if (!registry) {
    return undefined;
  }

  const tsx = tsxFiles[`./${name}/index.tsx`];
  const css = cssFiles[`./${name}/styles.module.css`];
  const demo = demoFiles[`../examples/${name}/demo.tsx`] as {
    default: ComponentType<unknown>;
  };
  const demoCode = demoRawFiles[`../examples/${name}/demo.tsx`];

  const usage = usageFiles[`../examples/${name}/usage.tsx`];

  const components = Object.values(COMPONENTS);
  const index = components.findIndex((i) => i.id === COMPONENTS[name].id);

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
    usage: {
      code: { type: "tsx", content: usage },
    },
    pagination: {
      previous: components[index - 1],
      next: components[index + 1],
    },
  };
}
