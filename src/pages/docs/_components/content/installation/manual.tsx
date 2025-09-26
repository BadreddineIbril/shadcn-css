import Code from "@/components/misc/code";
import { getBaseStyles } from "@/utils/helpers";
import { Link } from "react-router-dom";

export default function Manual() {
  const { tokens, globals } = getBaseStyles();

  return (
    <div data-content="manual">
      <article id="add-dependencies">
        <h3>Add dependencies</h3>
        <p>Add the following dependencies to your project:</p>
        <Code variant="dependencies" name="lucide-react" code={[]} />
      </article>
      <article id="configure-path-aliases">
        <h3>Configure path aliases</h3>
        <p>
          Configure the path aliases in your{" "}
          <small className="code-tag">tsconfig.json</small> file.
        </p>
        <Code
          code={[
            {
              lang: "json",
              content: `{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["./*"]\n    }\n  }\n}`,
            },
          ]}
        />
        <p>
          The <small className="code-tag">@</small> alias is a preference. You
          can use other aliases if you want.
        </p>
      </article>
      <article id="configure-styles">
        <h3>Configure styles</h3>
        <p>
          Add the following to your{" "}
          <small className="code-tag">styles/tokens.css</small> &
          <small className="code-tag">styles/globals.css</small> files. You can
          learn more about using CSS variables for theming in the{" "}
          <Link to="/docs/theming">theming section</Link>.
        </p>
        <p>
          <small className="code-tag">styles/tokens.css</small>
        </p>
        <Code fixedHight code={[{ lang: "css", content: tokens }]} />
        <p>
          <small className="code-tag">styles/globals.css</small>
        </p>
        <Code fixedHight code={[{ lang: "css", content: globals }]} />
      </article>
      <article id="create-a-component-json-file">
        <h3>Create a components.json file</h3>
        <p>
          Create a <small className="code-tag">components.json file</small> in
          the root of your project.
        </p>
        <Code
          code={[
            {
              lang: "json",
              content: `{\n  "componentsPath": "./src/components/ui",\n  "typescript": true,\n  "cssModules": true,\n  "iconLibrary": "lucide-react"\n}`,
            },
          ]}
        />
      </article>
      <article id="thats-it">
        <h3>That's it</h3>
        <p>You can now start adding components to your project.</p>
      </article>
    </div>
  );
}
