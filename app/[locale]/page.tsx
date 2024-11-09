"use client";

import { useAppSelector } from "@/libs/redux/hook";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { loggedIn } = useAppSelector((state) => state.app);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    } else {
      router.push("/dashboard");
    }
  }, [loggedIn, router]);

  return <></>;
}
