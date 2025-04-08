
import React, { useEffect, useRef, useState } from 'react';
import { Heart, Music, FlowerIcon } from 'lucide-react';

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
  
  // Add decorative icon based on verse index
  const getVerseIcon = () => {
    switch(index) {
      case 0: return <Heart className="text-alice-red animate-pulse-gentle" size={20} />;
      case 1: return <FlowerIcon className="text-alice-rose animate-pulse-gentle" size={20} />;
      case 2: return <Heart className="text-alice-red animate-pulse-gentle" size={20} />;
      case 3: return <Music className="text-alice-rose animate-pulse-gentle" size={20} />;
      default: return null;
    }
  };
  
  return (
    <div 
      ref={sectionRef} 
      className={`poem-paragraph relative opacity-0 ${isVisible ? 'animate-fade-in' : ''} border-l-2 border-alice-red/40 pl-4 md:pl-6`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="absolute -left-2.5 top-0 bg-alice-background p-1">
        {getVerseIcon()}
      </div>
      <div className="mb-2 italic text-alice-rose/80 text-sm">
        {index === 0 && "A rosa mais bela do jardim..."}
        {index === 1 && "Uma rainha em meu reino..."}
        {index === 2 && "Minha dependência..."}
        {index === 3 && "Para sempre..."}
      </div>
      <p className="poem-text drop-shadow-glow">{text}</p>
      <div className="verse-decoration mt-4 h-px w-1/3 mx-auto bg-gradient-to-r from-transparent via-alice-red/60 to-transparent"></div>
    </div>
  );
};

export default PoemSection;
