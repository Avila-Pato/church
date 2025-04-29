"use client";
// Este hook permite animar elementos al hacer scroll en la página. Utiliza el API de Intersection Observer para detectar cuando los elementos entran en el viewport y aplicarles una animación CSS.
import { useEffect } from "react";


// selector: Un string con la clase o identificador CSS de los elementos que queremos animar en mi caso uso talwind por lo que noe s necesario.
// userConfig: Un objeto opcional con configuraciones personalizadas de la animación.
const useScrollReveal = (selector, userConfig = {}) => {

  useEffect(() => {
    if (typeof window === "undefined") return;
    // En Next.js el window no existe en el servidor, así que evitamos errores.

    // Configuracion por defecto
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
    // Combinamos la configuración del usuario con la predeterminada
    const config = { ...defaultConfig, ...userConfig };

    // Función para calcular la transformación inicial
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
// Función para aplicar la animación
    const applyAnimationToElement = (element) => {
      element.style.transition = `opacity ${config.duration}ms ${config.easing} ${config.delay}ms, 
                                  transform ${config.duration}ms ${config.easing} ${config.delay}ms`;
      element.style.opacity = 1;
      element.style.transform = "translate(0, 0) scale(1)";
    };

    // Buscamos todos los elementos que coincidan con el selector.
    // Si no hay elementos, terminamos la ejecución (return).
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    //  Aplicamos los estilos iniciales
    elements.forEach((element) => {
      element.style.opacity = config.opacity;
      element.style.transform = `${getTransform(config.origin, config.distance)} scale(${config.scale})`;

    //   Función para detectar si el elemento entra en pantalla

    //  getBoundingClientRect() obtiene la posición del elemento en la ventana.
    //  Si el elemento está dentro del viewport, se anima.
    //  Si reset es false, eliminamos el evento scroll después de la animación.
      const handleScroll = () => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          applyAnimationToElement(element);
          if (!config.reset) {
            window.removeEventListener("scroll", handleScroll);
          }
        }
      };
    //    Escuchamos el evento scroll para ejecutar handleScroll.
    //  Llamamos handleScroll() inmediatamente para animar elementos visibles al cargar la página.

      window.addEventListener("scroll", handleScroll);
      handleScroll();
    });

    // Limpia eñ evento scroll
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [selector, userConfig]);
};

export default useScrollReveal;
