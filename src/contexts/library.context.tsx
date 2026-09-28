import type { Library, LibraryContextDefinition } from "@/types/context";
import { createContext, useState, type ReactNode } from "react";

const STORAGE_KEY = "shadcn-css-library";

const LibraryContext = createContext<LibraryContextDefinition | null>(null);

function getStoredLibrary(): Library {
  try {
    return localStorage.getItem(STORAGE_KEY) === "base" ? "base" : "radix";
  } catch {
    return "base";
  }
}

const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [library, updateLibrary] = useState<Library>(getStoredLibrary);

  function setLibrary(library: Library) {
    try {
      localStorage.setItem(STORAGE_KEY, library);
    } catch {
      /* storage unavailable */
    }
    updateLibrary(library);
  }

  return (
    <LibraryContext value={{ library, setLibrary }}>{children}</LibraryContext>
  );
};

export { LibraryContext, LibraryProvider };
