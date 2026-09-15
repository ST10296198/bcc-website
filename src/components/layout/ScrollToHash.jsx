import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const hash = location.hash.replace("#", "");

    const scrollToTarget = () => {
      const element = document.getElementById(hash);

      if (!element) {
        return;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    // Allow the destination page to finish rendering first.
    const timeout = window.setTimeout(scrollToTarget, 50);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [location]);

  return null;
}