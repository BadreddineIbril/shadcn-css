import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <div data-content="introduction">
      <article>
        <p>
          if you're here, you probably know what{" "}
          <small className="code-tag">shadcn/ui</small> is. If not, take a look
          at the original{" "}
          <a href="https://ui.shadcn.com/docs" target="_blank">
            docs
          </a>
          .
        </p>
        <p>
          This is an unofficial <small className="code-tag">CSS Modules</small>{" "}
          port of <small className="code-tag">shadcn/ui</small>. It's not
          affiliated with shadcn (hopefully he's cool with it). I just wanted to
          make his solution easier for devs on other stacks.
        </p>
        <p>
          It all started in a GitHub{" "}
          <a
            href="https://github.com/shadcn-ui/ui/discussions/2832"
            target="_blank">
            discussion
          </a>
          . Now it's out here, hope it helps.
        </p>
      </article>
      <article id="faq">
        <h3>FAQ</h3>
        <Accordion type="multiple">
          <AccordionItem value="vs">
            <AccordionTrigger>
              Original shadcn/ui vs shadcn/css?
            </AccordionTrigger>
            <AccordionContent>
              Pretty mush the same, with the key difference being that Tailwind
              is not used. Instead, each component includes an{" "}
              <small className="code-tag">index.tsx</small> and a
              <small className="code-tag">styles.module.css</small>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cli">
            <AccordionTrigger>Is there a CLI already?</AccordionTrigger>
            <AccordionContent>
              Yes, it supports core commands like{" "}
              <small className="code-tag">init</small>,{" "}
              <small className="code-tag">add</small>, and{" "}
              <small className="code-tag">list</small>, with more features
              planned. For details, see the <Link to="/docs/cli">CLI docs</Link>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="open-source">
            <AccordionTrigger>Open source?</AccordionTrigger>
            <AccordionContent>
              Yes, you have full flexibility to customize and extend the
              components to meet your needs. If you encounter any issues or have
              suggestions,{" "}
              <a
                href="https://github.com/BadreddineIbril/shadcn-css"
                target="_blank">
                contributions
              </a>{" "}
              are welcome.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </article>
    </div>
  );
}
