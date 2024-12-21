import { RefObject, useEffect, useRef, useState } from "react";

interface UseScrollOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  oneTime?: boolean;
}

export const useScroll = (
  options: UseScrollOptions = {}
): [RefObject<Element | null>, boolean] => {
  const elementRef = useRef<Element | null>(null); // Permite que sea null inicialmente
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);

        // Si `oneTime` está activado, deja de observar el elemento
        if (options.oneTime) {
          obs.unobserve(entry.target);
        }
      } else if (!options.oneTime) {
        // Si no es `oneTime`, actualiza el estado como false cuando sale de la vista
        setIsIntersecting(false);
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
      observer.disconnect();
    };
  }, [options]);

  return [elementRef, isIntersecting];
};
