import { useEffect, useState } from "react";

export function useIntersectionObserver(ref, options = { threshold: 0.5 }) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      options,
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [options, ref]);

  return isIntersecting;
}
