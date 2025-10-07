"use client";
import { useEffect } from "react";
import { useAudio } from "../../context/audio-context";

// ALL songs to preload for instant playback - no delays!
const ALL_SONGS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
]; // All songs for instant playback

export default function AudioPreloader() {
  const { preloadSong } = useAudio();

  useEffect(() => {
    // Preload ALL songs for instant playback - no delays!
    const preloadTimer = setTimeout(() => {
      ALL_SONGS.forEach((songId) => {
        preloadSong(songId);
      });
    }, 500); // Faster preloading

    return () => clearTimeout(preloadTimer);
  }, [preloadSong]);

  return null; // This component doesn't render anything
}
