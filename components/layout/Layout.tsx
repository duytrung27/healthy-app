"use client";

import React, { ReactNode, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main>
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
