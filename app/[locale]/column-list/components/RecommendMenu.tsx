import { ColumnListMenuType } from "@/types/ColumnList";
import { useTranslations } from "next-intl";
import React from "react";

const RecommendMenu = () => {
  const t = useTranslations("Column List");

  const menuItems: ColumnListMenuType[] = [
    {
      title: t("RecommendedColumn"),
      subTitle: t("Recommend"),
    },
    {
      title: t("RecommendedDiet"),
      subTitle: t("Diet"),
    },
    {
      title: t("RecommendedBeauty"),
      subTitle: t("Beauty"),
    },
    {
      title: t("RecommendedHealth"),
      subTitle: t("Health"),
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-8">
      {menuItems.map((item, idx) => (
        <div
          key={idx}
          className="bg-dark-600 px-4 py-6 flex flex-col items-center justify-center gap-2 text-center"
        >
          <h3 className="text-primary-300 text-[22px] font-normal font-inter">
            {item.title}
          </h3>
          <div className="w-14 h-[1px] bg-white"></div>
          <p className="text-white text-lg font-light">{item.subTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendMenu;
