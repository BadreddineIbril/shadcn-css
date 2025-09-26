import AstroIcon from "@/assets/icons/astro";
import NextJsIcon from "@/assets/icons/next-js";
import RemixIcon from "@/assets/icons/remix";
import ViteIcon from "@/assets/icons/vite";
import Code from "@/components/misc/code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DarkMode() {
  const options = [
    { label: "Vite", value: "vite", icon: <ViteIcon /> },
    { label: "Next.js", value: "next.js", icon: <NextJsIcon /> },
    { label: "Astro", value: "astro", icon: <AstroIcon /> },
    { label: "Remix", value: "remix", icon: <RemixIcon /> },
  ];

  return (
    <div data-content="dark-mode">
      <Tabs defaultValue="vite">
        <TabsList>
          {options.map((opt) => (
            <TabsTrigger key={opt.value} value={opt.value}>
              {opt.icon}
              <span className="label">{opt.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="vite">
          <article>
            <h3>Create a theme provider</h3>
            <p>
              <small className="code-tag">components/theme-provider.tsx</small>
            </p>
            <Code
              code={[
                {
                  lang: "tsx",
                  content: `import { createContext, useContext, useEffect, useState } from "react"\n\ntype Theme = "dark" | "light" | "system"\n\ntype ThemeProviderProps = {\n  children: React.ReactNode\n  defaultTheme?: Theme\n  storageKey?: string\n}\n\ntype ThemeProviderState = {\n  theme: Theme\n  setTheme: (theme: Theme) => void\n}\n\nconst initialState: ThemeProviderState = {\n  theme: "system",\n  setTheme: () => null,\n}\n\nconst ThemeProviderContext = createContext<ThemeProviderState>(initialState)\n\nexport function ThemeProvider({\n  children,\n  defaultTheme = "system",\n  storageKey = "vite-ui-theme",\n  ...props\n}: ThemeProviderProps) {\n  const [theme, setTheme] = useState<Theme>(\n    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme\n  )\n\n  useEffect(() => {\n    const root = window.document.documentElement\n\n    root.classList.remove("light", "dark")\n\n    if (theme === "system") {\n      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")\n        .matches\n        ? "dark"\n        : "light"\n\n      root.classList.add(systemTheme)\n      return\n    }\n\n    root.classList.add(theme)\n  }, [theme])\n\n  const value = {\n    theme,\n    setTheme: (theme: Theme) => {\n      localStorage.setItem(storageKey, theme)\n      setTheme(theme)\n    },\n  }\n\n  return (\n    <ThemeProviderContext.Provider {...props} value={value}>\n      {children}\n    </ThemeProviderContext.Provider>\n  )\n}\n\nexport const useTheme = () => {\n  const context = useContext(ThemeProviderContext)\n\n  if (context === undefined)\n    throw new Error("useTheme must be used within a ThemeProvider")\n\n  return context\n}`,
                },
              ]}
            />
          </article>
          <article>
            <h3>Wrap your root layout</h3>
            <p>
              Add the <small className="code-tag">ThemeProvider</small> to your
              root layout.
            </p>
            <p>
              <small className="code-tag">App.tsx</small>
            </p>
            <Code
              code={[
                {
                  lang: "tsx",
                  content: `import { ThemeProvider } from "@/components/theme-provider"\n\nfunction App() {\n  return (\n    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">\n      {children}\n    </ThemeProvider>\n  )\n}\n\nexport default App;`,
                },
              ]}
            />
          </article>
          <article>
            <h3>Add a mode toggle</h3>
            <p>
              Place a mode toggle on your site to toggle between light and dark
              mode.
            </p>
            <p>
              <small className="code-tag">components/mode-toggle.tsx</small>
            </p>
            <Code
              code={[
                {
                  lang: "tsx",
                  content: `import { Moon, Sun } from "lucide-react"\nimport Button from "@/components/ui/button"\nimport {\n  DropdownMenu,\n  DropdownMenuContent,\n  DropdownMenuItem,\n  DropdownMenuTrigger,\n} from "@/components/ui/dropdown-menu"\nimport { useTheme } from "@/components/theme-provider"\n\nexport function ModeToggle() {\n  const { theme, setTheme } = useTheme()\n\n  return (\n    <DropdownMenu>\n      <DropdownMenuTrigger asChild>\n        <Button variant="outline" size="icon" aria-label="toggle theme">\n          {theme === "light" ? <Sun  /> : <Moon  />}\n        </Button>\n      </DropdownMenuTrigger>\n      <DropdownMenuContent align="end">\n        <DropdownMenuItem onClick={() => setTheme("light")}>\n          Light\n        </DropdownMenuItem>\n        <DropdownMenuItem onClick={() => setTheme("dark")}>\n          Dark\n        </DropdownMenuItem>\n        <DropdownMenuItem onClick={() => setTheme("system")}>\n          System\n        </DropdownMenuItem>\n      </DropdownMenuContent>\n    </DropdownMenu>\n  )\n}`,
                },
              ]}
            />
          </article>
        </TabsContent>
        <TabsContent value="next.js">
          <article>
            <h3>Install next-themes</h3>
            <p>
              Start by installing{" "}
              <small className="code-tag">next-themes</small>:
            </p>
            <Code variant="dependencies" name="next-themes" code={[]} />
          </article>
          <article>
            <h3>Create a theme provider</h3>
            <p>
              <small className="code-tag">components/theme-provider.tsx</small>
            </p>
            <Code
              code={[
                {
                  lang: "tsx",
                  content: `"use client"\n\nimport * as React from "react"\nimport { ThemeProvider as NextThemesProvider } from "next-themes"\n\nexport function ThemeProvider({\n  children,\n  ...props\n}: React.ComponentProps<typeof NextThemesProvider>) {\n  return <NextThemesProvider {...props}>{children}</NextThemesProvider>\n}`,
                },
              ]}
            />
          </article>
          <article>
            <h3>Wrap your root layout</h3>
            <p>
              Add the <small className="code-tag">ThemeProvider</small> to your
              root layout and add the{" "}
              <small className="code-tag">suppressHydrationWarning</small> prop
              to the <small className="code-tag">html</small> tag.
            </p>
            <p>
              <small className="code-tag">app/layout.tsx</small>
            </p>
            <Code
              code={[
                {
                  lang: "tsx",
                  content: `import { ThemeProvider } from "@/components/theme-provider"\n\nexport default function RootLayout({ children }: RootLayoutProps) {\n  return (\n    <>\n      <html lang="en" suppressHydrationWarning>\n        <head />\n        <body>\n          <ThemeProvider\n            attribute="class"\n            defaultTheme="system"\n            enableSystem\n            disableTransitionOnChange\n          >\n            {children}\n          </ThemeProvider>\n        </body>\n      </html>\n    </>\n  )\n}`,
                },
              ]}
            />
          </article>
          <article>
            <h3>Add a mode toggle</h3>
            <p>
              Place a mode toggle on your site to toggle between light and dark
              mode.
            </p>
            <p>
              <small className="code-tag">components/mode-toggle.tsx</small>
            </p>
            <Code
              fixedHight
              code={[
                {
                  lang: "tsx",
                  content: `"use client"\n\nimport * as React from "react"\nimport { Moon, Sun } from "lucide-react"\nimport { useTheme } from "next-themes"\n\nimport Button from "@/components/ui/button"\nimport {\n  DropdownMenu,\n  DropdownMenuContent,\n  DropdownMenuItem,\n  DropdownMenuTrigger,\n} from "@/components/ui/dropdown-menu"\n\nexport function ModeToggle() {\n  const { theme, setTheme } = useTheme()\n\n  return (\n    <DropdownMenu>\n      <DropdownMenuTrigger asChild>\n        <Button variant="outline" size="icon" aria-label="toggle theme">\n          {theme === "light" ? <Sun /> : <Moon />}\n        </Button>\n      </DropdownMenuTrigger>\n      <DropdownMenuContent align="end">\n        <DropdownMenuItem onClick={() => setTheme("light")}>\n          Light\n        </DropdownMenuItem>\n        <DropdownMenuItem onClick={() => setTheme("dark")}>\n          Dark\n        </DropdownMenuItem>\n        <DropdownMenuItem onClick={() => setTheme("system")}>\n          System\n        </DropdownMenuItem>\n      </DropdownMenuContent>\n    </DropdownMenu>\n  )\n}`,
                },
              ]}
            />
          </article>
        </TabsContent>
        <TabsContent value="astro">
          <article>
            <h3>Create an inline theme script</h3>
            <p>
              <small className="code-tag">src/pages/index.astro</small>
            </p>
            <Code
              code={[
                {
                  lang: "astro",
                  content: `---\nimport '../styles/tokens.css'\nimport '../styles/globals.css'\n---\n\n<script is:inline>\n\tconst getThemePreference = () => {\n\t\tif (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n\t\t\treturn localStorage.getItem('theme');\n\t\t}\n\t\treturn window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';\n\t};\n\tconst isDark = getThemePreference() === 'dark';\n\tdocument.documentElement.classList[isDark ? 'add' : 'remove']('dark');\n\n\tif (typeof localStorage !== 'undefined') {\n\t\tconst observer = new MutationObserver(() => {\n\t\t\tconst isDark = document.documentElement.classList.contains('dark');\n\t\t\tlocalStorage.setItem('theme', isDark ? 'dark' : 'light');\n\t\t});\n\t\tobserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });\n\t}\n</script>\n\n<html lang="en">\n\t<body>\n      <h1>Astro</h1>\n\t</body>\n</html>`,
                },
              ]}
            />
          </article>
          <article>
            <h3>Add a mode toggle</h3>
            <p>
              <small className="code-tag">src/components/ModeToggle.tsx</small>
            </p>
            <Code
              code={[
                {
                  lang: "tsx",
                  content: `import * as React from "react"\nimport { Moon, Sun } from "lucide-react"\n\nimport Button from "@/components/ui/button"\nimport {\n  DropdownMenu,\n  DropdownMenuContent,\n  DropdownMenuItem,\n  DropdownMenuTrigger,\n} from "@/components/ui/dropdown-menu"\n\nexport function ModeToggle() {\n  const [theme, setThemeState] = React.useState<\n    "theme-light" | "dark" | "system"\n  >("theme-light")\n\n  React.useEffect(() => {\n    const isDarkMode = document.documentElement.classList.contains("dark")\n    setThemeState(isDarkMode ? "dark" : "theme-light")\n  }, [])\n\n  React.useEffect(() => {\n    const isDark =\n      theme === "dark" ||\n      (theme === "system" &&\n        window.matchMedia("(prefers-color-scheme: dark)").matches)\n    document.documentElement.classList[isDark ? "add" : "remove"]("dark")\n  }, [theme])\n\n  return (\n    <DropdownMenu>\n      <DropdownMenuTrigger asChild>\n        <Button variant="outline" size="icon" aria-label="toggle theme">\n          {theme === "dark" ? <Moon /> : <Sun />}\n        </Button>\n      </DropdownMenuTrigger>\n      <DropdownMenuContent align="end">\n        <DropdownMenuItem onClick={() => setThemeState("theme-light")}>\n          Light\n        </DropdownMenuItem>\n        <DropdownMenuItem onClick={() => setThemeState("dark")}>\n          Dark\n        </DropdownMenuItem>\n        <DropdownMenuItem onClick={() => setThemeState("system")}>\n          System\n        </DropdownMenuItem>\n      </DropdownMenuContent>\n    </DropdownMenu>\n  )\n}`,
                },
              ]}
            />
          </article>
          <article>
            <h3>Display the mode toggle</h3>
            <p>
              Place a mode toggle on your site to toggle between light and dark
              mode.
            </p>
            <p>
              <small className="code-tag">src/pages/index.astro</small>
            </p>
            <Code
              code={[
                {
                  lang: "astro",
                  content: `---\nimport '../styles/tokens.css'\nimport '../styles/globals.css'\nimport { ModeToggle } from '@/components/ModeToggle';\n---\n\n<!-- Inline script -->\n\n<html lang="en">\n\t<body>\n      <h1>Astro</h1>\n      <ModeToggle client:load />\n\t</body>\n</html>`,
                },
              ]}
            />
          </article>
        </TabsContent>
        <TabsContent value="remix">
          <article>
            <h3>Install remix-themes</h3>
            <p>
              Start by installing{" "}
              <small className="code-tag">remix-themes</small>:
            </p>
            <Code variant="dependencies" name="remix-themes" code={[]} />
          </article>
          <article>
            <h3>Create a session storage and theme session resolver</h3>
            <p>
              Start by installing{" "}
              <small className="code-tag">remix-themes</small>:
            </p>
            <Code
              code={[
                {
                  lang: "tsx",
                  content: `import { createThemeSessionResolver } from "remix-themes"\n\n// You can default to 'development' if process.env.NODE_ENV is not set\nconst isProduction = process.env.NODE_ENV === "production"\n\nconst sessionStorage = createCookieSessionStorage({\n  cookie: {\n    name: "theme",\n    path: "/",\n    httpOnly: true,\n    sameSite: "lax",\n    secrets: ["s3cr3t"],\n    // Set domain and secure only if in production\n    ...(isProduction\n      ? { domain: "your-production-domain.com", secure: true }\n      : {}),\n  },\n})\n\nexport const themeSessionResolver = createThemeSessionResolver(sessionStorage)`,
                },
              ]}
            />
          </article>
          <article>
            <h3>Set up Remix Themes</h3>
            <p>
              Add the <small className="code-tag">ThemeProvider</small> to your
              root layout.
            </p>
            <p>
              <small className="code-tag">app/root.tsx</small>
            </p>
            <Code
              code={[
                {
                  lang: "tsx",
                  content: `import clsx from "clsx"\nimport { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes"\n\nimport { themeSessionResolver } from "./sessions.server"\n\n// Return the theme from the session storage using the loader\nexport async function loader({ request }: LoaderFunctionArgs) {\n  const { getTheme } = await themeSessionResolver(request)\n  return {\n    theme: getTheme(),\n  }\n}\n// Wrap your app with ThemeProvider.\n// \`specifiedTheme\` is the stored theme in the session storage.\n// \`themeAction\` is the action name that's used to change the theme in the session storage.\nexport default function AppWithProviders() {\n  const data = useLoaderData<typeof loader>()\n  return (\n    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">\n      <App />\n    </ThemeProvider>\n  )\n}\n\nexport function App() {\n  const data = useLoaderData<typeof loader>()\n  const [theme] = useTheme()\n  return (\n    <html lang="en" className={clsx(theme)}>\n      <head>\n        <meta charSet="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <Meta />\n        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />\n        <Links />\n      </head>\n      <body>\n        <Outlet />\n        <ScrollRestoration />\n        <Scripts />\n        <LiveReload />\n      </body>\n    </html>\n  )\n}`,
                },
              ]}
            />
          </article>
          <article>
            <h3>Add an action route</h3>
            <p>
              Create a file in{" "}
              <small className="code-tag">/routes/action.set-theme.ts</small>.
              Ensure that you pass the filename to the ThemeProvider component.
              This route it's used to store the preferred theme in the session
              storage when the user changes it.
            </p>
            <Code
              code={[
                {
                  lang: "tsx",
                  content: `import { createThemeAction } from "remix-themes"\n\nimport { themeSessionResolver } from "./sessions.server"\n\nexport const action = createThemeAction(themeSessionResolver)`,
                },
              ]}
            />
          </article>
          <article>
            <h3>Add a mode toggle</h3>
            <p>
              Place a mode toggle on your site to toggle between light and dark
              mode.
            </p>
            <p>
              <small className="code-tag">components/mode-toggle.tsx</small>
            </p>
            <Code
              code={[
                {
                  lang: "tsx",

                  content: `import { Eclipse } from "lucide-react"\nimport { Theme, useTheme } from "remix-themes"\n\nimport Button from "./ui/button"\nimport {\n  DropdownMenu,\n  DropdownMenuContent,\n  DropdownMenuItem,\n  DropdownMenuTrigger,\n} from "./ui/dropdown-menu"\n\nexport function ModeToggle() {\n  const [setTheme] = useTheme()\n\n  return (\n    <DropdownMenu>\n      <DropdownMenuTrigger asChild>\n        <Button variant="ghost" size="icon" aria-label="toggle theme">\n          <Eclipse /> \n        </Button>\n      </DropdownMenuTrigger>\n      <DropdownMenuContent align="end">\n        <DropdownMenuItem onClick={() => setTheme(Theme.LIGHT)}>\n          Light\n        </DropdownMenuItem>\n        <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>\n          Dark\n        </DropdownMenuItem>\n      </DropdownMenuContent>\n    </DropdownMenu>\n  )\n}`,
                },
              ]}
            />
          </article>
        </TabsContent>
      </Tabs>
    </div>
  );
}
