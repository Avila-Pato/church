
// IntersectionObserver detecta  cuándo un elemento entra o sale del viewport.
import { useState, useEffect, useRef } from "react";

// Se define el custom hook useIntersectionObserver, que recibe un objeto options
export const useIntersectionObserver = (options?: IntersectionObserverInit) => {

    // Se define un estado isIntersecting, que indicará si el elemento está siendo visto en pantalla (true) o no (false).
    const [isIntersecting, setIsIntersecting] = useState(false);

    // Se crea una referencia targetRef, que será asignada a un elemento div en el DOM.
    // Inicialmente, el valor es null hasta que el ref se asigne a un elemento.
    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Se crea un IntersectionObserver, que recibe una función de callback.
        // [entry] es un array con los elementos observados. Como solo hay uno, se extrae el primer elemento.
        // entry.isIntersecting indica si el elemento está visible en el viewport.
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);
        // Si targetRef.current no es null, se empieza a observar el elemento.
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }
            // Cuando el componente se desmonta, se desconecta el IntersectionObserver para evitar filtraciones de memoria (memory leaks).
        return () => observer.disconnect();
    }, [options]);

    return { targetRef, isIntersecting };
};


// Beneficios 

// Lazy loading de imágenes (cargar imágenes solo cuando están en pantalla).
// Animaciones al hacer scroll (ejecutar animaciones solo cuando el elemento es visible).
// Cargar datos de manera progresiva (como en un infinite scroll).
// Optimización del rendimiento (evitar que elementos fuera del viewport consuman recursos).