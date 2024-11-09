import { StaticImageData } from "next/image";

export type OwnRecordMenuType = {
  id: string;
  title: string;
  subTitle: string;
  image: StaticImageData;
};

export type MyExerciseData = {
  date: string;
  name: string;
  kcal: number;
  time: number;
};

export type MyDiaryData = {
  date: string;
  content: string;
};
