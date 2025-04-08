
import React, { useEffect, useRef, useState } from 'react';

interface PoemSectionProps {
  text: string;
  index: number;
}

const PoemSection: React.FC<PoemSectionProps> = ({ text, index }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={sectionRef} 
      className={`poem-paragraph opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {text}
    </div>
  );
};

export default PoemSection;
