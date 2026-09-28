import Code from "@/components/misc/code";
import { Link } from "react-router-dom";

export default function ComponentJson() {
  return (
    <div data-content="components.json">
      <article>
        <p>
          The <small className="code-tag">components.json</small> file holds
          configuration for your project.
        </p>
        <p>
          We use it to understand how your project is set up and how to generate
          components customized for your project.
        </p>
        <p>
          This file is <b>optional</b>. It is only required if you're using the{" "}
          <Link to="/docs/cli">CLI</Link> to add components to your project. If
          you're using the copy and paste method, you don't need this file.
        </p>
        <p>
          You can create a <small className="code-tag">components.json</small>{" "}
          file in your project by running the following command:
        </p>
        <Code variant="shadcn-css" code={[]} name="init" />
      </article>
      <article id="base">
        <h3>base</h3>
        <p>
          The primitives your components are built on:{" "}
          <small className="code-tag">radix</small> for Radix UI or{" "}
          <small className="code-tag">base</small> for Base UI. Components added
          with the <Link to="/docs/cli">CLI</Link> are fetched for this base.
          Defaults to <small className="code-tag">radix</small> when omitted.
        </p>
        <Code
          code={[
            {
              lang: "json",
              content: `{\n  "base": "base"\n}`,
            },
          ]}
        />
        <p>
          See the <Link to="/docs/cli">CLI section</Link> for more information.
        </p>
      </article>
    </div>
  );
}
