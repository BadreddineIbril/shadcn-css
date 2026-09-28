import { createRoot } from "react-dom/client";
import "@/assets/styles/main.css";
import AppRouter from "@/routes";
import { ThemeProvider } from "@/contexts/theme.content";
import { LibraryProvider } from "@/contexts/library.context";
import { ComponentProvider } from "@/contexts/component.context";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider storageKey="vite-ui-theme">
    <LibraryProvider>
      <ComponentProvider>
        <AppRouter />
      </ComponentProvider>
    </LibraryProvider>
  </ThemeProvider>
);
