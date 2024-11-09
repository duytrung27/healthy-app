import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import Logo from "@/public/images/logo.png";
import OwnRecordIcon from "@/public/icons/own_record_icon.png";
import ChallengeIcon from "@/public/icons/challenge_icon.png";
import NoticeIcon from "@/public/icons/notice_icon.png";
import BurgerIcon from "@/public/icons/burger_icon.png";
import CloseIcon from "@/public/icons/close_icon.png";
import { Menu } from "@/types/Common";

const Header = () => {
  const t = useTranslations("Header");
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems: Menu[] = [
    {
      label: t("My Own Record"),
      icon: OwnRecordIcon,
      path: "/",
    },
    {
      label: t("Challenge"),
      icon: ChallengeIcon,
      path: "/challenge",
    },
    {
      label: t("Notice"),
      icon: NoticeIcon,
      path: "/notice",
      badge: 1,
    },
  ];

  const subMenuItems: Menu[] = [
    {
      label: t("My Own Record"),
      path: "/",
    },
    {
      label: t("Weight Graph"),
      path: "/",
    },
    {
      label: t("Goal"),
      path: "/",
    },
    {
      label: t("Selected Course"),
      path: "/",
    },
    {
      label: t("Column List"),
      path: "/",
    },
    {
      label: t("Setting"),
      path: "/",
    },
  ];

  return (
    <section className="fixed z-50 top-0 left-0 w-full h-16 bg-dark-500 text-light flex flex-col">
      <div className="container relative h-full flex items-center justify-between">
        <Image
          src={Logo}
          alt="logo"
          width={109}
          height={10}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <ul className="flex items-center gap-10">
          {menuItems.map((menu) => (
            <li
              key={menu.label}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80"
              onClick={() => router.push(menu.path)}
            >
              <div className="relative">
                <Image
                  src={menu.icon ?? ""}
                  alt={menu.label}
                  width={32}
                  height={32}
                />
                {menu.badge && (
                  <span className="bg-primary-500 text-light font-inter w-4 h-4 absolute top-0 -right-2 flex items-center justify-center   text-[10px] rounded-full">
                    {menu.badge}
                  </span>
                )}
              </div>
              <h4 className="font-light text-base">{menu.label}</h4>
            </li>
          ))}
          <li
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 ml-5"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <Image src={CloseIcon} alt="close" width={32} height={32} />
            ) : (
              <Image src={BurgerIcon} alt="burger" width={32} height={32} />
            )}
          </li>
        </ul>
        <div
          className={`absolute top-16 right-0 bg-gray-400 w-[280px] transition-all duration-300 ease-in-out ${
            openMenu ? "opacity-100 h-auto" : "opacity-0 h-0"
          }`}
        >
          <ul>
            {subMenuItems.map((menu) => (
              <li
                key={menu.label}
                className={`text-lg font-light py-4 px-8  cursor-pointer hover:opacity-80 shadow`}
                onClick={() => {
                  router.push(menu.path);
                  setOpenMenu(false);
                }}
              >
                {menu.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
