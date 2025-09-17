import type { ComponentContextDefinition } from "@/types/context";
import { createContext, useState, type ReactNode } from "react";

const ComponentContext = createContext<ComponentContextDefinition | null>(null);

const ComponentProvider = ({ children }: { children: ReactNode }) => {
  const [component, updateComponent] =
    useState<ComponentContextDefinition["component"]>();

  function setComponent(component: ComponentContextDefinition["component"]) {
    updateComponent(component);
  }

  return (
    <ComponentContext value={{ component: component, setComponent }}>
      {children}
    </ComponentContext>
  );
};

export { ComponentContext, ComponentProvider };
