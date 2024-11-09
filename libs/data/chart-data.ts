import { HealthProcessChartProps, MealChartProps } from "@/types/Chart";

export const mealChartData: MealChartProps = {
  date: "2024-11-11T00:00:00.000Z",
  percentage: 75,
};

export const healthProcessChartData: HealthProcessChartProps = {
  date: "2024-11-11T00:00:00.000Z",
  data: [
    { month: "6", weight: 76, bodyFat: 76 },
    { month: "7", weight: 66, bodyFat: 59 },
    { month: "8", weight: 43, bodyFat: 36 },
    { month: "9", weight: 31, bodyFat: 41 },
    { month: "10", weight: 40, bodyFat: 59 },
    { month: "11", weight: 54, bodyFat: 37 },
    { month: "12", weight: 45, bodyFat: 67 },
    { month: "1", weight: 45, bodyFat: 57 },
    { month: "2", weight: 20, bodyFat: 39 },
    { month: "3", weight: 48, bodyFat: 55 },
    { month: "4", weight: 53, bodyFat: 40 },
    { month: "5", weight: 22, bodyFat: 16 },
  ],
};
