import { useParams } from "react-router-dom";
import Introduction from "@/pages/docs/_components/content/getting-started/introduction";
import Installation from "@/pages/docs/_components/content/getting-started/installation";
import Theming from "@/pages/docs/_components/content/getting-started/theming";
import Typography from "@/pages/docs/_components/content/getting-started/typography";
import Figma from "@/pages/docs/_components/content/getting-started/figma";

export default function Content() {
  const { section } = useParams();

  const PAGES = {
    introduction: <Introduction />,
    installation: <Installation />,
    theming: <Theming />,
    typography: <Typography />,
    figma: <Figma />,
  };

  return <div className="content">{PAGES[section] ?? "404"}</div>;
}
