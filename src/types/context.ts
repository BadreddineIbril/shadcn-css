export interface ComponentContextDefinition {
  component?: {
    id: string;
    name: string;
    description: string;
    base: {
      preview: string;
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
    pagination: {
      previous?: {
        id: string;
        name: string;
      };
      next?: {
        id: string;
        name: string;
      };
    };
  };
  setComponent: (component: ComponentContextDefinition["component"]) => void;
}

interface CodeDefinition {
  type: "tsx" | "css" | "bash" | "json";
  content: string;
}
