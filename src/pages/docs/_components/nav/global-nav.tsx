import { Link, useParams } from "react-router-dom";
import Button from "@/components/ui/button";
import { useComponent, useLibrary } from "@/contexts";
import type { Library } from "@/types/context";
import { DOCS_NAVIGATION, NEW_COMPONENTS } from "@/utils/constants";
import type { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BaseUiIcon from "@/assets/icons/base-ui";
import RadixUiIcon from "@/assets/icons/radix-ui";
import { SettingsIcon } from "lucide-react";

export default function GlobalNav({ children }: { children?: ReactNode }) {
  const { section } = useParams();
  const { component } = useComponent();
  const { library, setLibrary } = useLibrary();

  return (
    <aside className="global-nav">
      {children}
      <div className="category library">
        <span className="label">
          <SettingsIcon />
          Primitives
        </span>
        <Tabs
          value={library}
          onValueChange={(value) => value && setLibrary(value as Library)}>
          <TabsList style={{ width: "100%" }}>
            <TabsTrigger value="base">
              <BaseUiIcon />
              Base UI
            </TabsTrigger>
            <TabsTrigger value="radix">
              <RadixUiIcon />
              Radix UI
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {DOCS_NAVIGATION.map((category, i) => {
        const Icon = category.icon;

        return (
          <div className="category" key={i}>
            <span className="label">
              <Icon /> {category.name}
            </span>
            <ul className="links">
              {category.links.map((link) => (
                <li
                  className="link"
                  data-new={!!NEW_COMPONENTS.find((c) => link.id === c)}
                  key={link.id}>
                  <Button
                    variant={
                      (section === "components" ? component?.id : section) ===
                      link.id
                        ? "secondary"
                        : "ghost"
                    }
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
