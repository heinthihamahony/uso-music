"use client";
import { useEffect } from "react";
import { songsData } from "../../data/songs";

export default function SongsImagePreloader() {
  useEffect(() => {
    // Get ALL unique image URLs from songs data
    const allImageUrls = Array.from(
      new Set(songsData.map(song => song.avatar).filter(Boolean))
    );

    console.log(`🎵 Preloading ${allImageUrls.length} song images for instant display...`);

    // Preload all song images immediately
    const preloadAllImages = () => {
      allImageUrls.forEach((imageUrl, index) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          console.log(`✅ Song image ${index + 1}/${allImageUrls.length} loaded: ${imageUrl}`);
        };
        img.onerror = () => {
          console.warn(`❌ Failed to preload song image: ${imageUrl}`);
        };
      });
    };

    // Start preloading immediately
    preloadAllImages();
    
    // Also preload again after a short delay to ensure everything is cached
    const preloadTimer = setTimeout(preloadAllImages, 200);

    return () => clearTimeout(preloadTimer);
  }, []);

  return null; // This component doesn't render anything
}
