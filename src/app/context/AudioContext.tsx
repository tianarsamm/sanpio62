"use client";

import { createContext, useContext, useState, useRef, MutableRefObject } from 'react';

type AudioContextType = {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <AudioContext.Provider value={{ isPlaying, setIsPlaying, audioRef }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}