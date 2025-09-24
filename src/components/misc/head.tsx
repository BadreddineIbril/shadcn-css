import Button from "@/components/ui/button";
import { getAIPrompt, usePagination } from "@/utils/helpers";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ChatgptIcon from "@/assets/icons/chatgpt";
import ClaudeIcon from "@/assets/icons/claude";
import V0Icon from "@/assets/icons/v0";
import SparklesIcon from "@/assets/icons/sparkles";

interface HeadProp {
  heading: string;
  subheading: string;
  withActions?: boolean;
}

export default function Head({
  heading,
  subheading,
  withActions = false,
}: HeadProp) {
  const { section, id } = useParams();
  const { prev, next } = usePagination(
    section === "components" && id ? id : (section ?? "")
  );

  return (
    <section data-misc="head">
      <h1 className="heading">{heading}</h1>
      {withActions && (
        <div className="actions">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <SparklesIcon /> Vibe coder?
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="vibe-coder">
              <DropdownMenuItem asChild>
                <a href={getAIPrompt("v0")} target="_blank">
                  <V0Icon /> Open in v0
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={getAIPrompt("gpt")} target="_blank">
                  <ChatgptIcon /> Open in ChatGPT
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={getAIPrompt("claude")} target="_blank">
                  <ClaudeIcon /> Open in Claude
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {prev?.id && (
            <Button
              variant="outline"
              size="sm"
              aria-label="previous page"
              asChild>
              <Link
                to={`/docs${section === "components" && prev.id !== "manual" ? "/components" : ""}/${prev.id}`}>
                <ArrowLeft />
              </Link>
            </Button>
          )}
          {next?.id && (
            <Button variant="outline" size="sm" aria-label="next page" asChild>
              <Link
                to={`/docs${section === "components" || section === "manual" ? "/components" : ""}/${next.id}`}>
                <ArrowRight />
              </Link>
            </Button>
          )}
        </div>
      )}
      <p className="subheading">{subheading}</p>
    </section>
  );
}
