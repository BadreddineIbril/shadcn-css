import { createRoot } from "react-dom/client";
import "@/assets/styles/globals.css";
import AppRouter from "@/routes";

createRoot(document.getElementById("root")!).render(<AppRouter />);
