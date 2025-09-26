import Code from "@/components/misc/code";

export default function NextJs() {
  return (
    <div data-content="next-js">
      <article id="create-project">
        <h3>Create project</h3>
        <p>
          Run the <small className="code-tag">init</small> command to create a
          new Next.js project or to setup an existing one:
        </p>
        <Code variant="dependencies" name="shadcn-css@latest init" code={[]} />
      </article>
      <article id="add-components">
        <h3>Add Components</h3>
        <p>You can now start adding components to your project.</p>
        <Code
          variant="dependencies"
          name="shadcn-css@latest add button"
          code={[]}
        />
        <p>
          The command above will add the{" "}
          <small className="code-tag">Button</small> component to your project.
          You can then import it like this:
        </p>
        <p>
          <small className="code-tag">src/page.tsx</small>
        </p>
        <Code
          code={[
            {
              lang: "tsx",
              content: `import Button from "@/components/ui/button"\n\nfunction Home() {\n  return (\n    <div className="my-home">\n      <Button>Click me</Button>\n    </div>\n  )\n}\n\nexport default Home`,
            },
          ]}
        />
      </article>
    </div>
  );
}
