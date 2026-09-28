import Code from "@/components/misc/code";
import { Link } from "react-router-dom";

export default function Changelog() {
  return (
    <div data-content="changelog">
      <article id="september-2026---base-ui">
        <h3>September 2026 - Base UI</h3>
        <p>
          Since Radix UI stopped receiving updates, many of you asked for a
          version built on{" "}
          <a href="https://base-ui.com" target="_blank">
            Base UI
          </a>
          . It's here: every component now ships in two flavors, Radix UI and
          Base UI, with the same styles, the same CSS Modules and the same
          structure. Base UI is now the default.
        </p>
        <ul>
          <li>
            <b>All components</b>: every component has a Base UI version. Pick
            one with the new <b>Primitives</b> switch in the sidebar.
          </li>
          <li>
            <b>CLI</b>: <small className="code-tag">init</small> asks which base
            to use and saves it as <small className="code-tag">"base"</small> in{" "}
            <Link to="/docs/components.json">components.json</Link>. You can
            also pass <small className="code-tag">--base radix</small> or{" "}
            <small className="code-tag">--base base</small> to{" "}
            <small className="code-tag">init</small>,{" "}
            <small className="code-tag">add</small> and{" "}
            <small className="code-tag">list</small>.
          </li>
        </ul>
        <Code variant="shadcn-css" name="init --base base" code={[]} />
        <p>
          Coming from Radix? The API stays the same, except where Base UI works
          differently:
        </p>
        <ul>
          <li>
            <small className="code-tag">asChild</small> is replaced by the{" "}
            <small className="code-tag">render</small> prop, e.g.{" "}
            <small className="code-tag">{`<DialogTrigger render={<Button />}>`}</small>
            .
          </li>
          <li>
            <Link to="/docs/components/base/accordion">Accordion</Link> takes an
            array value and <small className="code-tag">multiple</small> instead
            of <small className="code-tag">type</small>.
          </li>
          <li>
            <Link to="/docs/components/base/toggle-group">Toggle Group</Link>{" "}
            uses <small className="code-tag">multiple</small> instead of{" "}
            <small className="code-tag">type</small>.
          </li>
          <li>
            <Link to="/docs/components/base/select">Select</Link> needs an{" "}
            <small className="code-tag">items</small> prop to display labels
            instead of raw values.
          </li>
          <li>
            <Link to="/docs/components/base/input-otp">Input OTP</Link> uses{" "}
            <small className="code-tag">length</small> instead of{" "}
            <small className="code-tag">maxLength</small>, and slots no longer
            need an <small className="code-tag">index</small>.
          </li>
        </ul>
      </article>
      <article id="november-2025---new-components">
        <h3>November 2025 - New components</h3>
        <p>
          Following the latest{" "}
          <a
            href="https://ui.shadcn.com/docs/changelog#october-2025---new-components"
            target="_blank">
            shadcn/ui release
          </a>
          , this update covers the new components he just shipped. As he
          mentioned, the goal is to save time by avoiding the need to rebuild
          the same boring, repetitive pieces that are basically combinations of
          existing components. Enjoy!
        </p>
        <ul>
          <li>
            <a href="/docs/components/spinner" target="_blank">
              Spinner
            </a>
            : An indicator to show a loading state.
          </li>
          <li>
            <a href="/docs/components/kbd" target="_blank">
              Kbd
            </a>
            : Display a keyboard key or group of keys.
          </li>
          <li>
            <a href="/docs/components/button-group" target="_blank">
              Button Group
            </a>
            : A group of buttons for actions and split buttons.
          </li>
          <li>
            <a href="/docs/components/input-group" target="_blank">
              Input Group
            </a>
            : Input with icons, buttons, labels and more.
          </li>
          <li>
            <a href="/docs/components/field" target="_blank">
              Field
            </a>
            : One component. All your forms.
          </li>
          <li>
            <a href="/docs/components/item" target="_blank">
              Item
            </a>
            : Display lists of items, cards, and more.
          </li>
          <li>
            <a href="/docs/components/empty" target="_blank">
              Empty
            </a>
            : Use this one for empty states.
          </li>
        </ul>
      </article>
    </div>
  );
}
