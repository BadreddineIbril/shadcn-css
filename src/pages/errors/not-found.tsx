import "./styles.css";
import { Link } from "react-router-dom";
import Separator from "@/components/ui/separator";
import Button from "@/components/ui/button";
import { useEffect } from "react";
import { setMetaTags } from "@/utils/helpers";

function NotFound() {
  useEffect(() => {
    setMetaTags("404");
  }, []);

  return (
    <main data-page="404">
      <div className="content">
        <h3 className="status">404</h3>
        <Separator orientation="vertical" />
        <span className="message">This page could not be found.</span>
      </div>
      <Button variant="outline" asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </main>
  );
}

export default NotFound;
