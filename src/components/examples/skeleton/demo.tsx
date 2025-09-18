import Skeleton from "@/components/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Skeleton
        style={{ height: "48px", width: "48px", borderRadius: "9999px" }}
      />
      <div style={{ display: "grid", gap: "8px" }}>
        <Skeleton style={{ height: "16px", width: "250px" }} />
        <Skeleton style={{ height: "16px", width: "200px" }} />
      </div>
    </div>
  );
}
