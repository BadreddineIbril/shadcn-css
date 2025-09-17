import Button from "@/components/ui/button";
import { AlignJustify } from "lucide-react";

export default function LocalNav() {
  return (
    <aside className="local-nav">
      <div className="category">
        <span className="label">
          <AlignJustify /> On this page
        </span>
        <ul className="links">
          <li className="link">
            <Button variant="link" size="sm" asChild>
              <a href="#installation">Installation</a>
            </Button>
          </li>
          <li className="link">
            <Button variant="link" size="sm" asChild>
              <a href="#usage">Usage</a>
            </Button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
