"use client";

import { useTranslations } from "next-intl";
import React from "react";
import BodyRecordImage from "@/public/images/body.png";
import MyExerciseImage from "@/public/images/exercise.png";
import MyDiaryImage from "@/public/images/diary.png";
import { OwnRecordMenuType } from "@/types/OwnRercord";

const OwnRecordMenu = () => {
  const t = useTranslations("Own Record");

  const menuItems: OwnRecordMenuType[] = [
    {
      id: "body-record",
      title: t("Body Record"),
      subTitle: t("My Body Record"),
      image: BodyRecordImage,
    },
    {
      id: "exercise",
      title: t("My Exercise"),
      subTitle: t("My Exercise Record"),
      image: MyExerciseImage,
    },
    {
      id: "diary",
      title: t("My Diary"),
      subTitle: t("My Diary Record"),
      image: MyDiaryImage,
    },
  ];

  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="grid grid-cols-3 gap-12">
      {menuItems.map((menu) => (
        <li
          key={menu.id}
          className="w-full h-[288px] flex flex-col gap-4 relative p-6 bg-primary-300 cursor-pointer hover:opacity-90"
          onClick={() => handleScrollToId(menu.id)}
        >
          <img
            src={menu.image.src}
            alt={menu.title}
            width={240}
            height={240}
            className="object-cover z-10 grayscale bg-black opacity-90"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 flex flex-col items-center gap-2">
            <h3 className="text-[25px] font-normal text-primary-300 font-inter w-[200px]">
              {menu.title}
            </h3>
            <div className="w-[160px] h-6 bg-primary-400 flex justify-center items-center">
              <p className="text-sm font-light text-white text-center">
                {menu.subTitle}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OwnRecordMenu;
