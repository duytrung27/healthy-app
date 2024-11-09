"use client";

import React, { ReactNode, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollToTopButton from "../button/ScrollToTopButton";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className="relative">
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default Layout;
