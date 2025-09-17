import { useContext } from "react";
import { ComponentContext } from "./component.context";

const useComponent = () => {
  const ctx = useContext(ComponentContext);
  if (!ctx)
    throw new Error(
      "useComponent component must be used within a ComponentProvider"
    );

  return ctx;
};

export { useComponent };
