import Style from "./BackToTopButton.module.css";
import { useState } from "react";

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      onClick={scrollToTop}
      className={`${visible ? Style.visible : ""} ${Style.scrollButton}`}
    >
      Back to Top <i className="fa fa-solid fa-arrow-up"></i>
    </button>
  );
};
