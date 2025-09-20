import CommandIcon from "@/assets/icons/command";
import Button from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "@/contexts";
import { Copy } from "lucide-react";
import { useState } from "react";
import ShikiHighlighter, {
  createHighlighterCore,
  createOnigurumaEngine,
} from "react-shiki/core";

const highlighter = await createHighlighterCore({
  themes: [
    import("@shikijs/themes/github-light"),
    import("@shikijs/themes/github-dark"),
  ],
  langs: [import("@shikijs/langs/bash")],
  engine: createOnigurumaEngine(import("shiki/wasm")),
});

export default function CommandCode({
  name,
  type = "registry",
}: {
  name: string;
  type?: "registry" | "dependency";
}) {
  const { theme } = useTheme();
  const [packageManager, setPackageManager] = useState<
    "pnpm" | "npm" | "yarn" | "bun"
  >("pnpm");
  const COMMANDS = {
    pnpm:
      type === "registry"
        ? `pnpm dlx shadcn-css add ${name}`
        : `pnpm add ${name}`,
    npm:
      type === "registry"
        ? `npm shadcn-css add ${name}`
        : `npm install ${name}`,
    yarn:
      type === "registry" ? `yarn shadcn-css add ${name}` : `yarn add ${name}`,
    bun:
      type === "registry"
        ? `bunx --bun shadcn-css add ${name}`
        : `bun add ${name}`,
  };

  return (
    <div className="code-box">
      <div className="box-head">
        <div className="type">
          <CommandIcon />
          <div className="options">
            {Object.entries(COMMANDS).map((pm) => (
              <Button
                key={pm[0]}
                variant={packageManager === pm[0] ? "outline" : "ghost"}
                size="xs"
                className="option"
                onClick={() => setPackageManager(pm[0])}>
                {pm[0]}
              </Button>
            ))}
          </div>
        </div>
        <div className="actions">
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
        language="bash"
        theme={theme === "light" ? "github-light" : "github-dark"}
        showLanguage={false}
        showLineNumbers
        className="code">
        {COMMANDS[packageManager]}
      </ShikiHighlighter>
    </div>
  );
}
