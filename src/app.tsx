import { createRoot } from "react-dom/client";
import "@/assets/styles/globals.css";
import AppRouter from "@/routes";
import { ComponentProvider } from "@/contexts/component.context";

createRoot(document.getElementById("root")!).render(
  <ComponentProvider>
    <AppRouter />
  </ComponentProvider>
);
