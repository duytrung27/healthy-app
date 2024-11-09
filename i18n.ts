import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export type Locale = "en" | "ja";
export const locales: Locale[] = ["en", "ja"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./lang/${locale}/common.json`)).default,
  };
});
