import { Link } from "react-router-dom";
import Button from "@/components/ui/button";
import { Box, Puzzle, Send } from "lucide-react";
import { COMPONENTS } from "@/components/ui";
import { useComponent } from "@/contexts";

export default function GlobalNav() {
  const { component } = useComponent();

  const LINKS = [
    {
      icon: <Send />,
      name: "Getting Started",
      links: [
        { name: "Introduction", id: "introduction" },
        { name: "Installation", id: "installation" },
        { name: "components.json", id: "components.json" },
        { name: "Theming", id: "theming" },
        { name: "Dark mode", id: "dark-mode" },
        { name: "CLI", id: "cli" },
        { name: "Typography", id: "typography" },
        { name: "Figma", id: "figma" },
        { name: "Changelog", id: "changelog" },
      ],
    },
    {
      icon: <Box />,
      name: "Installation",
      links: [
        { name: "Vite", id: "vite" },
        { name: "Next.js", id: "next" },
        { name: "Laravel", id: "laravel" },
        { name: "React Router", id: "react-router" },
        { name: "Astro", id: "astro" },
        { name: "TanStack Start", id: "tanstack" },
        { name: "TanStack Router", id: "tanstack-router" },
        { name: "Manual", id: "manual" },
      ],
    },
    {
      icon: <Puzzle />,
      name: "Components",
      links: Object.values(COMPONENTS),
    },
  ];

  return (
    <aside className="global-nav">
      {LINKS.map((category, i) => (
        <div className="category" key={i}>
          <span className="label">
            {category.icon} {category.name}
          </span>
          <ul className="links">
            {category.links.map((link) => (
              <li className="link" key={link.id}>
                <Button
                  variant={component?.id === link.id ? "secondary" : "ghost"}
                  size="sm"
                  asChild>
                  <Link to={`/docs${i < 2 ? "" : "/components"}/${link.id}`}>
                    {link.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
