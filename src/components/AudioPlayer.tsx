
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, PauseCircle, PlayCircle } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize audio
  useEffect(() => {
    const audio = new Audio('/audio/dream_girl.mp3');
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;
    
    // Cleanup
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);
  
  // Handle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
        // Reset play state on failure (browser policy may require user interaction)
        setIsPlaying(false);
      });
    }
    setIsPlaying(!isPlaying);
  };
  
  // Handle mute/unmute
  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  
  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    
    // Unmute if volume is adjusted while muted
    if (isMuted && newVolume > 0) {
      audioRef.current.muted = false;
      setIsMuted(false);
    }
  };
  
  return (
    <div className="audio-controls">
      <button 
        onClick={togglePlay} 
        className="text-alice-gold hover:text-alice-red transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? 
          <PauseCircle size={24} /> : 
          <PlayCircle size={24} />
        }
      </button>
      
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-20 h-1 accent-alice-red bg-alice-gold/30 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-alice-red"
      />
      
      <button 
        onClick={toggleMute} 
        className="text-alice-gold hover:text-alice-red transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

export default AudioPlayer;
