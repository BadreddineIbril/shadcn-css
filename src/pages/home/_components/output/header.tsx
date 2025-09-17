import Button from "@/components/ui/button";
import { useComponent } from "@/contexts";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const { component } = useComponent();

  return (
    <div className="header">
      <h1 className="heading">{component?.name}</h1>
      <div className="actions">
        {component?.pagination.previous?.id && (
          <Button variant="outline" size="sm" aria-label="back" asChild>
            <Link to={`/docs/components/${component?.pagination.previous?.id}`}>
              <ArrowLeft />
            </Link>
          </Button>
        )}
        {component?.pagination.next?.id && (
          <Button variant="outline" size="sm" aria-label="back" asChild>
            <Link to={`/docs/components/${component?.pagination.next?.id}`}>
              <ArrowRight />
            </Link>
          </Button>
        )}
      </div>
      <p className="subheading">{component?.description}</p>
    </div>
  );
}
