import { Link, useParams } from "react-router-dom";
import Button from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePagination } from "@/utils/helpers";

export default function Pagination() {
  const { section, id } = useParams();
  const { prev, next } = usePagination(
    section === "components" && id ? id : (section ?? "")
  );

  return (
    <div className="pagination">
      {prev?.id && (
        <Button variant="outline" size="sm" asChild>
          <Link
            to={`/docs${section === "components" ? "/components" : ""}/${prev.id}`}>
            <ArrowLeft /> {prev.name}
          </Link>
        </Button>
      )}
      {next?.id && (
        <Button variant="outline" size="sm" asChild>
          <Link
            to={`/docs${section === "components" ? "/components" : ""}/${next.id}`}>
            {next.name}
            <ArrowRight />
          </Link>
        </Button>
      )}
    </div>
  );
}
