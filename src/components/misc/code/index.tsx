import ShikiHighlighter, {
  createHighlighterCore,
  createOnigurumaEngine,
} from "react-shiki/core";
import { useState } from "react";
import { useTheme } from "@/contexts";
import { Check, Copy } from "lucide-react";
import type { PackageManagers } from "@/types/core";
import RegistryHead from "./_partials/registry-head";
import DependenciesHead from "./_partials/dependencies-head";
import { copy, getCommands } from "@/utils/helpers";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Button from "@/components/ui/button";

const highlighter = await createHighlighterCore({
  themes: [
    import("@shikijs/themes/github-light"),
    import("@shikijs/themes/github-dark"),
  ],
  langs: [
    import("@shikijs/langs/tsx"),
    import("@shikijs/langs/css"),
    import("@shikijs/langs/bash"),
  ],
  engine: createOnigurumaEngine(import("shiki/wasm")),
});

interface CodeProps {
  variant?: "registry" | "dependencies" | "normal";
  code: { lang: Language; content: string }[];
  name?: string;
  fixedHight?: boolean;
}

type Language = "tsx" | "css" | "bash";

export default function Code({
  variant = "normal",
  code,
  name = "",
  fixedHight = false,
}: CodeProps) {
  const { theme } = useTheme();
  const [language, setLanguage] = useState<Language>(
    code.length ? code[0].lang : "bash"
  );
  const [pm, setPm] = useState<PackageManagers>("pnpm");
  const [isCopied, setIsCopied] = useState(false);

  function getCode() {
    return variant === "normal"
      ? code[0].content
      : variant === "registry"
        ? (code.find((c) => c.lang === language)?.content ?? "")
        : getCommands(name)[pm];
  }

  function onCopy() {
    copy(getCode(), "Code copied!");
    setIsCopied(true);

    const timer = setTimeout(() => setIsCopied(false), 3000);
    return () => clearTimeout(timer);
  }

  return (
    <div data-misc="code">
      {variant === "registry" && (
        <RegistryHead
          name={name}
          lang={language as "tsx" | "css"}
          setLanguage={setLanguage}
        />
      )}
      {variant === "dependencies" && (
        <DependenciesHead name={name} pm={pm} setPm={setPm} />
      )}
      <ShikiHighlighter
        showLineNumbers
        language={language}
        showLanguage={false}
        highlighter={highlighter}
        className={fixedHight ? "fixed" : ""}
        theme={theme === "light" ? "github-light" : "github-dark"}>
        {getCode()}
      </ShikiHighlighter>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="copy"
            onClick={onCopy}
            disabled={isCopied}>
            {isCopied ? <Check /> : <Copy />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>Copy to Clipboard</TooltipContent>
      </Tooltip>
    </div>
  );
}
