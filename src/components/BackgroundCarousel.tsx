
import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const backgroundImages = [
  'bg-starry-night',
  'bg-forest-mist',
  'bg-rose-garden',
  'bg-valentine-roses',
  'bg-dark-castle',
  'bg-moonlit-lake'
];

interface BackgroundCarouselProps {
  onSlideChange?: (index: number) => void;
}

const BackgroundCarousel: React.FC<BackgroundCarouselProps> = ({ onSlideChange }) => {
  const [api, setApi] = React.useState<any>(null);
  
  const autoplayPlugin = React.useMemo(() => 
    Autoplay({ delay: 10000, stopOnInteraction: false, stopOnMouseEnter: false }), 
    []
  );

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      if (onSlideChange) {
        onSlideChange(api.selectedScrollSnap());
      }
    };
    
    api.on('select', onSelect);
    
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSlideChange]);

  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Carousel
        opts={{ loop: true }}
        plugins={[autoplayPlugin]}
        setApi={setApi}
        className="w-full h-full"
      >
        <CarouselContent className="h-screen">
          {backgroundImages.map((bg, index) => (
            <CarouselItem key={index} className="h-full">
              <div className={`w-full h-full ${bg} bg-cover bg-center bg-fixed transition-opacity duration-1000`} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BackgroundCarousel;
