import Button from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Copy } from "lucide-react";
import ShikiHighlighter, {
  createHighlighterCore,
  createOnigurumaEngine,
} from "react-shiki/core";

const highlighter = await createHighlighterCore({
  themes: [import("@shikijs/themes/github-light")],
  langs: [import("@shikijs/langs/tsx")],
  engine: createOnigurumaEngine(import("shiki/wasm")),
});

export default function TsxCode({
  code,
  fixedHeight = true,
}: {
  code: string;
  fixedHeight?: boolean;
}) {
  return (
    <div className="code-box">
      <ShikiHighlighter
        highlighter={highlighter}
        language="tsx"
        theme="github-light"
        showLanguage={false}
        showLineNumbers
        className={`code ${fixedHeight ? "is-fixed" : ""}`.trim()}>
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
