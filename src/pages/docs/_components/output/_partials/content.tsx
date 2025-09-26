import { useParams } from "react-router-dom";
import Introduction from "@/pages/docs/_components/content/getting-started/introduction";
import Installation from "@/pages/docs/_components/content/getting-started/installation";
import Theming from "@/pages/docs/_components/content/getting-started/theming";
import Typography from "@/pages/docs/_components/content/getting-started/typography";
import Figma from "@/pages/docs/_components/content/getting-started/figma";
import ComponentJson from "@/pages/docs/_components/content/getting-started/components-json";
import DarkMode from "@/pages/docs/_components/content/getting-started/dark-mode";
import Cli from "@/pages/docs/_components/content/getting-started/cli";
import Changelog from "@/pages/docs/_components/content/getting-started/changelog";
import Vite from "@/pages/docs/_components/content/installation/vite";
import NextJs from "@/pages/docs/_components/content/installation/next-js";
import Laravel from "@/pages/docs/_components/content/installation/laravel";
import ReactRouter from "@/pages/docs/_components/content/installation/react-router";
import Astro from "@/pages/docs/_components/content/installation/astro";
import TanstackStart from "@/pages/docs/_components/content/installation/tanstack-start";
import TanstackRouter from "@/pages/docs/_components/content/installation/tanstack-router";
import Manual from "@/pages/docs/_components/content/installation/manual";

const PAGES = {
  introduction: <Introduction />,
  installation: <Installation />,
  ["components.json"]: <ComponentJson />,
  theming: <Theming />,
  ["dark-mode"]: <DarkMode />,
  cli: <Cli />,
  typography: <Typography />,
  figma: <Figma />,
  changelog: <Changelog />,
  vite: <Vite />,
  next: <NextJs />,
  laravel: <Laravel />,
  ["react-router"]: <ReactRouter />,
  astro: <Astro />,
  tanstack: <TanstackStart />,
  ["tanstack-router"]: <TanstackRouter />,
  manual: <Manual />,
};

export default function Content() {
  const { section } = useParams();

  const Page =
    section && section in PAGES ? PAGES[section as keyof typeof PAGES] : null;

  return <div className="content">{Page}</div>;
}
