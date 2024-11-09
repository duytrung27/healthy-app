import Image from "next/image";
import React, { useState } from "react";
import MealIcon from "@/public/icons/morning_icon.png";
import SnackIcon from "@/public/icons/snack_icon.png";
import { MealMenuType } from "@/types/Common";
import { fetchMealList } from "@/libs/redux/slices/dashboardSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/libs/redux/store";

const menu: MealMenuType[] = [
  {
    label: "Morning",
    icon: MealIcon,
    type: "morning",
  },
  {
    label: "Lunch",
    icon: MealIcon,
    type: "lunch",
  },
  {
    label: "Dinner",
    icon: MealIcon,
    type: "dinner",
  },
  {
    label: "Snack",
    icon: SnackIcon,
    type: "snack",
  },
];

const MealMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeMenu, setActiveMenu] = useState<MealMenuType["type"]>();

  const handleSelectMenu = (type: MealMenuType["type"]) => {
    const value = activeMenu === type ? "" : type;
    dispatch(fetchMealList({ page: 0, type: value }));
    setActiveMenu(value);
  };

  const hexagonItem = (item: MealMenuType) => (
    <div
      className={`w-[126px] h-[136px] clip-hexagon flex items-center justify-center relative px-2 cursor-pointer ${
        activeMenu === item.type
          ? "bg-slate-400 shadow-lg"
          : "bg-primary-300-400"
      }`}
      onClick={() => handleSelectMenu(item.type)}
    >
      <div className="flex flex-col items-center justify-center font-inter">
        <Image src={item.icon} alt="icon" width={56} height={56} />
        <h5 className="text-white font-normal text-[20px]">{item.label}</h5>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-evenly">
      {menu.map((item) => hexagonItem(item))}
    </div>
  );
};

export default MealMenu;
