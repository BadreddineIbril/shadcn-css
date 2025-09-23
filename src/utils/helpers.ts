import { toast } from "sonner";

function formatName(id: string) {
  return (id.charAt(0).toUpperCase() + id.slice(1)).replace("-", " ");
}

async function copy(content: string) {
  if (!content) return;

  try {
    await navigator.clipboard.writeText(content);

    toast("Component copied!");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

function setMetaTags(
  title: string,
  description: string = "Beautifully designed components that you can copy and paste into your apps. Made with CSS Modules instead Tailwind CSS. Open source."
) {
  document.title = `${title} - shadcn/css`;

  const ogTitles = document.querySelectorAll<HTMLMetaElement>(
    "meta[name*='title'], meta[property*='title']"
  );
  const descriptions = document.querySelectorAll<HTMLMetaElement>(
    "meta[name*='description'], meta[property*='description']"
  );

  for (const title of ogTitles) title.content = `${title} - shadcn/css`;
  for (const desc of descriptions) desc.content = description;
}

export { formatName, copy, setMetaTags };
