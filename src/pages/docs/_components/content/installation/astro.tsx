import Code from "@/components/misc/code";

export default function Astro() {
  return (
    <div data-content="astro">
      <article id="create-project">
        <h3>Create project</h3>
        <p>Start by creating a new Astro project:</p>
        <Code
          variant="dependencies"
          name="create-astro@latest astro-app  --template with-tailwindcss --install --add react --git"
          code={[]}
        />
      </article>
      <article id="edit-tsconfigjson-file">
        <h3>Edit tsconfig.json file</h3>
        <p>
          Add the following code to the{" "}
          <small className="code-tag">tsconfig.json</small> file to resolve
          paths:
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
          <small className="code-tag">src/pages/index.astro</small>
        </p>
        <Code
          code={[
            {
              lang: "astro",
              content: `---\nimport Button from "@/components/ui/button"\n---\n\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<meta name="viewport" content="width=device-width" />\n\t\t<link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n\t\t<meta name="generator" content={Astro.generator} />\n\t\t<title>Astro + TailwindCSS</title>\n\t</head>\n\n\t<body>\n\t\t<div className="my-app">\n\t\t\t<Button>Button</Button>\n\t\t</div>\n\t</body>\n</html>`,
            },
          ]}
        />
      </article>
    </div>
  );
}
