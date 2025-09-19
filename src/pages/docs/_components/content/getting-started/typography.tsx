import TsxCode from "@/components/misc/code/tsx-code";

export default function Typography() {
  return (
    <div data-content="typography">
      <article>
        <h3>h1</h3>
        <p className="h1">Taxing Laughter: The Joke Tax Chronicles</p>
        <TsxCode
          code={`h1 {\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-extrabold);\n  letter-spacing: var(--tracking-tight);\n  line-height: var(--text-4xl--line-height);\n}`}
          fixedHeight={false}
        />
      </article>
      <article>
        <h3>h2</h3>
        <p className="h2">The People of the Kingdom</p>
        <TsxCode
          code={`h2 {\n  font-size: var(--text-3xl);\n  font-weight: var(--font-weight-semibold);\n  letter-spacing: var(--tracking-tight);\n  line-height: var(--text-3xl--line-height);\n}`}
          fixedHeight={false}
        />
      </article>
      <article>
        <h3>h3</h3>
        <p className="h3">The Joke Tax</p>
        <TsxCode
          code={`h3 {\n  font-size: var(--text-2xl);\n  font-weight: var(--font-weight-semibold);\n  letter-spacing: var(--tracking-tight);\n  line-height: var(--text-2xl--line-height);\n}`}
          fixedHeight={false}
        />
      </article>
      <article>
        <h3>h4</h3>
        <p className="h4">People stopped telling jokes</p>
        <TsxCode
          code={`h4 {\n  font-size: var(--text-xl);\n  font-weight: var(--font-weight-semibold);\n  letter-spacing: var(--tracking-tight);\n  line-height: var(--text-xl--line-height);\n}`}
          fixedHeight={false}
        />
      </article>
      <article>
        <h3>p</h3>
        <p className="p">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
        <TsxCode
          code={`p {\n  font-size: var(--text-sm);\n  line-height: var(--text-sm--line-height);\n}`}
          fixedHeight={false}
        />
      </article>
      <article>
        <h3>blockquote</h3>
        <blockquote>
          "After all," he said, "everyone enjoys a good joke, so it's only fair
          that they should pay for the privilege."
        </blockquote>
        <TsxCode
          code={`blockquote {\n  font-size: var(--text-sm);\n  font-style: italic;\n  line-height: var(--text-sm--line-height);\n  border-inline-start: 2px solid var(--color-border);\n}`}
          fixedHeight={false}
        />
      </article>
      <article>
        <h3>list</h3>
        <ul>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        <TsxCode
          code={`ul {\n  display: grid;\n  gap: calc(var(--spacing) * 2);\n  font-size: var(--text-sm);\n  line-height: var(--text-sm--line-height);\n  list-style: disc;\n}`}
          fixedHeight={false}
        />
      </article>
      <article>
        <h3>Inline code</h3>
        <div>
          <code>@radix-ui/react-alert-dialog</code>
        </div>
        <TsxCode
          code={`code {\n  padding: 0.2rem 0.3rem;\n  border-radius: var(--radius-sm);\n  background-color: var(--color-muted);\n  font-family: monospace;\n  font-size: var(--text-sm);\n  line-height: var(--text-sm--line-height);\n}`}
          fixedHeight={false}
        />
      </article>
      <article>
        <h3>Lead</h3>
        <p className="lead">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
        <TsxCode
          code={`.lead {\n  color: var(--color-muted-foreground);\n  font-size: var(--text-xl);\n  line-height: var(--text-xl--line-height);\n}`}
          fixedHeight={false}
        />
      </article>
      <article>
        <h3>Large</h3>
        <p className="large">Are you absolutely sure?</p>
        <TsxCode
          code={`.large {\n  font-size: var(--text-lg);\n  font-weight: var(--font-weight-semibold);\n  line-height: var(--text-lg--line-height);\n}`}
          fixedHeight={false}
        />
      </article>
      <article>
        <h3>Small</h3>
        <p className="small">Email address</p>
        <TsxCode
          code={`.small {\n  font-size: var(--text-sm);\n  font-weight: var(--font-weight-semibold);\n  line-height: var(--text-sm--line-height);\n}`}
          fixedHeight={false}
        />
      </article>
      <article>
        <h3>Muted</h3>
        <p className="muted">Enter your email address.</p>
        <TsxCode
          code={`.muted {\n  color: var(--color-muted-foreground);\n  font-size: var(--text-sm);\n  line-height: var(--text-sm--line-height);\n}`}
          fixedHeight={false}
        />
      </article>
    </div>
  );
}
