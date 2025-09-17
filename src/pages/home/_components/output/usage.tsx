import TsxCode from "@/components/misc/code/tsx-code";
import { useComponent } from "@/contexts";

export default function Usage() {
  const { component } = useComponent();

  return (
    <section className="usage-box" id="usage">
      <h2 className="head">Usage</h2>
      <TsxCode code={component?.usage.code.content ?? ""} fixedHeight={false} />
    </section>
  );
}
