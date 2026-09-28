import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "@/components/ui/button";
import { useComponent, useLibrary } from "@/contexts";
import type { Library } from "@/types/context";
import { DOCS_NAVIGATION, NEW_LINKS } from "@/utils/constants";
import { getComponentPath } from "@/utils/helpers";
import type { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BaseUiIcon from "@/assets/icons/base-ui";
import RadixUiIcon from "@/assets/icons/radix-ui";
import { SettingsIcon } from "lucide-react";

export default function GlobalNav({ children }: { children?: ReactNode }) {
  const { section, id } = useParams();
  const { component } = useComponent();
  const { library, setLibrary } = useLibrary();
  const navigate = useNavigate();

  function onLibraryChange(value: Library) {
    setLibrary(value);
    if (section === "components" && id) navigate(getComponentPath(id, value));
  }

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
          onValueChange={(value) => value && onLibraryChange(value as Library)}>
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
                  data-new={!!NEW_LINKS.find((c) => link.id === c)}
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
                    <Link
                      to={
                        i < 2
                          ? `/docs/${link.id}`
                          : getComponentPath(link.id, library)
                      }>
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
