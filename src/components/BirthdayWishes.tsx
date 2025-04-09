
import React from 'react';
import { Cake, Gift, Heart, Star, PartyPopper } from 'lucide-react';

const birthdayMessages = [
  "Feliz aniversário minha garotinha❤️",
  "Que todos os seus desejos se tornem realidade",
  "No meu aniversário quero você de presente",
  "Beijão, minha rainha, que seja um dia alegre!!",
  "Hoje celebramos o dia em que o Mundo recebeu seu (e meu) presente mais precioso - você",
  "Dentro de alguns anos quero ter 3 niver pra comemorar: Seu aniversário, meu aniversário, e nosso aniversário (de casamento)"
];

interface BirthdayWishesProps {
  name: string;
}

const BirthdayWishes: React.FC<BirthdayWishesProps> = ({ name }) => {
  const [currentMessage, setCurrentMessage] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % birthdayMessages.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="birthday-section mt-8 mb-12 px-4">
      <div className="birthday-title flex items-center justify-center mb-6 animate-pulse-gentle">
        <PartyPopper className="text-alice-rose mr-2" size={24} />
        <h2 className="font-tangerine text-4xl text-alice-rose">Happy Birthday {name}</h2>
        <Cake className="text-alice-rose ml-2" size={24} />
      </div>
      
      <div className="birthday-wishes relative bg-black/60 border border-alice-red/30 p-6 max-w-2xl mx-auto">
        {/* Decorative corners - geocities style */}
        <div className="absolute top-0 left-0 border-t-2 border-l-2 border-alice-red/70 w-8 h-8"></div>
        <div className="absolute top-0 right-0 border-t-2 border-r-2 border-alice-red/70 w-8 h-8"></div>
        <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-alice-red/70 w-8 h-8"></div>
        <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-alice-red/70 w-8 h-8"></div>
        
        <div className="message-container min-h-[100px] flex items-center justify-center">
          <div className="message text-xl font-baskerville text-alice-gold/90 italic text-center">
            {birthdayMessages[currentMessage]}
          </div>
        </div>
        
        <div className="birthday-icons flex justify-center gap-6 mt-6">
          <Gift className="text-alice-rose animate-heartbeat" size={20} />
          <Heart className="text-alice-red animate-pulse-gentle" size={20} />
          <Star className="text-alice-gold animate-float" size={20} />
          <Gift className="text-alice-rose animate-heartbeat" size={20} />
          <Heart className="text-alice-red animate-pulse-gentle" size={20} />
        </div>
      </div>
    </div>
  );
};

export default BirthdayWishes;
