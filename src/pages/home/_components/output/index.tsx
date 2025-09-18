import Base from "./base";
import Header from "./header";
import Installation from "./installation";
import Pagination from "./pagination";
import Usage from "./usage";
import Footer from "@/components/layout/_partials/footer";
import { COMPONENTS } from "@/components/ui";
import { Link, useParams } from "react-router-dom";

export default function Output() {
  const { id } = useParams();

  return (
    <div className="output">
      <Header />
      {id ? (
        <div className="content">
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
      )}
      <Pagination />
      <Footer />
    </div>
  );
}
