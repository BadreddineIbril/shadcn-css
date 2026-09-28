import type { RegistryDefinition } from "@/types/core";
import type { ComponentContextDefinition, Library } from "@/types/context";
import type { ComponentType } from "react";
import { formatName } from "@/utils/helpers";

/**
 * Each library lives in its own folder so the CLI can fetch raw files by path:
 * - radix:   ./ui/<name>/*        + ./examples/<name>/*
 * - base-ui: ./base-ui/<name>/*   + ./examples/base-ui/<name>/*
 */
const sources = {
  radix: {
    tsx: import.meta.glob<string>("./ui/*/index.tsx", {
      query: "?raw",
      import: "default",
      eager: true,
    }),
    css: import.meta.glob<string>("./ui/*/styles.module.css", {
      query: "?raw",
      import: "default",
      eager: true,
    }),
    registries: import.meta.glob<RegistryDefinition>("./ui/*/registry.json", {
      import: "default",
      eager: true,
    }),
    demos: import.meta.glob<ComponentType<unknown>>("./examples/*/demo.tsx", {
      import: "default",
      eager: true,
    }),
    demosRaw: import.meta.glob<string>("./examples/*/demo.tsx", {
      query: "?raw",
      import: "default",
      eager: true,
    }),
    usages: import.meta.glob<string>("./examples/*/usage.tsx", {
      query: "?raw",
      import: "default",
      eager: true,
    }),
  },
  base: {
    tsx: import.meta.glob<string>("./base-ui/*/index.tsx", {
      query: "?raw",
      import: "default",
      eager: true,
    }),
    css: import.meta.glob<string>("./base-ui/*/styles.module.css", {
      query: "?raw",
      import: "default",
      eager: true,
    }),
    registries: import.meta.glob<RegistryDefinition>(
      "./base-ui/*/registry.json",
      { import: "default", eager: true }
    ),
    demos: import.meta.glob<ComponentType<unknown>>(
      "./examples/base-ui/*/demo.tsx",
      { import: "default", eager: true }
    ),
    demosRaw: import.meta.glob<string>("./examples/base-ui/*/demo.tsx", {
      query: "?raw",
      import: "default",
      eager: true,
    }),
    usages: import.meta.glob<string>("./examples/base-ui/*/usage.tsx", {
      query: "?raw",
      import: "default",
      eager: true,
    }),
  },
} satisfies Record<Library, unknown>;

const ROOTS: Record<Library, { ui: string; examples: string }> = {
  radix: { ui: "./ui", examples: "./examples" },
  base: { ui: "./base-ui", examples: "./examples/base-ui" },
};

const toUserPaths = (code?: string) =>
  code?.replaceAll("@/components/base-ui/", "@/components/ui/") ?? "";

export const COMPONENTS: Record<string, { id: string; name: string }> =
  Object.fromEntries(
    Object.keys(sources.radix.registries).map((path) => {
      const name = path.split("/")[2];
      return [name, { id: name, name: formatName(name) }];
    })
  );

export function hasComponent(name: string, library: Library) {
  return !!sources[library].registries[
    `${ROOTS[library].ui}/${name}/registry.json`
  ];
}

export function getComponent(
  name: string,
  library: Library = "radix"
): ComponentContextDefinition["component"] {
  const lib: Library = hasComponent(name, library) ? library : "radix";
  const src = sources[lib];
  const { ui, examples } = ROOTS[lib];

  const registry = src.registries[`${ui}/${name}/registry.json`];
  if (!registry) return undefined;

  const tsx = toUserPaths(src.tsx[`${ui}/${name}/index.tsx`]);
  const css = src.css[`${ui}/${name}/styles.module.css`];
  const demo = src.demos[`${examples}/${name}/demo.tsx`];
  const demoCode = toUserPaths(src.demosRaw[`${examples}/${name}/demo.tsx`]);
  const usage = toUserPaths(src.usages[`${examples}/${name}/usage.tsx`]);

  return {
    ...COMPONENTS[name],
    description: registry.description,
    library: lib,
    base: {
      preview: demo,
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
