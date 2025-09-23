import "./styles.css";
import Hero from "./_components/hero";
import Inspiration from "./_components/inspiration";
import Footer from "@/components/layout/_partials/footer";
import { useEffect } from "react";
import { setMetaTags } from "@/utils/helpers";

export default function Home() {
  useEffect(() => {
    setMetaTags("Build your Component Library");
  }, []);

  return (
    <main data-page="home">
      <Hero />
      <Inspiration />
      <Footer />
    </main>
  );
}
