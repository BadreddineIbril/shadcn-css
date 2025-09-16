import Button from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LocalNav() {
  return (
    <aside className="local-nav">
      <div className="category">
        <span className="label">On this page</span>
        <ul className="links">
          <li className="link">
            <Button variant="link" size="sm" asChild>
              <Link to="#">Installation</Link>
            </Button>
          </li>
          <li className="link">
            <Button variant="link" size="sm" asChild>
              <Link to="#">Usage</Link>
            </Button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
