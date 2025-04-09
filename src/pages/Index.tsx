
import React, { useEffect, useState } from 'react';
import AudioPlayer from '@/components/AudioPlayer';
import ParticleBackground from '@/components/ParticleBackground';
import PoemSection from '@/components/PoemSection';
import FloatingPetals from '@/components/FloatingPetals';
import BackgroundCarousel from '@/components/BackgroundCarousel';
import BirthdayWishes from '@/components/BirthdayWishes';
import { Heart, Gift, Star, Cake, Music } from 'lucide-react';

const poem = [
  "Quanta sorte tive de conquistar a flor mais bela daquele jardim, aquela rosa pode não se agradar de si mesma, mas, para mim, ela é deslumbrante—muito mais do que qualquer outra rosa ou orquídea dali. Que meu oxigênio se contagie com seu aroma, pois esse, sim, me agrada. Qualquer outro aroma além do seu me sufoca, mas o seu agita o meu corpo, acelera o meu coração, encanta-me. Seu aroma, munido da beleza e da delicadeza, Supera qualquer outra rosa... Seus espinhos podem ferir meu corpo, mas que não toquem mais ninguém além de mim, pois a quero apenas para mim.",
  
  "Que eu esteja unido a ti. que meu sangue escorra e regue essa rosa que tanto desejo. Anseio pelo dia que poderei respirar seu aroma, tomá-la para o meu jardim, com o maior cuidado do mundo. Regá-la com tudo o que posso, dar-lhe todo o amor que posso dar—e até o que não posso—porque tal criação se tornou meu mundo: a rainha que rege o meu reino, a donzela que me é prometida, a criptografia que sou incapaz de decifrar, mas que, ainda assim, faz surgir em mim um amor tão grande ao ponto de ser surreal. Não entendo o seu mundo, mas sei e garanto que és o meu.",
  
  "Desde o momento que invadiu minha mente e tomou todo o lugar pra si, eu me reviro por dentro, me contorço, querendo estar ainda mais perto, pois agora és parte de mim—meu vício, minha dependência química, e tantos outros mais adjetivos que poderia usar para fazê-la entender o quanto sou dependente de tê-la comigo, e o quanto a sua ausência é capaz de ser dolorosa, cruel, implacável e ríspida. Sua falta tem o poder de rasgar meu peito, corroendo-me por dentro numa velocidade avassaladora, sem permitir-me secar os olhos por um segundo sequer, devastando minha mente, meu corpo e minha alma. Pois sabe-se que és parte de mim, Ninguém no mundo me torna verdadeiramente feliz além de ti, e nada me torna mais triste do que a tua falta.",
  
  "Quero segurar sua mão e levá-la para todos os lugares que desejarmos. Quero beijá-la, deitar-me contigo, brincarmos com nossos corpos, e, em nossa diversão, tornarmo-nos um só, deixando explícito o nosso amor um pelo outro. Rogo, peço e imploro àquele que rege o mundo e o universo que me permita estar contigo e realizar tudo quanto foi dito. E, para isso, enquanto eu viver, estarei à tua espera e, mesmo quando eu me for, ainda estarei esperando por ti. Se um dia murchares, morrerei junto de ti, a rosa mais bela do jardim—do meu jardim."
];

const romantic2000sQuotes = [
  "O amor é a chama que queima sem se consumir.",
  "A distância não importa quando o amor é verdadeiro.",
  "Meu coração bate só por ti, Alice.",
  "Só sei que te amo mais do que jamais amei.",
  "Feliz aniversário, meu amor eterno!",
  "Cada batida do meu coração é para você, hoje e sempre.",
  "Que este dia seja tão especial quanto você é para mim."
];

