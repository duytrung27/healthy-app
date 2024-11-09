"use client";

import { healthProcessChartData } from "@/libs/data/chart-data";
import { myExerciseList } from "@/libs/data/my-own-data";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import React from "react";

const MyExercise = () => {
  const t = useTranslations("Own Record");

  return (
    <div id="exercise" className="bg-dark-500 flex flex-col gap-2 px-6 py-4">
      <div className="flex items-center gap-8 font-inter">
        <h3 className="text-[15px] text-white font-normal  w-[10px] text-wrap">
          {t("My Exercise")}
        </h3>
        <h2 className="text-[22px] text-white font-normal ml-10">
          {dayjs(healthProcessChartData.date).format("YYYY.MM.DD")}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-x-12 gap-y-4 h-[192px] overflow-y-auto text-white">
        {myExerciseList.map((item) => (
          <li
            key={item.date}
            className="flex justify-between border-b border-gray-400 pb-2 mr-8"
          >
            <div className="flex gap-2">
              <div className="w-1 h-1 bg-white rounded-full mt-2" />
              <div className="flex flex-col text-[15px] font-light">
                <h4>{item.name}</h4>
                <h3 className="text-primary-300">{item.kcal}kcal</h3>
              </div>
            </div>

            <h4 className="text-lg font-normal text-primary-300 font-inter">
              {item.time} min
            </h4>
          </li>
        ))}
      </div>
    </div>
  );
};

export default MyExercise;
