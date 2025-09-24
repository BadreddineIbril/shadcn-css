import { createRoot } from "react-dom/client";
import "@/assets/styles/main.css";
import AppRouter from "@/routes";
import { ThemeProvider } from "@/contexts/theme.content";
import { ComponentProvider } from "@/contexts/component.context";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider storageKey="vite-ui-theme">
    <ComponentProvider>
      <AppRouter />
    </ComponentProvider>
  </ThemeProvider>
);
