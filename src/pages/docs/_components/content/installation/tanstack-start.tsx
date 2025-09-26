import Code from "@/components/misc/code";

export default function TanstackStart() {
  return (
    <div data-content="tanstack-start">
      <article>
        <h3>Create project</h3>
        <p>
          Start by creating a new TanStack Start project by following the{" "}
          <a
            href="https://tanstack.com/start/latest/docs/framework/react/build-from-scratch"
            target="_blank">
            Build a Project from Scratch
          </a>{" "}
          guide on the TanStack Start website.
        </p>
      </article>
      <article>
        <h3>Edit tsconfig.json file</h3>
        <p>
          Add the following code to the{" "}
          <small className="code-tag">tsconfig.json</small> file to resolve
          paths.
        </p>
        <Code
          code={[
            {
              lang: "json",
              content: `{\n  "compilerOptions": {\n    "jsx": "react-jsx",\n    "moduleResolution": "Bundler",\n    "module": "ESNext",\n    "target": "ES2022",\n    "skipLibCheck": true,\n    "strictNullChecks": true,\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["./app/*"]\n    }\n  }\n}`,
            },
          ]}
        />
      </article>
      <article>
        <h3>Run the CLI</h3>
        <p>
          Run the <small className="code-tag">shadcn-css</small> init command to
          setup your project:
        </p>
        <Code variant="dependencies" name="shadcn-css@latest init" code={[]} />
        <p>
          This will create a <small className="code-tag">components.json</small>{" "}
          file in the root of your project and configure CSS variables inside
          <small className="code-tag">app/tokens.css</small>{" "}
          <small className="code-tag">app/globals.css</small>.
        </p>
      </article>
      <article>
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
          <small className="code-tag">app/routes/index.tsx</small>
        </p>
        <Code
          code={[
            {
              lang: "tsx",
              content: `import Button from "@/components/ui/button"\n\nfunction Home() {\n  const router = useRouter()\n  const state = Route.useLoaderData()\n\n  return (\n    <div>\n      <Button>Click me</Button>\n    </div>\n  )\n}`,
            },
          ]}
        />
      </article>
    </div>
  );
}
