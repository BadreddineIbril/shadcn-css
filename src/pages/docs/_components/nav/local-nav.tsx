import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import { useLocation, useParams } from "react-router-dom";

export default function LocalNav() {
  const { hash } = useLocation();
  const { section } = useParams();
  const [links, setLinks] = useState<{ label: string; value: string }[]>([]);

  function isActive(id: string) {
    return hash === `#${id}`;
  }

  useEffect(() => {
    const allLinks = document
      .querySelector("[data-content]")
      ?.querySelectorAll("article[id]");

    if (!allLinks?.length) {
      setLinks([]);
      return;
    }

    setLinks(
      [...allLinks].map((l) => ({
        label: l.querySelector("h3")?.textContent ?? "",
        value: l.id,
      }))
    );
  }, [section]);

  return (
    <aside className="local-nav">
      <div className="category">
        <span className="label">
          <AlignJustify /> On this page
        </span>
        <ul className="links">
          {links.length > 0 &&
            links.map((l) => (
              <li key={l.value} className="link">
                <Button variant="link" size="sm" asChild>
                  <a href={`#${l.value}`} data-active={isActive(l.value)}>
                    {l.label}
                  </a>
                </Button>
              </li>
            ))}
          {section === "components" &&
            [
              { label: "Installation", value: "installation" },
              { label: "Usage", value: "usage" },
            ].map((l) => (
              <li key={l.value} className="link">
                <Button variant="link" size="sm" asChild>
                  <a href={`#${l.value}`} data-active={isActive(l.value)}>
                    {l.label}
                  </a>
                </Button>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
}
