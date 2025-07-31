import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-300"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  ) : null;
};

export default ScrollToTop;
