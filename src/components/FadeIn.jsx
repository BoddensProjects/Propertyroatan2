import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  // useRef is like a camera that watches this specific element on the page
  const domRef = useRef();

  useEffect(() => {
    // IntersectionObserver checks if the element has scrolled into the screen
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation!
          observer.unobserve(entry.target); // Stop watching after it fades in once
        }
      });
    });
    
    const element = domRef.current;

    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={domRef}
      // Here is the Tailwind magic: It starts invisible (opacity-0) and pushed down slightly (translate-y-10).
      // When visible, it smoothly transitions to fully visible (opacity-100) and its normal position (translate-y-0).
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}
