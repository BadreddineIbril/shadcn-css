import "./styles.css";
import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import Head from "@/components/misc/head";
import Button from "@/components/ui/button";
import Footer from "@/components/layout/_partials/footer";
import { copy, getCssVarValue, setMetaTags } from "@/utils/helpers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COLOR_TOKENS } from "@/utils/constants";

export default function Colors() {
  const [format, setFormat] = useState("oklch");
  const [copied, setIsCopied] = useState<number | null>(null);

  function onCopy(id: number, content: string) {
    copy(content, "Color copied!");
    setIsCopied(id);

    const timer = setTimeout(() => setIsCopied(null), 3000);
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    setMetaTags("Colors");
  }, []);

  return (
    <main data-page="colors">
      <Head
        heading="Colors"
        subheading="Scalable color tokens to keep your UI consistent. Ready to copy and
          paste into your project."
      />
      <div className="tokens-box">
        {COLOR_TOKENS.map((token, i) => (
          <div key={i} className="token-wrapper">
            <div className="head">
              <h4 className="title">{token}</h4>
              <div className="format">
                <span className="label">Format:</span>
                <Select value={format} onValueChange={setFormat}>
                  <SelectTrigger className="selector" size="sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oklch">oklch</SelectItem>
                    <SelectItem value="var">var</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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
                      data-invert={n > 400}
                      onClick={() =>
                        onCopy(
                          n,
                          format === "var"
                            ? `var(--color-${token}-${n})`
                            : getCssVarValue(`color-${token}-${n}`)
                        )
                      }>
                      {copied === n ? <Check /> : <Copy />}
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
