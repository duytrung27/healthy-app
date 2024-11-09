"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { useTranslations } from "next-intl";
import { fetchMyDiaryList } from "@/libs/redux/slices/ownRecordSlice";
import dayjs from "dayjs";
import Button from "@/components/button/Button";

const MyDiary = () => {
  const t = useTranslations("Own Record");
  const dispatch = useAppDispatch();
  const { data, loading, page } = useAppSelector((state) => state.ownRecord);

  useEffect(() => {
    dispatch(fetchMyDiaryList({ page: 0 }));
  }, [dispatch]);

  const handleMoreRecord = () => {
    dispatch(fetchMyDiaryList({ page: page + 1 }));
  };

  return (
    <div id="diary" className="flex flex-col gap-2 text-dark-500">
      <h3 className="text-[22px] font-normal font-inter">{t("My Diary")}</h3>
      <div className="grid grid-cols-4 gap-3">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col border-2 border-dark-500 p-4">
            <div className="text-lg font-normal font-inter">
              {dayjs(item.date).format("YYYY.MM.DD")}
            </div>
            <div className="text-lg font-normal font-inter">
              {dayjs(item.date).format("HH:mm")}
            </div>
            <div className="text-[14px] font-normal font-inter line-clamp-6 mt-2 my-5">
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-6">
        <Button
          label={t("More Record")}
          loading={loading}
          onClick={handleMoreRecord}
        />
      </div>
    </div>
  );
};

export default MyDiary;
