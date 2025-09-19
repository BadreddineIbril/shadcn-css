import { Link } from "react-router-dom";
import Button from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useComponent } from "@/contexts";

export default function Pagination() {
  const { component } = useComponent();

  return (
    <div className="pagination">
      {component?.pagination.previous && (
        <Button variant="outline" size="sm" asChild>
          <Link to={`/docs/components/${component?.pagination.previous.id}`}>
            <ArrowLeft /> {component?.pagination.previous.name}
          </Link>
        </Button>
      )}
      {component?.pagination.next && (
        <Button variant="outline" size="sm" asChild>
          <Link to={`/docs/components/${component?.pagination.next.id}`}>
            {component?.pagination.next.name}
            <ArrowRight />
          </Link>
        </Button>
      )}
    </div>
  );
}
