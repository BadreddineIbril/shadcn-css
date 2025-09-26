import Code from "@/components/misc/code";

export default function Typography() {
  return (
    <div data-content="typography">
      <article id="h1">
        <h3>h1</h3>
        <p className="h1">Taxing Laughter: The Joke Tax Chronicles</p>
        <Code
          code={[
            {
              lang: "css",
              content: `h1 {\n  font-size: var(--text-4xl);\n  font-weight: var(--font-weight-extrabold);\n  letter-spacing: var(--tracking-tight);\n  line-height: var(--text-4xl--line-height);\n}`,
            },
          ]}
        />
      </article>
      <article id="h2">
        <h3>h2</h3>
        <p className="h2">The People of the Kingdom</p>
        <Code
          code={[
            {
              lang: "css",
              content: `h2 {\n  font-size: var(--text-3xl);\n  font-weight: var(--font-weight-semibold);\n  letter-spacing: var(--tracking-tight);\n  line-height: var(--text-3xl--line-height);\n}`,
            },
          ]}
        />
      </article>
      <article id="h3">
        <h3>h3</h3>
        <p className="h3">The Joke Tax</p>
        <Code
          code={[
            {
              lang: "css",
              content: `h3 {\n  font-size: var(--text-2xl);\n  font-weight: var(--font-weight-semibold);\n  letter-spacing: var(--tracking-tight);\n  line-height: var(--text-2xl--line-height);\n}`,
            },
          ]}
        />
      </article>
      <article id="h4">
        <h3>h4</h3>
        <p className="h4">People stopped telling jokes</p>
        <Code
          code={[
            {
              lang: "css",
              content: `h4 {\n  font-size: var(--text-xl);\n  font-weight: var(--font-weight-semibold);\n  letter-spacing: var(--tracking-tight);\n  line-height: var(--text-xl--line-height);\n}`,
            },
          ]}
        />
      </article>
      <article id="p">
        <h3>p</h3>
        <p className="p">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
        <Code
          code={[
            {
              lang: "css",
              content: `p {\n  font-size: var(--text-sm);\n  line-height: var(--text-sm--line-height);\n}`,
            },
          ]}
        />
      </article>
      <article id="blockquote">
        <h3>blockquote</h3>
        <blockquote>
          "After all," he said, "everyone enjoys a good joke, so it's only fair
          that they should pay for the privilege."
        </blockquote>
        <Code
          code={[
            {
              lang: "css",
              content: `blockquote {\n  font-size: var(--text-sm);\n  font-style: italic;\n  line-height: var(--text-sm--line-height);\n  border-inline-start: 2px solid var(--color-border);\n}`,
            },
          ]}
        />
      </article>
      <article id="list">
        <h3>list</h3>
        <ul>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        <Code
          code={[
            {
              lang: "css",
              content: `ul {\n  display: grid;\n  gap: calc(var(--spacing) * 2);\n  font-size: var(--text-sm);\n  line-height: var(--text-sm--line-height);\n  list-style: disc;\n}`,
            },
          ]}
        />
      </article>
      <article id="inline-code">
        <h3>Inline code</h3>
        <div>
          <code>@radix-ui/react-alert-dialog</code>
        </div>
        <Code
          code={[
            {
              lang: "css",
              content: `code {\n  padding: 0.2rem 0.3rem;\n  border-radius: var(--radius-sm);\n  background-color: var(--color-muted);\n  font-family: monospace;\n  font-size: var(--text-sm);\n  line-height: var(--text-sm--line-height);\n}`,
            },
          ]}
        />
      </article>
      <article id="lead">
        <h3>Lead</h3>
        <p className="lead">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
        <Code
          code={[
            {
              lang: "css",
              content: `.lead {\n  color: var(--color-muted-foreground);\n  font-size: var(--text-xl);\n  line-height: var(--text-xl--line-height);\n}`,
            },
          ]}
        />
      </article>
      <article id="large">
        <h3>Large</h3>
        <p className="large">Are you absolutely sure?</p>
        <Code
          code={[
            {
              lang: "css",
              content: `.large {\n  font-size: var(--text-lg);\n  font-weight: var(--font-weight-semibold);\n  line-height: var(--text-lg--line-height);\n}`,
            },
          ]}
        />
      </article>
      <article id="small">
        <h3>Small</h3>
        <p className="small">Email address</p>
        <Code
          code={[
            {
              lang: "css",
              content: `.small {\n  font-size: var(--text-sm);\n  font-weight: var(--font-weight-semibold);\n  line-height: var(--text-sm--line-height);\n}`,
            },
          ]}
        />
      </article>
      <article id="muted">
        <h3>Muted</h3>
        <p className="muted">Enter your email address.</p>
        <Code
          code={[
            {
              lang: "css",
              content: `.muted {\n  color: var(--color-muted-foreground);\n  font-size: var(--text-sm);\n  line-height: var(--text-sm--line-height);\n}`,
            },
          ]}
        />
      </article>
    </div>
  );
}
