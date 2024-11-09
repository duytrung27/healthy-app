"use client";

import { HealthProcessChart } from "@/components/chart/HealthProcessChart";
import { healthProcessChartData } from "@/libs/data/chart-data";
import { cn } from "@/libs/utils";
import { ChartDuration, RecordChartProps } from "@/types/Chart";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const BodyRecord = () => {
  const t = useTranslations("Own Record");

  const menuItems: RecordChartProps[] = [
    { label: t("Day"), value: "day" },
    { label: t("Week"), value: "week" },
    { label: t("Month"), value: "month" },
    { label: t("Year"), value: "year" },
  ];

  const [chartDuration, setChartDuration] = useState<
    "day" | "week" | "month" | "year"
  >("year");

  return (
    <div id="body-record" className="bg-dark-500 flex flex-col gap-2 px-6 py-4">
      <div className="flex items-center gap-8 font-inter">
        <h3 className="text-[15px] text-white font-normal  w-[10px] text-wrap">
          {t("Body Record")}
        </h3>
        <h2 className="text-[22px] text-white font-normal ml-10">
          {dayjs(healthProcessChartData.date).format("YYYY.MM.DD")}
        </h2>
      </div>
      <HealthProcessChart />
      <ol className="flex items-center gap-4 text-white">
        {menuItems.map((item) => (
          <li
            key={item.value}
            className={cn(
              "rounded-[11px] w-[56px] h-[24px] text-[15px] font-normal bg-white text-primary-300 text-center cursor-pointer hover:bg-primary-300 hover:text-white",
              chartDuration === item.value && "bg-primary-300 text-white"
            )}
            onClick={() => setChartDuration(item.value as ChartDuration)}
          >
            {item.label}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BodyRecord;