const Index: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [showVisitors, setShowVisitors] = useState(false);
  const [visitorCount, setVisitorCount] = useState(Math.floor(Math.random() * 1000) + 500);
  const [showSparkles, setShowSparkles] = useState<{x: number, y: number}[]>([]);
  
  // Add sparkle effect on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (Math.random() > 0.9) { // Only add sparkle 10% of the time
      const newSparkle = {
        x: e.clientX,
        y: e.clientY
      };
      
      setShowSparkles(prev => [...prev, newSparkle]);
      
      // Remove sparkle after animation
      setTimeout(() => {
        setShowSparkles(prev => prev.filter(s => s !== newSparkle));
      }, 3000);
    }
  };
  
  useEffect(() => {
    // Simulate visitor count ticking up
    const visitorInterval = setInterval(() => {
      setVisitorCount(prev => prev + 1);
    }, 120000);
    
    // Rotate quotes
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % romantic2000sQuotes.length);
    }, 8000);
    
    // Hide intro after 4 seconds
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      // Show visitor counter after intro disappears
      setTimeout(() => setShowVisitors(true), 1000);
    }, 4000);
    
    return () => {
      clearInterval(visitorInterval);
      clearInterval(quoteInterval);
      clearTimeout(introTimer);
    };
  }, []);
  
  return (
    <div className="min-h-screen w-full bg-alice-background" onMouseMove={handleMouseMove}>
      {/* Background carousel */}
      <BackgroundCarousel />
      
      {/* Background overlay */}
      <div className="bg-overlay bg-pattern-hearts"></div>
      
      {/* Intro splash screen */}
      {showIntro && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center flex-col animate-fade-out" style={{ animationDelay: '3s', animationDuration: '1s' }}>
          <div className="text-alice-red text-3xl sm:text-4xl font-tangerine animate-pulse-gentle mb-4">❤ Para Alice ❤</div>
          <div className="text-alice-gold text-sm tracking-widest animate-fade-in">Carregando sonhos e sentimentos...</div>
        </div>
      )}
      
      {/* 2000s Corner decorations */}
      <div className="corner-decoration top-left">
        <Heart size={30} fill="#ea384c" stroke="#ea384c" />
      </div>
      <div className="corner-decoration top-right">
        <Heart size={30} fill="#ea384c" stroke="#ea384c" />
      </div>
      <div className="corner-decoration bottom-left">
        <Heart size={30} fill="#ea384c" stroke="#ea384c" />
      </div>
      <div className="corner-decoration bottom-right">
        <Heart size={30} fill="#ea384c" stroke="#ea384c" />
      </div>
      
      {/* Sparkle effects from mouse movement */}
      {showSparkles.map((sparkle, i) => (
        <div 
          key={i} 
          className="sparkle" 
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`
          }}
        />
      ))}
      
      {/* Visitor counter - 2000s style */}
      {showVisitors && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 geocities-hit-counter z-20">
          <span className="mr-2">♥</span> 
          Visitantes: {visitorCount.toLocaleString()} 
          <span className="ml-2">♥</span>
        </div>
      )}
      
      {/* Under construction sign - typical for Geocities */}
      <div className="fixed top-16 right-4 under-construction z-20">
        <img 
          src="https://web.archive.org/web/20091027005903/http://www.geocities.com/hk/construction.gif" 
          alt="Under Construction" 
          width="16" 
          height="16"
        />
        <span>Sempre em construção para você</span>
      </div>
      
      {/* Particle effect */}
      <ParticleBackground />
      
      {/* Floating rose petals */}
      <FloatingPetals />
      
      {/* Audio player */}
      <AudioPlayer />
      
      {/* Geocities-style MIDI player notice */}
      <div className="midi-player">
        <Music size={12} className="text-alice-red mr-1" />
        <span>♫ Música para Alice ♫</span>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="pt-16 pb-10 text-center">
          <h1 className="alice-title flex items-center justify-center">
            <Cake size={24} className="text-alice-rose mr-3 animate-pulse-gentle" />
            <span className="fire-text">Alice</span>
            <Cake size={24} className="text-alice-rose ml-3 animate-pulse-gentle" />
          </h1>
          <div className="w-32 h-px bg-alice-red mx-auto my-4 animate-pulse-gentle"></div>
          <div className="quote-box max-w-md mx-auto cursor-effect">
            {romantic2000sQuotes[currentQuote]}
          </div>
          
          {/* Marquee - classic geocities element */}
          <div className="overflow-hidden mt-6 mb-4 w-full">
            <div className="marquee-text text-alice-red/80 text-sm italic">
              ★ Feliz Aniversário Alice! ★ O meu amor por você cresce a cada dia ★ Você é a flor mais bela do meu jardim ★ Para sempre seu ★ 
            </div>
          </div>
        </header>
        
        {/* Birthday wishes section */}
        <BirthdayWishes name="Alice" />
        
        {/* Poem content */}
        <main className="poem-container vintage-border">
          <div className="text-center mb-8">
            <div className="glitter-text text-2xl font-tangerine mb-2">Para minha amada</div>
            <div className="flex justify-center gap-4">
              <Star size={14} className="text-alice-gold animate-sparkle" />
              <Heart size={14} className="text-alice-red animate-pulse-gentle" />
              <Gift size={14} className="text-alice-gold animate-sparkle" />
              <Heart size={14} className="text-alice-red animate-pulse-gentle" />
              <Star size={14} className="text-alice-gold animate-sparkle" />
            </div>
          </div>
          
          {poem.map((paragraph, index) => (
            <PoemSection key={index} text={paragraph} index={index} />
          ))}
          
          <div className="fancy-divider"></div>
          
          {/* Author signature */}
          <div className="text-right mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '4s' }}>
            <p className="text-alice-red italic font-tangerine text-3xl">Para sempre seu, Maycon</p>
          </div>
        </main>
        
        {/* Guestbook - common on Geocities sites */}
        <div className="text-center mt-8 mb-4">
          <button className="guestbook-button">✒️ Assine nosso livro de visitas</button>
        </div>
        
        {/* 2000s footer with email and links */}
        <footer className="text-center pb-20 pt-6 text-alice-gold/60 text-xs">
          <p>© 2025 • Criado com amor eterno</p>
          <p className="mt-1">Melhor visualizado com um coração aberto</p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="border-r border-alice-red/30 pr-4">Última atualização: 09.Abril.2025</span>
            <span>♡ alice_para_sempre@love.com ♡</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
