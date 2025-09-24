import Code from "@/components/misc/code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useComponent } from "@/contexts";

export default function Base() {
  const { component } = useComponent();

  const Preview = component?.base.preview;

  return (
    <section className="base-box">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="preview-wrapper">
            <div className="preview-area">{Preview && <Preview />}</div>
          </div>
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
