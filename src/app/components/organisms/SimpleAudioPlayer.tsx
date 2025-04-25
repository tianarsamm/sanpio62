"use client";

import { useRef, useEffect } from "react";
import { useAudio } from "@/app/context/AudioContext";

export default function SimpleAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlaying, setIsPlaying } = useAudio();

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-full p-2 flex items-center gap-2">
      <button
        onClick={togglePlay}
        className="text-sm font-medium text-black hover:text-[#dc5341] transition-colors"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
      <audio 
        ref={audioRef} 
        src="/audio/sparta5.mp3" 
        loop 
        preload="auto"
      />
    </div>
  );
}
