"use client";

import { MealData } from "@/types/Meal";
import dayjs from "dayjs";
import Image from "next/image";
import Button from "../button/Button";
import { useTranslations } from "next-intl";
import { AppDispatch, RootState } from "@/libs/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealList } from "@/libs/redux/slices/dashboardSlice";
import { useEffect } from "react";

const MealItem = ({ data }: { data: MealData }) => {
  return (
    <div className="h-[234px] w-full relative font-inter cursor-pointer hover:opacity-80">
      <Image src={data.img} alt="meal" className="object-cover w-full h-full" />
      <div className="w-[130px] h-[32px] absolute bottom-0 left-0 bg-primary-300 flex items-center">
        <p className="text-[15px] font-normal capitalize text-white mx-2">
          {dayjs(data.date).format("MM.DD")} {data.type}
        </p>
      </div>
    </div>
  );
};

const MealList = () => {
  const t = useTranslations("Common");
  const dispatch = useDispatch<AppDispatch>();
  const { loading, data, page, type } = useSelector(
    (state: RootState) => state.dashboard.meal
  );

  useEffect(() => {
    dispatch(fetchMealList({ page: 0, type }));
  }, [dispatch]);

  const handleMoreRecord = () => {
    dispatch(fetchMealList({ page: page + 1, type }));
  };

  return (
    <div className="flex flex-col items-center pb-12">
      <div className="grid grid-cols-4 gap-2 py-8">
        {data.map((item) => (
          <MealItem key={item.date} data={item} />
        ))}
      </div>
      <Button
        label={t("More Record")}
        loading={loading}
        onClick={handleMoreRecord}
      />
    </div>
  );
};

export default MealList;
