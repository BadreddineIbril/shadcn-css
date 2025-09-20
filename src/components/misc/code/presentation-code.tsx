import Button from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "@/contexts";
import { Copy } from "lucide-react";
import ShikiHighlighter, {
  createHighlighterCore,
  createOnigurumaEngine,
} from "react-shiki/core";

const highlighter = await createHighlighterCore({
  themes: [
    import("@shikijs/themes/github-light"),
    import("@shikijs/themes/github-dark"),
  ],
  langs: [import("@shikijs/langs/tsx")],
  engine: createOnigurumaEngine(import("shiki/wasm")),
});

export default function PresentationCode({ code }: { code: string }) {
  const { theme } = useTheme();

  return (
    <div className="code-box">
      <ShikiHighlighter
        highlighter={highlighter}
        language="tsx"
        theme={theme === "light" ? "github-light" : "github-dark"}
        showLanguage={false}
        showLineNumbers
        className="code is-fixed">
        {code}
      </ShikiHighlighter>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm" className="copy">
            <Copy />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Copy to Clipboard</TooltipContent>
      </Tooltip>
    </div>
  );
}
