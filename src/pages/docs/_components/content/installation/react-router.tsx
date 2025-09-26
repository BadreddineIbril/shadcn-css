import Code from "@/components/misc/code";

export default function ReactRouter() {
  return (
    <div data-content="react-router">
      <article id="create-router">
        <h3>Create project</h3>
        <Code
          variant="dependencies"
          name="create-react-router@latest my-app"
          code={[]}
        />
      </article>
      <article id="run-the-cli">
        <h3>Run the CLI</h3>
        <p>
          Run the <small className="code-tag">shadcn-css</small> init command to
          setup your project:
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
          <small className="code-tag">app/routes/home.tsx</small>
        </p>
        <Code
          code={[
            {
              lang: "tsx",
              content: `import Button from "~/components/ui/button"\n\nimport type { Route } from "./+types/home"\n\nexport function meta({}: Route.MetaArgs) {\n  return [\n    { title: "New React Router App" },\n    { name: "description", content: "Welcome to React Router!" },\n  ]\n}\n\nexport default function Home() {\n  return (\n    <div className="my-home">\n      <Button>Click me</Button>\n    </div>\n  )\n}`,
            },
          ]}
        />
      </article>
    </div>
  );
}
