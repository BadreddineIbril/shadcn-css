import "./styles.css";
import { Copy } from "lucide-react";
import Button from "@/components/ui/button";
import Footer from "@/components/layout/_partials/footer";

export default function Colors() {
  const TOKENS = [
    "neutral",
    "stone",
    "zinc",
    "slate",
    "gray",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];

  return (
    <main data-page="colors">
      <section className="head-box">
        <h1 className="heading">Colors</h1>
        <p className="subheading">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
          ipsam.
        </p>
      </section>
      <div className="tokens-box">
        {TOKENS.map((token, i) => (
          <div key={i} className="token-wrapper">
            <div className="head">
              <h4 className="title">{token}</h4>
            </div>
            <ul className="token-list">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                (n) => (
                  <li key={n} className="token-item">
                    <span
                      className="color"
                      style={{
                        backgroundColor: `var(--color-${token}-${n})`,
                      }}
                    />
                    <span className="name">
                      {token}-{n}
                    </span>
                    <Button
                      className="copy"
                      variant="ghost"
                      size="xs"
                      aria-label="copy"
                      data-invert={n > 400}>
                      <Copy />
                    </Button>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
