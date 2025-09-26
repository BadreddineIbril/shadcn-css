import "./styles.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useComponent } from "@/contexts";
import GlobalNav from "./_components/nav/global-nav";
import LocalNav from "./_components/nav/local-nav";
import Output from "./_components/output";
import { getComponent } from "@/components/ui";
import NotFound from "@/pages/errors/not-found";
import { formatName, setMetaTags } from "@/utils/helpers";
import { DOCS_NAVIGATION } from "@/utils/constants";

export default function Docs() {
  const { section, id } = useParams();
  const { setComponent } = useComponent();
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    if (id) {
      const component = getComponent(id);

      if (!component) {
        setIsAvailable(false);

        return;
      }

      setMetaTags(formatName(component.id), component.description);
      setComponent(component);
      setIsAvailable(true);
    }
  }, [id]);

  useEffect(() => {
    if (
      !section ||
      (section !== "components" &&
        !DOCS_NAVIGATION.filter(
          (d) => d.name === "Getting Started" || d.name === "Installation"
        )
          .flatMap((d) => d.links)
          .find((l) => l.id === section))
    ) {
      setIsAvailable(false);

      return;
    }

    if (section) setMetaTags(formatName(section));
  }, [section]);

  if (!isAvailable) {
    return <NotFound />;
  }

  return (
    <main data-page="docs">
      <GlobalNav />
      <Output />
      <LocalNav />
    </main>
  );
}
