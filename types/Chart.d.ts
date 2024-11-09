export type MealChartProps = {
  date: string;
  percentage: number;
};

export type HealthProcessChartProps = {
  date: string;
  data: {
    month: string;
    weight: number;
    bodyFat: number;
  }[];
};

export type ChartDuration = "day" | "week" | "month" | "year";

export type RecordChartProps = {
  label: string;
  value: string;
};
