
import React from 'react';
import { Heart } from 'lucide-react';

const FloatingPetals: React.FC = () => {
  // Generate an array of petal elements with random positions and animation delays
  const petals = Array.from({ length: 18 }, (_, i) => {
    const randomLeft = Math.random() * 100; // Random horizontal position
    const randomDelay = Math.random() * 10; // Random animation delay
    const randomDuration = 15 + Math.random() * 10; // Random animation duration
    const scale = 0.5 + Math.random() * 0.5; // Random size
    const rotation = Math.random() * 360; // Random initial rotation
    const isHeart = i % 4 === 0; // Every 4th element is a heart
    
    return (
      <div 
        key={i}
        className="absolute opacity-0 animate-floating-petal"
        style={{
          left: `${randomLeft}%`,
          top: '-50px',
          animationDelay: `${randomDelay}s`,
          animationDuration: `${randomDuration}s`,
          transform: `scale(${scale}) rotate(${rotation}deg)`
        }}
      >
        {isHeart ? (
          <Heart size={20} fill="#ea384c" stroke="#ea384c" opacity={0.7} />
        ) : (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 22C12 22 20 18 20 11C20 7 17 4 12 4C7 4 4 7 4 11C4 18 12 22 12 22Z" 
              fill={i % 3 === 0 ? "#ea384c" : "#FFDEE2"} 
              fillOpacity={0.6}
            />
          </svg>
        )}
      </div>
    );
  });
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {petals}
    </div>
  );
};

export default FloatingPetals;
