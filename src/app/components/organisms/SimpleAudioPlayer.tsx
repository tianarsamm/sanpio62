"use client";

import { useRef, useState, useEffect } from "react";

export default function SimpleAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Memastikan audio dimuat dengan benar
      
      // Event handlers untuk monitoring
      audioRef.current.onloadeddata = () => setIsLoaded(true);
      audioRef.current.onerror = (e) => console.error("Audio error:", e);
      audioRef.current.onended = () => {
        if (audioRef.current) {
          audioRef.current.currentTime = 0; // Reset ke awal saat selesai
          audioRef.current.play();
        }
      };
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current || !isLoaded) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Tambahkan promise untuk memastikan audio siap diputar
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio berhasil diputar
          })
          .catch(error => {
            console.error("Error playing audio:", error);
          });
      }
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-full p-2 flex items-center gap-2">
      <button
        onClick={togglePlay}
        disabled={!isLoaded}
        className="text-sm font-medium text-black hover:text-[#dc5341] transition-colors disabled:opacity-50"
      >
        {!isLoaded ? "Loading..." : isPlaying ? "Pause Music" : "Play Music"}
      </button>
      <audio 
        ref={audioRef} 
        src="/audio/sparta3.mp3" 
        loop 
        preload="auto"
      />
    </div>
  );
}
