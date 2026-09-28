import type { ComponentType } from "react";

export type Library = "radix" | "base";

export interface ComponentContextDefinition {
  component?: {
    id: string;
    name: string;
    description: string;
    library: Library;
    base: {
      preview: ComponentType<unknown>;
      code: CodeDefinition;
    };
    installation: {
      manual: {
        dependencies?: string[];
        code: CodeDefinition[];
      };
    };
    usage: {
      code: CodeDefinition;
    };
  };
  setComponent: (component: ComponentContextDefinition["component"]) => void;
}

export interface LibraryContextDefinition {
  library: Library;
  setLibrary: (library: Library) => void;
}

interface CodeDefinition {
  type: "tsx" | "css" | "bash" | "json";
  content: string;
}
