"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { useTranslations } from "next-intl";
import dayjs from "dayjs";
import Button from "@/components/button/Button";
import { fetchColumnList } from "@/libs/redux/slices/columnListSlice";
import Image from "next/image";

const RecommendList = () => {
  const t = useTranslations("Column List");
  const dispatch = useAppDispatch();
  const { data, loading, page } = useAppSelector((state) => state.columnList);

  useEffect(() => {
    dispatch(fetchColumnList({ page: 0 }));
  }, [dispatch]);

  const handleMoreRecord = () => {
    dispatch(fetchColumnList({ page: page + 1 }));
  };

  return (
    <div className="flex flex-col gap-x-2 gap-y-4 text-dark-500">
      <div className="grid grid-cols-4 gap-3">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="h-[145px] w-full relative font-inter cursor-pointer hover:opacity-80">
              <Image
                src={item.img}
                alt="meal"
                className="object-cover w-full h-full"
              />
              <div className="h-[24px] absolute bottom-0 left-0 bg-primary-300 flex items-center">
                <p className="text-[15px] font-normal capitalize text-white mx-2 font-inter">
                  {dayjs(item.date).format("YYYY.MM.DD")}
                  <span className="ml-6">
                    {dayjs(item.date).format("HH:mm")}
                  </span>
                </p>
              </div>
            </div>
            <h3 className="text-[15px] font-light line-clamp-2">
              {item.content}
            </h3>
            <div className="flex gap-2 items-center">
              {item.hashtag.map((tag, idx) => (
                <p
                  key={idx}
                  className="text-[12px] font-light text-primary-400 cursor-pointer hover:opacity-80"
                >
                  {tag}
                </p>
              ))}
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

export default RecommendList;
