
import React, { useEffect, useState } from 'react';
import AudioPlayer from '@/components/AudioPlayer';
import ParticleBackground from '@/components/ParticleBackground';
import PoemSection from '@/components/PoemSection';
import FloatingPetals from '@/components/FloatingPetals';

const poem = [
  "Quanta sorte tive de conquistar a flor mais bela daquele jardim, aquela rosa pode não se agradar de si mesma, mas, para mim, ela é deslumbrante—muito mais do que qualquer outra rosa ou orquídea dali. Que meu oxigênio se contagie com seu aroma, pois esse, sim, me agrada. Qualquer outro aroma além do seu me sufoca, mas o seu agita o meu corpo, acelera o meu coração, encanta-me. Seu aroma, munido da beleza e da delicadeza, Supera qualquer outra rosa... Seus espinhos podem ferir meu corpo, mas que não toquem mais ninguém além de mim, pois a quero apenas para mim.",
  
  "Que eu esteja unido a ti. que meu sangue escorra e regue essa rosa que tanto desejo. Anseio pelo dia que poderei respirar seu aroma, tomá-la para o meu jardim, com o maior cuidado do mundo. Regá-la com tudo o que posso, dar-lhe todo o amor que posso dar—e até o que não posso—porque tal criação se tornou meu mundo: a rainha que rege o meu reino, a donzela que me é prometida, a criptografia que sou incapaz de decifrar, mas que, ainda assim, faz surgir em mim um amor tão grande ao ponto de ser surreal. Não entendo o seu mundo, mas sei e garanto que és o meu.",
  
  "Desde o momento que invadiu minha mente e tomou todo o lugar pra si, eu me reviro por dentro, me contorço, querendo estar ainda mais perto, pois agora és parte de mim—meu vício, minha dependência química, e tantos outros mais adjetivos que poderia usar para fazê-la entender o quanto sou dependente de tê-la comigo, e o quanto a sua ausência é capaz de ser dolorosa, cruel, implacável e ríspida. Sua falta tem o poder de rasgar meu peito, corroendo-me por dentro numa velocidade avassaladora, sem permitir-me secar os olhos por um segundo sequer, devastando minha mente, meu corpo e minha alma. Pois sabe-se que és parte de mim, Ninguém no mundo me torna verdadeiramente feliz além de ti, e nada me torna mais triste do que a tua falta.",
  
  "Quero segurar sua mão e levá-la para todos os lugares que desejarmos. Quero beijá-la, deitar-me contigo, brincarmos com nossos corpos, e, em nossa diversão, tornarmo-nos um só, deixando explícito o nosso amor um pelo outro. Rogo, peço e imploro àquele que rege o mundo e o universo que me permita estar contigo e realizar tudo quanto foi dito. E, para isso, enquanto eu viver, estarei à tua espera e, mesmo quando eu me for, ainda estarei esperando por ti. Se um dia murchares, morrerei junto de ti, a rosa mais bela do jardim—do meu jardim."
];

const backgroundImages = [
  'bg-starry-night',
  'bg-forest-mist',
  'bg-rose-garden'
];

const Index: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // Change background image every 30 seconds
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 30000);
    
    return () => clearInterval(bgInterval);
  }, []);
  
  return (
    <div className={`min-h-screen w-full ${backgroundImages[currentBgIndex]} bg-cover bg-fixed bg-center transition-all duration-1000`}>
      {/* Background overlay */}
      <div className="bg-overlay"></div>
      
      {/* Particle effect */}
      <ParticleBackground />
      
      {/* Floating rose petals */}
      <FloatingPetals />
      
      {/* Audio player */}
      <AudioPlayer />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="pt-16 pb-10 text-center">
          <h1 className="text-3xl md:text-5xl text-alice-rose animate-fade-in font-garamond italic tracking-wider mb-2">
            Alice
          </h1>
          <div className="w-24 h-px bg-alice-red mx-auto my-4 animate-pulse-gentle"></div>
        </header>
        
        {/* Poem content */}
        <main className="poem-container">
          {poem.map((paragraph, index) => (
            <PoemSection key={index} text={paragraph} index={index} />
          ))}
          
          {/* Author signature */}
          <div className="text-right mt-20 opacity-0 animate-fade-in" style={{ animationDelay: '4s' }}>
            <p className="text-alice-red italic font-garamond">Para sempre seu, Maycon</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
