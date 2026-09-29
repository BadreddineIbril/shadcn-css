import Code from "@/components/misc/code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useComponent, useLibrary } from "@/contexts";
import { Link } from "react-router-dom";
import { getComponentPath } from "@/utils/helpers";

export default function Installation() {
  const { component } = useComponent();
  const { library } = useLibrary();

  const dependencies = component?.installation.manual.dependencies;
  const code = component?.installation.manual.code;

  return (
    <section className="installation-box" id="installation">
      <h2 className="head">Installation</h2>
      {library === "base" && component?.library === "radix" && (
        <p className="hint library-hint">
          The Base UI version of this component is not available yet, showing
          the Radix UI version instead.
        </p>
      )}
      <Tabs defaultValue="cli">
        <TabsList>
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>
        <TabsContent value="cli">
          <Code
            variant="shadcn-css"
            name={`add ${component?.id ?? ""}`}
            code={[]}
          />
          {component?.library === "base" && (
            <p className="hint library-hint">
              Components are added from the base set in your{" "}
              <Link to="/docs/components.json">components.json</Link>. Run{" "}
              <code className="code-tag">init --base base</code> to use Base UI.
            </p>
          )}
        </TabsContent>
        <TabsContent value="manual" className="manual-area">
          {dependencies && (
            <div className="dependencies-wrapper">
              <h3 className="hint">Install the following dependencies:</h3>
              <Code
                variant="dependencies"
                name={dependencies.toString()}
                code={[]}
              />
            </div>
          )}
          {code && code[0].content && (
            <div className="files-wrapper">
              <h3 className="hint">
                Copy and paste the following code into your project.
              </h3>
              <Code
                variant="registry"
                name={component.id}
                code={code.map((c) => ({
                  lang: c.type as "tsx" | "css",
                  content: c.content,
                }))}
              />
            </div>
          )}
          {component?.id === "data-table" && (
            <div className="files-wrapper">
              <h3 className="hint">
                The Data Table is built using the{" "}
                <code className="code-tag">{`<Table />`}</code> component and{" "}
                <a href="https://tanstack.com/table" target="_blank">
                  TanStack Table
                </a>
                . Install{" "}
                <code className="code-tag">@tanstack/react-table</code> and the{" "}
                <Link to={getComponentPath("table", library)}>Table</Link>{" "}
                component, then build your own table from the example above.
              </h3>
            </div>
          )}
          {component?.id === "combobox" && (
            <div className="files-wrapper">
              <h3 className="hint">
                The Combobox is built using a composition of the{" "}
                <code className="code-tag">{`<Popover />`}</code> and the{" "}
                <code className="code-tag">{`<Command />`}</code> components.{" "}
                <br />
                <br />
                See installation instructions for the{" "}
                <Link to={getComponentPath("popover", library)}>
                  Popover
                </Link>{" "}
                and the{" "}
                <Link to={getComponentPath("command", library)}>Command</Link>{" "}
                components.
              </h3>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
