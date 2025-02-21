import { useEffect } from "react";

const useScrollReveal = (selector, userConfig = {}) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const defaultConfig = {
      delay: 0,
      distance: "0",
      duration: 600,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      origin: "bottom",
      scale: 1,
      reset: false,
    };

    const config = { ...defaultConfig, ...userConfig };

    const getTransform = (origin, distance) => {
      switch (origin) {
        case "top":
          return `translateY(-${distance})`;
        case "bottom":
          return `translateY(${distance})`;
        case "left":
          return `translateX(-${distance})`;
        case "right":
          return `translateX(${distance})`;
        default:
          return `translateY(${distance})`;
      }
    };

    const applyAnimationToElement = (element) => {
      element.style.transition = `opacity ${config.duration}ms ${config.easing} ${config.delay}ms, 
                                  transform ${config.duration}ms ${config.easing} ${config.delay}ms`;
      element.style.opacity = 1;
      element.style.transform = "translate(0, 0) scale(1)";
    };

    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    elements.forEach((element) => {
      element.style.opacity = config.opacity;
      element.style.transform = `${getTransform(config.origin, config.distance)} scale(${config.scale})`;

      const handleScroll = () => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          applyAnimationToElement(element);
          if (!config.reset) {
            window.removeEventListener("scroll", handleScroll);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [selector, userConfig]);
};

export default useScrollReveal;
