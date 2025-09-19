import TsxCode from "@/components/misc/code/tsx-code";

export default function Theming() {
  return (
    <div data-content="theming">
      <article>
        <h3>Convention</h3>
        <p>
          We use a simple <code>background</code> and <code>foreground</code>{" "}
          convention for colors. The <code>background</code> variable is used
          for the background color of the component and the{" "}
          <code>foreground</code> variable is used for the text color.
        </p>
        <p>Given the following CSS variables:</p>
        <TsxCode
          code={`--primary: oklch(0.205 0 0); \n--primary-foreground: oklch(0.985 0 0);`}
          fixedHeight={false}
        />
        <p>
          The <code>background</code> color of the following component will be
          <code>var(--primary)</code> and the <code>foreground</code> color will
          be <code>var(--primary-foreground)</code>.
        </p>
        <TsxCode
          code={`body {\n  background-color: var(--color-secondary);\n  color: var(--color-foreground);\n}`}
          fixedHeight={false}
        />
        <h3>List of variables</h3>
        <p>Here's the list of variables available for customization:</p>
        <TsxCode
          code={`:root {\n  --radius: 0.625rem;\n  --background: oklch(1 0 0);\n  --foreground: oklch(0.145 0 0);\n  --card: oklch(1 0 0);\n  --card-foreground: oklch(0.145 0 0);\n  --popover: oklch(1 0 0);\n  --popover-foreground: oklch(0.145 0 0);\n  --primary: oklch(0.205 0 0);\n  --primary-foreground: oklch(0.985 0 0);\n  --secondary: oklch(0.97 0 0);\n  --secondary-foreground: oklch(0.205 0 0);\n  --muted: oklch(0.97 0 0);\n  --muted-foreground: oklch(0.556 0 0);\n  --accent: oklch(0.97 0 0);\n  --accent-foreground: oklch(0.205 0 0);\n  --destructive: oklch(0.577 0.245 27.325);\n  --border: oklch(0.922 0 0);\n  --input: oklch(0.922 0 0);\n  --ring: oklch(0.708 0 0);\n  --chart-1: oklch(0.646 0.222 41.116);\n  --chart-2: oklch(0.6 0.118 184.704);\n  --chart-3: oklch(0.398 0.07 227.392);\n  --chart-4: oklch(0.828 0.189 84.429);\n  --chart-5: oklch(0.769 0.188 70.08);\n  --sidebar: oklch(0.985 0 0);\n  --sidebar-foreground: oklch(0.145 0 0);\n  --sidebar-primary: oklch(0.205 0 0);\n  --sidebar-primary-foreground: oklch(0.985 0 0);\n  --sidebar-accent: oklch(0.97 0 0);\n  --sidebar-accent-foreground: oklch(0.205 0 0);\n  --sidebar-border: oklch(0.922 0 0);\n  --sidebar-ring: oklch(0.708 0 0);\n}\n\n.dark {\n  --background: oklch(0.145 0 0);\n  --foreground: oklch(0.985 0 0);\n  --card: oklch(0.205 0 0);\n  --card-foreground: oklch(0.985 0 0);\n  --popover: oklch(0.269 0 0);\n  --popover-foreground: oklch(0.985 0 0);\n  --primary: oklch(0.922 0 0);\n  --primary-foreground: oklch(0.205 0 0);\n  --secondary: oklch(0.269 0 0);\n  --secondary-foreground: oklch(0.985 0 0);\n  --muted: oklch(0.269 0 0);\n  --muted-foreground: oklch(0.708 0 0);\n  --accent: oklch(0.371 0 0);\n  --accent-foreground: oklch(0.985 0 0);\n  --destructive: oklch(0.704 0.191 22.216);\n  --border: oklch(1 0 0 / 10%);\n  --input: oklch(1 0 0 / 15%);\n  --ring: oklch(0.556 0 0);\n  --chart-1: oklch(0.488 0.243 264.376);\n  --chart-2: oklch(0.696 0.17 162.48);\n  --chart-3: oklch(0.769 0.188 70.08);\n  --chart-4: oklch(0.627 0.265 303.9);\n  --chart-5: oklch(0.645 0.246 16.439);\n  --sidebar: oklch(0.205 0 0);\n  --sidebar-foreground: oklch(0.985 0 0);\n  --sidebar-primary: oklch(0.488 0.243 264.376);\n  --sidebar-primary-foreground: oklch(0.985 0 0);\n  --sidebar-accent: oklch(0.269 0 0);\n  --sidebar-accent-foreground: oklch(0.985 0 0);\n  --sidebar-border: oklch(1 0 0 / 10%);\n  --sidebar-ring: oklch(0.439 0 0);\n}`}
          fixedHeight={false}
        />
        <h3>Adding new colors</h3>
        <TsxCode
          code={`:root {\n  --warning: oklch(0.84 0.16 84);\n  --warning-foreground: oklch(0.28 0.07 46);\n}\n\n.dark {\n  --warning: oklch(0.41 0.11 46);\n  --warning-foreground: oklch(0.99 0.02 95);\n}\n\n@theme inline {\n  --color-warning: var(--warning);\n  --color-warning-foreground: var(--warning-foreground);\n`}
          fixedHeight={false}
        />
      </article>
      <article>
        <h3>TypeScript</h3>
      </article>
    </div>
  );
}
