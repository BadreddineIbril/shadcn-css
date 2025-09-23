import Code from "@/components/misc/code";
import { useComponent } from "@/contexts";

export default function Usage() {
  const { component } = useComponent();

  return (
    <section className="usage-box" id="usage">
      <h2 className="head">Usage</h2>
      <Code
        code={[{ lang: "tsx", content: component?.usage.code.content ?? "" }]}
      />
    </section>
  );
}
