import Base from "./base";
import Header from "./header";
import Installation from "./installation";
import Pagination from "./pagination";
import Usage from "./usage";
import Footer from "@/components/layout/_partials/footer";

export default function Output() {
  return (
    <div className="output">
      <Header />
      <div className="content">
        <Base />
        <Installation />
        <Usage />
      </div>
      <Pagination />
      <Footer />
    </div>
  );
}
