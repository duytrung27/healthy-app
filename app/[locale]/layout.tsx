import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/providers/StoreProvider";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Healthy App",
  description: "Healthy App",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${notoSans.className} ${inter.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StoreProvider>
            <Layout>{children}</Layout>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
