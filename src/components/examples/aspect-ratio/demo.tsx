import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioDemo() {
  return (
    <AspectRatio
      ratio={16 / 9}
      style={{ backgroundColor: "var(--color-muted)", borderRadius: "8px" }}>
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
    </AspectRatio>
  );
}
