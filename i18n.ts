import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export type Locale = "ja" | "en";
export const locales: Locale[] = ["ja", "en"];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./lang/${locale}/common.json`)).default,
  };
});
