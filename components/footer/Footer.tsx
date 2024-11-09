import { useTranslations } from "next-intl";
import Link from "next/dist/client/link";
import React from "react";

const Footer = () => {
  const t = useTranslations("Footer");

  const menuItems = [
    { label: t("Register"), path: "/" },
    { label: t("Company"), path: "/" },
    { label: t("Terms of Service"), path: "/" },
    { label: t("Privacy Policy"), path: "/" },
    { label: t("Consumption Tax"), path: "/" },
    { label: t("Contact Us"), path: "/" },
  ];

  return (
    <section className="h-32 w-full bg-dark-500 text-light flex flex-col items-center justify-center">
      <div className="container max-w-4xl w-full h-full">
        <ol className="h-full flex items-center gap-16 font-light text-[11px]">
          {menuItems.map((menu) => (
            <li
              key={menu.label}
              className="cursor-pointer hover:text-primary-400"
            >
              <Link href={menu.path}>{menu.label}</Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Footer;
