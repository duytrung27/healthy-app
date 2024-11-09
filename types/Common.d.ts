import { StaticImageData } from "next/image";

export type Menu = {
  label: string;
  icon?: StaticImageData;
  path: string;
  badge?: number;
};

export type MealMenuType = {
  label: string;
  icon: StaticImageData;
  type: "morning" | "lunch" | "dinner" | "snack" | "";
};
