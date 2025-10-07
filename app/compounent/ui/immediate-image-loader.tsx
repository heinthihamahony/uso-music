"use client";
import { useEffect } from "react";
import { songsData } from "../../data/songs";

export default function ImmediateImageLoader() {
  useEffect(() => {
    // Get ALL unique image URLs from songs data
    const allImageUrls = Array.from(
      new Set(songsData.map(song => song.avatar).filter(Boolean))
    );

    console.log(`🚀 IMMEDIATELY loading ${allImageUrls.length} images - NO DELAYS!`);

    // Load images IMMEDIATELY - no delays!
    const loadImagesImmediately = () => {
      allImageUrls.forEach((imageUrl, index) => {
        // Create image element and load immediately
        const img = new window.Image();
        img.src = imageUrl;
        img.onload = () => {
          console.log(`✅ Image ${index + 1}/${allImageUrls.length} loaded instantly: ${imageUrl}`);
        };
        img.onerror = () => {
          console.warn(`❌ Failed to load image: ${imageUrl}`);
        };
        
        // Also preload in browser cache
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageUrl;
        document.head.appendChild(link);
      });
    };

    // Start loading IMMEDIATELY
    loadImagesImmediately();
    
    // Also load again after 100ms to ensure everything is cached
    setTimeout(loadImagesImmediately, 100);
    
    // And again after 500ms for maximum coverage
    setTimeout(loadImagesImmediately, 500);

  }, []);

  return null; // This component doesn't render anything
}
