
import { useEffect, useRef } from "react";

export function ThemeObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Function to handle theme transition when elements come into view
    const handleThemeTransition = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // Check if element is in viewport
        if (entry.isIntersecting) {
          const section = entry.target;
          
          // Remove previous theme classes from body
          document.body.classList.remove('spring-theme', 'autumn-theme');
          
          // Add appropriate theme class based on section
          if (section.id === 'hero') {
            document.body.classList.add('spring-theme');
          } else {
            document.body.classList.add('autumn-theme');
          }
          
          // Add fade-in animation to the section
          section.classList.add('section-visible');
        }
      });
    };

    // Create an Intersection Observer
    observerRef.current = new IntersectionObserver(handleThemeTransition, {
      threshold: 0.3, // Trigger when 30% of the section is visible
      rootMargin: "-10% 0px" // Adjust the trigger point
    });

    // Target elements to observe (sections)
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    // Set initial theme
    document.body.classList.add('spring-theme');

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
