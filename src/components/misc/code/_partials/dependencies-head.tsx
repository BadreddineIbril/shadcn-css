import { useState } from "react";
import Button from "@/components/ui/button";
import CommandIcon from "@/assets/icons/command";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copy, getCommands } from "@/utils/helpers";
import { Check, Copy } from "lucide-react";
import { PACKAGE_MANAGERS } from "@/utils/constants";
import type { PackageManagers } from "@/types/core";

interface DependenciesProps {
  name: string;
  pm: PackageManagers;
  setPm: (pm: PackageManagers) => void;
}

export default function DependenciesHead({
  name,
  pm,
  setPm,
}: DependenciesProps) {
  const [isCopied, setIsCopied] = useState(false);

  function onCopy() {
    copy(getCommands(name)[pm], "Component copied!");
    setIsCopied(true);

    const timer = setTimeout(() => setIsCopied(false), 3000);
    return () => clearTimeout(timer);
  }
  return (
    <div className="code-head" data-type="dependencies">
      <div className="type">
        <CommandIcon />
        <div className="options">
          {PACKAGE_MANAGERS.map((pack) => (
            <Button
              key={pack}
              variant={pm === pack ? "outline" : "ghost"}
              size="xs"
              className="option"
              onClick={() => setPm(pack)}>
              {pack}
            </Button>
          ))}
        </div>
      </div>
      <div className="actions">
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
    </div>
  );
}
