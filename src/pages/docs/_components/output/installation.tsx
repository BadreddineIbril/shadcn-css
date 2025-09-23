import Code from "@/components/misc/code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useComponent } from "@/contexts";
import { Link } from "react-router-dom";

export default function Installation() {
  const { component } = useComponent();

  const dependencies = component?.installation.manual.dependencies;
  const code = component?.installation.manual.code;

  return (
    <section className="installation-box" id="installation">
      <h2 className="head">Installation</h2>
      <Tabs defaultValue="cli">
        <TabsList>
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>
        <TabsContent value="cli">
          <Code variant="dependencies" name={component?.id ?? ""} code={[]} />
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
          {component?.id === "combobox" && (
            <div className="files-wrapper">
              <h3 className="hint">
                The Combobox is built using a composition of the{" "}
                <code className="code-tag">{`<Popover />`}</code> and the{" "}
                <code className="code-tag">{`<Command />`}</code> components.{" "}
                <br />
                <br />
                See installation instructions for the{" "}
                <Link to="/docs/components/popover">Popover</Link> and the{" "}
                <Link to="/docs/components/command">Command</Link> components.
              </h3>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
