import { Link } from "react-router-dom";
import Button from "@/components/ui/button";
import { useComponent } from "@/contexts";
import { DOCS_NAVIGATION } from "@/utils/constants";
import type { ReactNode } from "react";

export default function GlobalNav({ children }: { children?: ReactNode }) {
  const { component } = useComponent();

  return (
    <aside className="global-nav">
      {children}
      {DOCS_NAVIGATION.map((category, i) => {
        const Icon = category.icon;

        return (
          <div className="category" key={i}>
            <span className="label">
              <Icon /> {category.name}
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
        );
      })}
    </aside>
  );
}
