import { RefObject, useEffect, useRef, useState } from "react";

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  oneTime?: boolean;
}

/**
 * Hook para detectar si un elemento está visible en el viewport.
 * @param options Opciones para el IntersectionObserver (root, rootMargin, threshold)
 * @returns [ref, isIntersecting] Retorna un ref para asignar al elemento y un booleano indicando si es visible
 */
export const useScroll = (
  options: ObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
    oneTime: false,
  }
): [RefObject<Element | null>, boolean] => {
  const elementRef = useRef<Element | null>(null); // Permite que sea null inicialmente
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(([entry], obs) => {
      const { isIntersecting } = entry;

      // Usamos debounce para evitar actualizaciones rápidas consecutivas
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsIntersecting((prev) => {
          if (prev !== isIntersecting) {
            if (isIntersecting && options.oneTime) {
              obs.unobserve(entry.target);
            }
            return isIntersecting;
          }
          return prev;
        });
      }, 50); // Debounce de 50ms
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [options]);

  return [elementRef, isIntersecting];
};
