import { Bar, BarChart } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
} satisfies ChartConfig;

<ChartContainer config={chartConfig} style={{ minHeight: "200px" }}>
  <BarChart data={[{ month: "January", desktop: 186 }]}>
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
  </BarChart>
</ChartContainer>;
