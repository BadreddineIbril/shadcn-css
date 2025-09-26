import Base from "./_partials/base";
import Content from "./_partials/content";
import Installation from "./_partials/installation";
import Pagination from "./_partials/pagination";
import Usage from "./_partials/usage";
import Head from "@/components/misc/head";
import Footer from "@/components/layout/_partials/footer";
import { COMPONENTS } from "@/components/ui";
import { Link, useParams } from "react-router-dom";
import { useComponent } from "@/contexts";
import { DOCS_NAVIGATION } from "@/utils/constants";

export default function Output() {
  const { section, id } = useParams();
  const { component } = useComponent();

  const heading =
    section === "components"
      ? !id
        ? "Components"
        : component?.name
      : DOCS_NAVIGATION.flatMap((d) => d.links).find((l) => l.id === section)
          ?.name;
  const subheading =
    section === "components"
      ? !id
        ? "Here you can find all the components available in the library. We are working on adding more components."
        : component?.description
      : DOCS_NAVIGATION.flatMap((d) => d.links).find((l) => l.id === section)
          ?.description;

  return (
    <div className="output">
      <Head heading={heading ?? ""} subheading={subheading ?? ""} withActions />
      {section === "components" ? (
        id ? (
          <div className="component">
            <Base />
            <Installation />
            <Usage />
          </div>
        ) : (
          <div className="components">
            <ul className="cards">
              {Object.values(COMPONENTS).map((item) => (
                <li key={item.id} className="card">
                  <Link to={`/docs/components/${item.id}`} className="link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      ) : (
        <Content />
      )}
      <Pagination />
      <Footer />
    </div>
  );
}
