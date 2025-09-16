import "./styles.css";
import GlobalNav from "./_components/global-nav";
import LocalNav from "./_components/local-nav";
import Output from "./_components/output";

export default function Home() {
  return (
    <main data-page="home">
      <GlobalNav />
      <Output />
      <LocalNav />
    </main>
  );
}
