import { RefObject, useEffect, useRef, useState } from "react";

interface UseScrollOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}

export const useScroll = (
  options: UseScrollOptions = {}
): [RefObject<Element | null>, boolean] => {
  const elementRef = useRef<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        obs.unobserve(entry.target);
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
