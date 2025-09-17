import CommandCode from "@/components/misc/code/command-code";
import InstallationCode from "@/components/misc/code/installation-code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useComponent } from "@/contexts";

export default function Installation() {
  const { component } = useComponent();

  return (
    <section className="installation-box" id="installation">
      <h2 className="head">Installation</h2>
      <Tabs defaultValue="cli">
        <TabsList>
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>
        <TabsContent value="cli">
          <CommandCode name={component?.id ?? ""} />
        </TabsContent>
        <TabsContent value="manual" className="manual-area">
          {component?.installation.manual.dependencies && (
            <div className="dependencies-wrapper">
              <h3 className="hint">Install the following dependencies:</h3>
              <CommandCode
                type="dependency"
                name={component?.installation.manual.dependencies.toString()}
              />
            </div>
          )}
          <div className="files-wrapper">
            <h3 className="hint">Install the following dependencies:</h3>
            <InstallationCode
              name={component?.id ?? ""}
              tsx={component?.installation.manual.code[0].content ?? ""}
              css={component?.installation.manual.code[1].content ?? ""}
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
