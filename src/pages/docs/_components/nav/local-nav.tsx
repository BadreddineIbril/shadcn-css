import Button from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function LocalNav() {
  const { hash } = useLocation();

  function isActive(id: string) {
    return hash === `#${id}`;
  }

  return (
    <aside className="local-nav">
      <div className="category">
        <span className="label">
          <AlignJustify /> On this page
        </span>
        <ul className="links">
          <li className="link">
            <Button variant="link" size="sm" asChild>
              <a href="#installation" data-active={isActive("installation")}>
                Installation
              </a>
            </Button>
          </li>
          <li className="link">
            <Button variant="link" size="sm" asChild>
              <a href="#usage" data-active={isActive("usage")}>
                Usage
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
