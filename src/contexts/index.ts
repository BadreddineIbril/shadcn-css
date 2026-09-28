import { useContext } from "react";
import { ComponentContext } from "./component.context";
import { LibraryContext } from "./library.context";
import { ThemeProviderContext } from "./theme.content";

const useComponent = () => {
  const ctx = useContext(ComponentContext);
  if (!ctx)
    throw new Error("useComponent must be used within a ComponentProvider");

  return ctx;
};

const useLibrary = () => {
  const ctx = useContext(LibraryContext);
  if (!ctx) throw new Error("useLibrary must be used within a LibraryProvider");

  return ctx;
};

const useTheme = () => {
  const ctx = useContext(ThemeProviderContext);

  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");

  return ctx;
};

export { useComponent, useLibrary, useTheme };
