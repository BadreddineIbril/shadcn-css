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
        <Code variant="dependencies" code={[]} name="shadcn-css@latest init" />
        <p>
          See the <Link to="/docs/cli">CLI section</Link> for more information.
        </p>
      </article>
    </div>
  );
}
