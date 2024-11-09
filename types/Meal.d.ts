import { StaticImageData } from "next/image";

export type MealType = "morning" | "lunch" | "dinner" | "snack";

export type MealData = {
  date: string;
  img: StaticImageData;
  type: MealType;
};
