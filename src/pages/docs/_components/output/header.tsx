import Button from "@/components/ui/button";
import { useComponent } from "@/contexts";
import { usePagination } from "@/utils/helpers";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function Header() {
  const { section, id } = useParams();
  const { component } = useComponent();
  const { prev, next } = usePagination(
    section === "components" && id ? id : (section ?? "")
  );

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
        {prev?.id && (
          <Button variant="outline" size="sm" asChild>
            <Link
              to={`/docs${section === "components" ? "/components" : ""}/${prev.id}`}>
              <ArrowLeft />
            </Link>
          </Button>
        )}
        {next?.id && (
          <Button variant="outline" size="sm" asChild>
            <Link
              to={`/docs${section === "components" ? "/components" : ""}/${next.id}`}>
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
