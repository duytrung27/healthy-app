"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import MealBackground from "@/public/images/meal.png";
import { MealChart } from "@/components/chart/MealChart";
import { mealChartData } from "@/libs/data/chart-data";
import dayjs from "dayjs";
import { HealthProcessChart } from "@/components/chart/HealthProcessChart";
import MealMenu from "@/components/home/MealMenu";
import MealList from "@/components/home/MealList";
import { MealListData } from "@/libs/data/meal-data";

const Dashboard = () => {
  const t = useTranslations("Header");
  return (
    <div className="">
      <div className="w-full h-[312px] max-w-5xl mx-auto">
        <div className="w-full grid grid-cols-10">
          <div className="col-span-4 relative">
            <Image
              src={MealBackground}
              alt="meal"
              className="object-cover w-full h-full brightness-110"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <MealChart score={mealChartData.percentage} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-inter">
                <p className="text-white text-lg font-normal drop-shadow-text">
                  {dayjs(mealChartData.date).format("MM/DD")}
                  <span className="ml-2 text-[25px] ">
                    {mealChartData.percentage}%
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 bg-dark-600 w-full h-full">
            <HealthProcessChart />
          </div>
        </div>
      </div>
      <div className="container max-w-4xl mx-auto w-full h-full py-8">
        <MealMenu />
        <MealList />
      </div>
    </div>
  );
};

export default Dashboard;
