import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Play, Pause, Music, Volume2, VolumeX } from "lucide-react";

interface SoundtrackPlayerProps {
  urlAudio: string;
  autoPlay?: boolean;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onStateChange?: (isPlaying: boolean) => void;
}

export const SoundtrackPlayer = ({ urlAudio, isPlaying, onTogglePlay, onStateChange }: SoundtrackPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [volume, setVolume] = useState(0.5);
  
  // Create audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(urlAudio);
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
    } else if (audioRef.current.src !== new URL(urlAudio, window.location.href).href) {
      audioRef.current.src = urlAudio;
      if (isPlaying) {
         audioRef.current.play().catch(console.error);
      }
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [urlAudio]);

  // Handle play/pause sync
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay bloqueado pelo navegador:", error);
          if (onStateChange) onStateChange(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, onStateChange]);

  // Handle auto-play on first interaction (Workaround for browser policies)
  useEffect(() => {
    let hasInteracted = false;

    const tryAutoplay = () => {
      if (hasInteracted) return;
      hasInteracted = true;
      
      const events = ["click", "scroll", "touchstart", "keydown"];
      events.forEach(event => document.removeEventListener(event, tryAutoplay));

      if (audioRef.current && audioRef.current.paused) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            if (onStateChange) onStateChange(true);
          }).catch(() => {
            // Se falhar de novo, deixa quieto.
          });
        }
      }
    };

    const events = ["click", "scroll", "touchstart", "keydown"];
    events.forEach(event => 
      document.addEventListener(event, tryAutoplay, { once: true, passive: true })
    );

    return () => {
      events.forEach(event => document.removeEventListener(event, tryAutoplay));
    };
  }, [onStateChange]);

  // Handle volume change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const snapToCorner = (_event: any, info: any) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    const isLeft = centerX < screenWidth / 2;
    const isTop = centerY < screenHeight / 2;
    
    const padding = 20;
    
    controls.start({
      x: isLeft ? padding : screenWidth - rect.width - padding,
      y: isTop ? padding : screenHeight - rect.height - padding,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    });
  };

  // Set initial position
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      controls.set({
        x: window.innerWidth - rect.width - 20,
        y: window.innerHeight - rect.height - 20
      });
    }
  }, [controls]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => snapToCorner(null, null);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      drag
      dragMomentum={false}
      onDragEnd={snapToCorner}
      animate={controls}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        touchAction: "none"
      }}
      className="flex items-center gap-0 sm:gap-3 bg-background/80 backdrop-blur-md p-1.5 sm:pr-4 rounded-full shadow-lg border border-border cursor-grab active:cursor-grabbing"
    >
      <button
        onClick={onTogglePlay}
        className="w-10 h-10 shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-[0_4px_20px_rgba(180,150,80,0.3)] flex items-center justify-center transition-colors border border-primary-foreground/20 relative overflow-hidden"
        aria-label={isPlaying ? "Pausar trilha sonora" : "Tocar trilha sonora"}
      >
        {isPlaying && (
          <div className="absolute inset-0 bg-white/20 animate-pulse pointer-events-none" />
        )}
        {isPlaying ? (
          <Pause className="w-4 h-4 relative z-10" />
        ) : (
          <Play className="w-4 h-4 ml-0.5 relative z-10" />
        )}
      </button>

      <div className="hidden sm:flex flex-col justify-center w-24 gap-1.5" onPointerDown={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-0.5">
          <Music className="w-3 h-3 text-primary/70" />
          {volume === 0 ? (
            <VolumeX className="w-3 h-3 text-muted-foreground" />
          ) : (
            <Volume2 className="w-3 h-3 text-primary/70" />
          )}
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full h-1 bg-primary/20 rounded-full appearance-none cursor-pointer accent-primary"
          aria-label="Volume"
        />
      </div>
    </motion.div>
  );
};
