"use client";

import { useTranslations } from "next-intl";

const Dashboard = () => {
  const t = useTranslations("Header");
  return (
    <div>
      {t("My Own Record")} {t("Challenge")}
    </div>
  );
};

export default Dashboard;
