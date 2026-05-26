"use client";

import { BsArrowUp } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed z-[100] bottom-20 right-5 bg-gradient-to-r from-rose-600 to-purple-600 w-10 h-10 rounded-xl bg-opacity-80 backdrop-blur-[0.5rem] drop-shadow-lg flex items-center justify-center dark:drop-shadow-lg hover:scale-110 active:scale-105 transition-all"
        >
          <BsArrowUp className="h-5 w-5 text-white" />
        </button>
      )}
    </>
  );
}
