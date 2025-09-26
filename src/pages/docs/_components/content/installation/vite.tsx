import Code from "@/components/misc/code";

export default function Vite() {
  return (
    <div data-content="vite">
      <article id="create-project">
        <h3>Create project</h3>
        <p>
          Start by creating a new React project using{" "}
          <small className="code-tag">vite</small>. Select the <b>React</b> +
          <b>TypeScript</b> template:
        </p>
        <Code variant="dependencies" name="create vite@latest" code={[]} />
      </article>
      <article id="edit-tsconfigjson-file">
        <h3>Edit tsconfig.json file</h3>
        <p>
          The current version of Vite splits TypeScript configuration into three
          files, two of which need to be edited. Add the{" "}
          <small className="code-tag">baseUrl</small> and{" "}
          <small className="code-tag">paths</small> properties to the{" "}
          <small className="code-tag">compilerOptions</small> section of the
          <small className="code-tag">tsconfig.json</small> and
          <small className="code-tag">tsconfig.app.json</small> files:
        </p>
        <p>
          <small className="code-tag">tsconfig.json</small>
        </p>
        <Code
          code={[
            {
              lang: "json",
              content: `{\n  "files": [],\n  "references": [\n    {\n      "path": "./tsconfig.app.json"\n    },\n    {\n      "path": "./tsconfig.node.json"\n    }\n  ],\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["./src/*"]\n    }\n  }\n}`,
            },
          ]}
        />
      </article>
      <article id="edit-tsconfigappjson-file">
        <h3>Edit tsconfig.app.json file</h3>
        <p>
          Add the following code to the{" "}
          <small className="code-tag">tsconfig.app.json</small> file to resolve
          paths, for your IDE:
        </p>
        <p>
          <small className="code-tag">tsconfig.app.json</small>
        </p>
        <Code
          code={[
            {
              lang: "json",
              content: `{\n  "compilerOptions": {\n    // ...\n    "baseUrl": ".",\n    "paths": {\n      "@/*": [\n        "./src/*"\n      ]\n    }\n    // ...\n  }\n}`,
            },
          ]}
        />
      </article>
      <article id="update-viteconfigts">
        <h3>Update vite.config.ts</h3>
        <p>
          Add the following code to the{" "}
          <small className="code-tag">vite.config.ts</small> so your app can
          resolve paths without error:
        </p>
        <Code variant="dependencies" name="-D @types/node" code={[]} />
        <p>
          <small className="code-tag">vite.config.json</small>
        </p>
        <Code
          code={[
            {
              lang: "ts",
              content: `import path from "path"\nimport tailwindcss from "@tailwindcss/vite"\nimport react from "@vitejs/plugin-react"\nimport { defineConfig } from "vite"\n\n// https://vite.dev/config/\nexport default defineConfig({\n  plugins: [react(), tailwindcss()],\n  resolve: {\n    alias: {\n      "@": path.resolve(__dirname, "./src"),\n    },\n  },\n})`,
            },
          ]}
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
          <small className="code-tag">src/App.tsx</small>
        </p>
        <Code
          code={[
            {
              lang: "tsx",
              content: `import Button from "@/components/ui/button"\n\nfunction App() {\n  return (\n    <div className="my-app">\n      <Button>Click me</Button>\n    </div>\n  )\n}\n\nexport default App`,
            },
          ]}
        />
      </article>
    </div>
  );
}
