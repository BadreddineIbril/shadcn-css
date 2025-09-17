export interface RegistryDefinition {
  name: string;
  description: string;
  dependencies?: string[];
  registryDependencies?: string[];
}
