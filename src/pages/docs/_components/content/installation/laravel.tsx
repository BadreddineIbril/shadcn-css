import Code from "@/components/misc/code";

export default function Laravel() {
  return (
    <div data-content="laravel">
      <article id="create-project">
        <h3>Create project</h3>
        <p>
          Start by creating a new Laravel project with Inertia and React using
          the laravel installer{" "}
          <small className="code-tag">laravel new my-app</small>:
        </p>
        <Code
          code={[{ lang: "bash", content: "laravel new my-app --react" }]}
        />
      </article>
      <article id="add-components">
        <h3>Add Components</h3>
        <p>You can now start adding components to your project.</p>
        <Code
          variant="dependencies"
          name="shadcn-css@latest add switch"
          code={[]}
        />
        <p>
          The command above will add the{" "}
          <small className="code-tag">Switch</small> component to
          <small className="code-tag">
            resources/js/components/ui/switch.tsx
          </small>
          . You can then import it like this:
        </p>
        <Code
          code={[
            {
              lang: "tsx",
              content: `import Switch from "@/components/ui/switch"\n\nconst MyPage = () => {\n  return (\n    <div>\n      <Switch />\n    </div>\n  )\n}\n\nexport default MyPage`,
            },
          ]}
        />
      </article>
    </div>
  );
}
