import AstroIcon from "@/assets/icons/astro";
import LaravelIcon from "@/assets/icons/laravel";
import NextJsIcon from "@/assets/icons/next-js";
import ReactIcon from "@/assets/icons/react";
import ReactRouterIcon from "@/assets/icons/react-router";
import TankStackIcon from "@/assets/icons/tanstack";
import ViteIcon from "@/assets/icons/vite";
import Button from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Installation() {
  const options = [
    { label: "Vite", value: "vite", icon: <ViteIcon /> },
    { label: "Next.js", value: "next", icon: <NextJsIcon /> },
    { label: "Laravel", value: "laravel", icon: <LaravelIcon /> },
    { label: "React Router", value: "react-router", icon: <ReactRouterIcon /> },
    { label: "Astro", value: "astro", icon: <AstroIcon /> },
    { label: "TanStack Start", value: "tanstack", icon: <TankStackIcon /> },
    {
      label: "TanStack Router",
      value: "tanstack-router",
      icon: <TankStackIcon />,
    },
    { label: "Manual", value: "manual", icon: <ReactIcon /> },
  ];

  return (
    <div data-content="installation">
      <article id="pick-your-framework">
        <h3>Pick Your Framework</h3>
        <p>
          Start by selecting your framework of choice. Then follow the
          instructions to install the dependencies and structure your app.
          shadcn/ui is built to work with all React frameworks.
        </p>
        <ul className="frameworks">
          {options.map((opt) => (
            <li key={opt.value}>
              <Button variant="outline" size="lg" className="framework" asChild>
                <Link to={`/docs/${opt.value}`}>
                  {opt.icon}
                  {opt.label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
