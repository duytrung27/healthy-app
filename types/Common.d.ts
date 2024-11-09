import { StaticImageData } from "next/image";

export type Menu = {
  label: string;
  icon?: StaticImageData;
  path: string;
  badge?: number;
};
