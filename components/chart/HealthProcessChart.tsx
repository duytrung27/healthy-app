"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { healthProcessChartData } from "@/libs/data/chart-data";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function HealthProcessChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="w-full h-[300px] px-10 py-3"
    >
      <LineChart
        accessibilityLayer
        data={healthProcessChartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={true} horizontal={false} stroke="#777777" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value + "月"}
          tick={{ fill: "white" }}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel className="text-white" />}
        />
        <Line
          dataKey="weight"
          type="linear"
          stroke="#FFCC21"
          strokeWidth={3}
          dot={{
            fill: "#FFCC21",
          }}
        />
        <Line
          dataKey="bodyFat"
          type="linear"
          stroke="#8FE9D0"
          strokeWidth={3}
          dot={{
            fill: "#8FE9D0",
          }}
        />
      </LineChart>
    </ChartContainer>
  );
}
