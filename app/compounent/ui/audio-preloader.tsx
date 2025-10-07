"use client";
import { useEffect } from "react";
import { useAudio } from "../../context/audio-context";

// Popular songs to preload for faster playback
const POPULAR_SONGS = [32, 18, 17]; // Top 3 songs from Top Charts

export default function AudioPreloader() {
  const { preloadSong } = useAudio();

  useEffect(() => {
    // Preload popular songs after a short delay to not block initial page load
    const preloadTimer = setTimeout(() => {
      POPULAR_SONGS.forEach((songId) => {
        preloadSong(songId);
      });
    }, 1000);

    return () => clearTimeout(preloadTimer);
  }, [preloadSong]);

  return null; // This component doesn't render anything
}
