import "./styles.css";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useComponent, useLibrary } from "@/contexts";
import GlobalNav from "./_components/nav/global-nav";
import LocalNav from "./_components/nav/local-nav";
import Output from "./_components/output";
import { getComponent } from "@/components/registry";
import NotFound from "@/pages/errors/not-found";
import { formatName, getComponentPath, setMetaTags } from "@/utils/helpers";
import type { Library } from "@/types/context";
import { DOCS_NAVIGATION, LIBRARIES } from "@/utils/constants";

export default function Docs() {
  const { section, base, id } = useParams();
  const { setComponent } = useComponent();
  const { library, setLibrary } = useLibrary();
  const [isAvailable, setIsAvailable] = useState(true);

  const isValidBase = base === undefined || LIBRARIES.includes(base as Library);
  const activeLibrary = (base as Library | undefined) ?? library;

  useEffect(() => {
    if (base && isValidBase && base !== library) setLibrary(base as Library);
  }, [base]);

  useEffect(() => {
    if (id && isValidBase) {
      const component = getComponent(id, activeLibrary);

      if (!component) {
        setIsAvailable(false);

        return;
      }

      setMetaTags(formatName(component.id), component.description);
      setComponent(component);
      setIsAvailable(true);
    }
  }, [id, activeLibrary]);

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

  if (!isValidBase || (base && section !== "components")) {
    return <NotFound />;
  }

  if (section === "components" && id && !base) {
    return <Navigate replace to={getComponentPath(id, library)} />;
  }

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
