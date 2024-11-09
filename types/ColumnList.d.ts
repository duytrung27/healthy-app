import { StaticImageData } from "next/image";

export type ColumnListMenuType = {
  title: string;
  subTitle: string;
};

export type ColumnListData = {
  date: string;
  content: string;
  img: StaticImageData;
  hashtag: string[];
};
