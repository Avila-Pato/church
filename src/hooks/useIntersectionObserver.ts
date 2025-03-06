import { useState, useEffect, useRef } from "react";

// IntersectionObserver detecta si un elemento está visible en la pantalla.
export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Solo actualizamos el estado si hay un cambio
            if (entry.isIntersecting !== isIntersecting) {
                setIsIntersecting(entry.isIntersecting);
            }
        }, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => observer.disconnect();
    }, [options, isIntersecting]);

    return { targetRef, isIntersecting };
};
;


// Beneficios 

// Lazy loading de imágenes (cargar imágenes solo cuando están en pantalla).
// Animaciones al hacer scroll (ejecutar animaciones solo cuando el elemento es visible).
// Cargar datos de manera progresiva (como en un infinite scroll).
// Optimización del rendimiento (evitar que elementos fuera del viewport consuman recursos).