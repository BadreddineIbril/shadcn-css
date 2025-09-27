import Code from "@/components/misc/code";

export default function Cli() {
  return (
    <div data-content="cli">
      <article id="init">
        <h3>init</h3>
        <p>
          Use the <small className="code-tag">init</small> command to initialize
          configuration and dependencies for a new project.
        </p>
        <p>
          The <small className="code-tag">init</small> command installs
          dependencies and configures <small className="code-tag">CSS</small>{" "}
          variables for the project.
        </p>
        <Code variant="shadcn-css" name="init" code={[]} />
        <p>Options</p>
        <Code
          code={[
            {
              lang: "bash",
              content: `Usage: shadcn-css init [options]\n\nInitialize shadcn-css in your project\n\nOptions:\n  -h, --help  display help for command`,
            },
          ]}
        />
      </article>
      <article id="add">
        <h3>add</h3>
        <p>
          Use the <small className="code-tag">add</small> command to add
          components and dependencies to your project.
        </p>
        <Code variant="shadcn-css" name="add [component]" code={[]} />
        <p>Options</p>
        <Code
          code={[
            {
              lang: "bash",
              content: `Usage: shadcn-css add [options] [components...]\n\nAdd one or more components to your project\n\nArguments:\n  components  Component names to add\n\nOptions:\n  -h, --help  display help for command`,
            },
          ]}
        />
      </article>
      <article id="list">
        <h3>list</h3>
        <p>
          Use the <small className="code-tag">list</small> command to list all
          available components.
        </p>
        <Code variant="shadcn-css" name="list" code={[]} />
        <p>Options</p>
        <Code
          code={[
            {
              lang: "bash",
              content: `Usage: shadcn-css list [options]\n\nList all available components\n\nOptions:\n  -h, --help  display help for command`,
            },
          ]}
        />
      </article>
    </div>
  );
}
