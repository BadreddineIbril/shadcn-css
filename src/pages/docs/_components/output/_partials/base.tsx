import Code from "@/components/misc/code";
import Preview from "@/components/misc/preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useComponent } from "@/contexts";

export default function Base() {
  const { component } = useComponent();

  const CodePreview = component?.base.preview;

  return (
    <section className="base-box">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          {CodePreview && (
            <Preview>
              <CodePreview />
            </Preview>
          )}
        </TabsContent>
        <TabsContent value="code">
          <Code
            fixedHight
            code={[
              { lang: "tsx", content: component?.base.code.content ?? "" },
            ]}
          />
        </TabsContent>
      </Tabs>
    </section>
  );
}
