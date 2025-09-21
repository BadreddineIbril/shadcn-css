import "./styles.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useComponent } from "@/contexts";
import GlobalNav from "./_components/nav/global-nav";
import LocalNav from "./_components/nav/local-nav";
import Output from "./_components/output";
import { getComponent } from "@/components/ui";

export default function Docs() {
  const { id } = useParams();
  const { setComponent } = useComponent();

  useEffect(() => {
    if (id) {
      setComponent(getComponent(id));
    }
  }, [id]);

  return (
    <main data-page="docs">
      <GlobalNav />
      <Output />
      <LocalNav />
    </main>
  );
}
