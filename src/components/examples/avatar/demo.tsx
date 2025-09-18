import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "48px",
      }}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar style={{ borderRadius: "8px" }}>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div style={{ display: "flex" }}>
        <Avatar
          style={{
            border: "2px solid var(--color-background)",
            filter: "grayscale(1)",
          }}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar
          style={{
            border: "2px solid var(--color-background)",
            transform: "translateX(-0.5rem)",
          }}>
          <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar
          style={{
            border: "2px solid var(--color-background)",
            transform: "translateX(-1rem)",
          }}>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
