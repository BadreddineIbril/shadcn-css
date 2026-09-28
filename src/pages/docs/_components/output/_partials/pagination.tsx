import { Link, useParams } from "react-router-dom";
import Button from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLibrary } from "@/contexts";
import { getComponentPath, usePagination } from "@/utils/helpers";

export default function Pagination() {
  const { section, id } = useParams();
  const { library } = useLibrary();
  const { prev, next } = usePagination(
    section === "components" && id ? id : (section ?? "")
  );

  return (
    <div className="pagination">
      {prev?.id && (
        <Button variant="outline" size="sm" asChild>
          <Link
            to={
              section === "components" && prev.id !== "manual"
                ? getComponentPath(prev.id, library)
                : `/docs/${prev.id}`
            }>
            <ArrowLeft /> {prev.name}
          </Link>
        </Button>
      )}
      {next?.id && (
        <Button variant="outline" size="sm" asChild>
          <Link
            to={
              section === "components" || section === "manual"
                ? getComponentPath(next.id, library)
                : `/docs/${next.id}`
            }>
            {next.name}
            <ArrowRight />
          </Link>
        </Button>
      )}
    </div>
  );
}
