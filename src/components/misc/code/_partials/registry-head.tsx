import CssIcon from "@/assets/icons/css";
import TypescriptIcon from "@/assets/icons/typescript";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RegistryProps {
  name: string;
  lang: "tsx" | "css";
  setLanguage: (lang: "tsx" | "css") => void;
}

export default function RegistryHead({
  name,
  lang,
  setLanguage,
}: RegistryProps) {
  return (
    <div className="code-head" data-type="registry">
      <div className="path">
        {lang === "tsx" ? <TypescriptIcon /> : <CssIcon />}
        <span>
          components/ui/{name}/
          {lang === "tsx" ? "index.tsx" : "styles.module.css"}
        </span>
      </div>
      <div className="actions">
        <Select defaultValue="tsx" onValueChange={setLanguage}>
          <SelectTrigger size="sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tsx">index.tsx</SelectItem>
            <SelectItem value="css">styles.module.css</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
