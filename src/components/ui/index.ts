import type { RegistryDefinition } from "@/types/core";
import type { ComponentContextDefinition } from "@/types/context";

const tsxFiles = import.meta.glob("./*/index.tsx", { as: "raw", eager: true });
const cssFiles = import.meta.glob("./*/styles.module.css", {
  as: "raw",
  eager: true,
});
const registries = import.meta.glob("./*/registry.json", { eager: true });

// All Components
export const COMPONENTS: Record<string, { id: string; name: string }> = {};

for (const path in tsxFiles) {
  const name = path.split("/")[1];
  COMPONENTS[name] = {
    id: name,
    name: (name.charAt(0).toUpperCase() + name.slice(1)).replace("-", " "),
  };
}

// Get Component
export function getComponent(
  name: string
): ComponentContextDefinition["component"] {
  const tsx = tsxFiles[`./${name}/index.tsx`];
  const css = cssFiles[`./${name}/styles.module.css`];
  const registry = registries[`./${name}/registry.json`] as RegistryDefinition;

  const components = Object.values(COMPONENTS);
  const index = components.findIndex((i) => i.id === COMPONENTS[name].id);

  return {
    ...COMPONENTS[name],
    description: registry.description,
    base: {
      preview: "Preview",
      code: { type: "tsx", content: tsx },
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
      code: { type: "tsx", content: tsx },
    },
    pagination: {
      previous: components[index - 1],
      next: components[index + 1],
    },
  };
}
