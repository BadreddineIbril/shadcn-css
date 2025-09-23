import type { LucideIcon } from "lucide-react";

export interface RegistryDefinition {
  name: string;
  description: string;
  dependencies?: string[];
  registryDependencies?: string[];
}

export interface LinkDefinition {
  id: string;
  name: string;
}

export interface NavigationDefinition {
  name: string;
  icon: LucideIcon;
  links: LinkDefinition[];
}

export type PackageManagers = "pnpm" | "npm" | "yarn" | "bun";
