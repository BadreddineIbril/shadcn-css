import Preview from "@/components/misc/preview";
import PresentationCode from "@/components/misc/code/presentation-code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useComponent } from "@/contexts";

export default function Base() {
  const { component } = useComponent();

  return (
    <section className="base-box">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <Preview />
        </TabsContent>
        <TabsContent value="code">
          <PresentationCode code={component?.base.code.content ?? ""} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
