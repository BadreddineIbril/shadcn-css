import Skeleton from "@/components/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Skeleton
        style={{ height: "42px", width: "42px", borderRadius: "9999px" }}
      />
      <div style={{ display: "grid", gap: "8px" }}>
        <Skeleton style={{ height: "14px", width: "200px" }} />
        <Skeleton style={{ height: "14px", width: "150px" }} />
      </div>
    </div>
  );
}
