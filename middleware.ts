import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: locales[1],
  localePrefix: "never",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
