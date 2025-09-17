import CssIcon from "@/assets/icons/css";
import TypescriptIcon from "@/assets/icons/typescript";
import Button from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Copy } from "lucide-react";
import { useState } from "react";
import ShikiHighlighter, {
  createHighlighterCore,
  createOnigurumaEngine,
} from "react-shiki/core";

const highlighter = await createHighlighterCore({
  themes: [import("@shikijs/themes/github-light")],
  langs: [import("@shikijs/langs/tsx"), import("@shikijs/langs/css")],
  engine: createOnigurumaEngine(import("shiki/wasm")),
});

export default function InstallationCode({
  name,
  tsx,
  css,
}: {
  name: string;
  tsx: string;
  css: string;
}) {
  const [type, setType] = useState<string>("tsx");

  return (
    <div className="code-box">
      <div className="box-head">
        <div className="path">
          {type === "tsx" ? <TypescriptIcon /> : <CssIcon />}
          components/ui/{name}/
          {type === "tsx" ? "index.tsx" : "styles.module.css"}
        </div>
        <div className="actions">
          <Select defaultValue="tsx" onValueChange={setType}>
            <SelectTrigger size="sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tsx">index.tsx</SelectItem>
              <SelectItem value="css">styles.module.css</SelectItem>
            </SelectContent>
          </Select>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="copy">
                <Copy />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy to Clipboard</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <ShikiHighlighter
        highlighter={highlighter}
        language={type}
        theme="github-light"
        showLanguage={false}
        showLineNumbers
        className="code is-fixed">
        {type === "tsx" ? tsx : css}
      </ShikiHighlighter>
    </div>
  );
}
