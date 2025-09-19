import Button from "@/components/ui/button";
import { useComponent } from "@/contexts";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function Header() {
  const { section, id } = useParams();
  const { component } = useComponent();

  return (
    <div className="header">
      <h1 className="heading">
        {section === "components"
          ? !id
            ? "Components"
            : component?.name
          : section}
      </h1>
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
      <p className="subheading">
        {section === "components"
          ? !id
            ? "Here you can find all the components available in the library. We are working on adding more components."
            : component?.description
          : "Description"}
      </p>
    </div>
  );
}
