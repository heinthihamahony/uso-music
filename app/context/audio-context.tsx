"use client";
import { createContext, useContext, useState, useRef, ReactNode } from "react";

interface AudioContextType {
  currentSongId: number | null;
  isPlaying: boolean;
  playSong: (songId: number) => void;
  pauseSong: () => void;
  stopSong: () => void;
  currentAudio: HTMLAudioElement | null;
  currentTime: number;
  duration: number;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [currentSongId, setCurrentSongId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const eventListenersRef = useRef<{ [key: string]: () => void }>({});

  const cleanupCurrentAudio = () => {
    if (currentAudioRef.current) {
      // Remove all event listeners
      Object.values(eventListenersRef.current).forEach((cleanup) => cleanup());
      eventListenersRef.current = {};

      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current = null;
    }
  };

  const playSong = async (songId: number) => {
    try {
      // Clean up current audio
      cleanupCurrentAudio();

      // Find the audio element for this song
      const audioElement = document.querySelector(
        `audio[data-song-id="${songId}"]`
      ) as HTMLAudioElement;

      if (!audioElement) {
        console.error(`Audio element not found for song ID: ${songId}`);
        return;
      }

      currentAudioRef.current = audioElement;
      setCurrentSongId(songId);

      // Set up event listeners
      const updateTime = () => {
        const time = audioElement.currentTime;
        console.log("Audio time update:", time);
        setCurrentTime(time);
      };
      const updateDuration = () => {
        const dur = audioElement.duration;
        console.log(
          "Audio duration update:",
          dur,
          "isNaN:",
          isNaN(dur),
          "isFinite:",
          isFinite(dur)
        );
        if (!isNaN(dur) && isFinite(dur) && dur > 0) {
          setDuration(dur);
        } else {
          // Try to get duration from loadedmetadata event
          console.log("Duration not ready, trying to load metadata...");
          audioElement.load();
        }
      };

      // Set up a more frequent time update using requestAnimationFrame
      let animationFrameId: number;
      const updateTimeFrequent = () => {
        if (audioElement && !audioElement.paused) {
          const time = audioElement.currentTime;
          setCurrentTime(time);
          animationFrameId = requestAnimationFrame(updateTimeFrequent);
        }
      };
      const handleEnded = () => {
        setCurrentSongId(null);
        setIsPlaying(false);
        setCurrentTime(0);
        setDuration(0);
        cleanupCurrentAudio();
      };
      const handleError = () => {
        console.error(`Error playing audio for song ID: ${songId}`);
        setCurrentSongId(null);
        setIsPlaying(false);
        setCurrentTime(0);
        setDuration(0);
        cleanupCurrentAudio();
      };

      // Add event listeners
      audioElement.addEventListener("timeupdate", updateTime);
      audioElement.addEventListener("loadedmetadata", updateDuration);
      audioElement.addEventListener("loadeddata", updateDuration);
      audioElement.addEventListener("canplay", updateDuration);
      audioElement.addEventListener("canplaythrough", updateDuration);
      audioElement.addEventListener("ended", handleEnded, { once: true });
      audioElement.addEventListener("error", handleError, { once: true });
      audioElement.addEventListener("play", () => {
        console.log("Audio started playing, starting frequent updates");
        updateTimeFrequent();
        // Try to get duration again when playing starts
        setTimeout(updateDuration, 100);
      });
      audioElement.addEventListener("pause", () => {
        console.log("Audio paused, stopping frequent updates");
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      });

      // Store cleanup functions
      eventListenersRef.current = {
        timeupdate: () =>
          audioElement.removeEventListener("timeupdate", updateTime),
        loadedmetadata: () =>
          audioElement.removeEventListener("loadedmetadata", updateDuration),
        loadeddata: () =>
          audioElement.removeEventListener("loadeddata", updateDuration),
        canplay: () =>
          audioElement.removeEventListener("canplay", updateDuration),
        canplaythrough: () =>
          audioElement.removeEventListener("canplaythrough", updateDuration),
        ended: () => audioElement.removeEventListener("ended", handleEnded),
        error: () => audioElement.removeEventListener("error", handleError),
        play: () =>
          audioElement.removeEventListener("play", updateTimeFrequent),
        pause: () =>
          audioElement.removeEventListener("pause", () => {
            if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
            }
          }),
        animationFrame: () => {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
        },
      };

      // Try to get duration before playing
      updateDuration();

      // Play the audio
      await audioElement.play();
      setIsPlaying(true);

      // Try to get duration after playing starts
      setTimeout(updateDuration, 500);
      setTimeout(updateDuration, 1000);
      setTimeout(updateDuration, 2000);
    } catch (error) {
      console.error("Error playing song:", error);
      setCurrentSongId(null);
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      cleanupCurrentAudio();
    }
  };

  const pauseSong = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const stopSong = () => {
    cleanupCurrentAudio();
    setCurrentSongId(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  };

  return (
    <AudioContext.Provider
      value={{
        currentSongId,
        isPlaying,
        playSong,
        pauseSong,
        stopSong,
        currentAudio: currentAudioRef.current,
        currentTime,
        duration,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
