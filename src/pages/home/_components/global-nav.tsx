import Button from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function GlobalNav() {
  const LINKS = [
    {
      label: "Getting Started",
      links: [
        { label: "Introduction", href: "introduction" },
        { label: "Installation", href: "installation" },
        { label: "components.json", href: "components.json" },
        { label: "Theming", href: "theming" },
        { label: "Dark mode", href: "dark-mode" },
        { label: "CLI", href: "cli" },
        { label: "Typography", href: "typography" },
        { label: "Figma", href: "figma" },
        { label: "Changelog", href: "changelog" },
      ],
    },
    {
      label: "Installation",
      links: [
        { label: "Vite", href: "vite" },
        { label: "Next.js", href: "next" },
        { label: "Laravel", href: "laravel" },
        { label: "React Router", href: "react-router" },
        { label: "Astro", href: "astro" },
        { label: "TanStack Start", href: "tanstack" },
        { label: "TanStack Router", href: "tanstack-router" },
        { label: "Manual", href: "manual" },
      ],
    },
    {
      label: "Components",
      links: [
        { label: "Accordion", href: "accordion" },
        { label: "Alert", href: "alert" },
        { label: "Alert Dialog", href: "alert-dialog" },
      ],
    },
  ];

  return (
    <aside className="global-nav">
      {LINKS.map((category, i) => (
        <div className="category" key={i}>
          <span className="label">{category.label}</span>
          <ul className="links">
            {category.links.map((link) => (
              <li className="link" key={link.href}>
                <Button variant="ghost" size="sm" asChild>
                  <Link to={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
