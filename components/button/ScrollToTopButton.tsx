import { useState, useEffect } from "react";
import Image from "next/image";
import ArrowUpIcon from "@/public/icons/arrow_up.png";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <div className="max-w-4xl">
        <button
          onClick={scrollToTop}
          className="fixed bottom-1/2 left-[80%] w-12 h-12 text-white rounded-full border border-gray-400 shadow-lg flex items-center justify-center"
        >
          <Image src={ArrowUpIcon} width={14} height={12} alt="Scroll to top" />
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
