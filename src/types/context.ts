import type { ComponentType } from "react";

export interface ComponentContextDefinition {
  component?: {
    id: string;
    name: string;
    description: string;
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

interface CodeDefinition {
  type: "tsx" | "css" | "bash" | "json";
  content: string;
}
