import "./styles.css";
import Hero from "./_components/hero";
import Inspiration from "./_components/inspiration";
import Footer from "@/components/layout/_partials/footer";

export default function Home() {
  return (
    <main data-page="home">
      <Hero />
      <Inspiration />
      <Footer />
    </main>
  );
}
