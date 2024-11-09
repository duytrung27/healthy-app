import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {} satisfies ChartConfig;

interface Props {
  score: number;
}

export function MealChart({ score }: Props) {
  const chartData = [{ score, fill: "#FFFFFF" }];

  return (
    <ChartContainer className="w-[281px] h-[281px]" config={chartConfig}>
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={90 - (score / 100) * 360}
        innerRadius={100}
        outerRadius={110}
      >
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="3"
              floodColor="#FC7400"
              floodOpacity="1"
            />
          </filter>
        </defs>

        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          polarRadius={[86, 74]}
        />

        <RadialBar
          dataKey="score"
          background
          cornerRadius={0}
          filter="url(#shadow)"
        />

        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <defs>
            <filter
              id="textShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="3"
                floodColor="#FC7400"
                floodOpacity="1"
              />
            </filter>
          </defs>
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
