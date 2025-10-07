"use client";
import { useEffect } from "react";
import { songsData } from "../../data/songs";

export default function OfflineImageCache() {
  useEffect(() => {
    // Get ALL unique image URLs from songs data
    const allImageUrls = Array.from(
      new Set(songsData.map(song => song.avatar).filter(Boolean))
    );

    console.log(`🌐 Caching ${allImageUrls.length} images for OFFLINE usage...`);

    // Cache all images for offline use
    const cacheImagesForOffline = async () => {
      if ('caches' in window) {
        try {
          const cache = await caches.open('muso-music-images-v1');
          
          // Cache all song images
          const cachePromises = allImageUrls.map(async (imageUrl) => {
            try {
              const response = await fetch(imageUrl);
              if (response.ok) {
                await cache.put(imageUrl, response);
                console.log(`✅ Cached for offline: ${imageUrl}`);
              }
            } catch (error) {
              console.warn(`❌ Failed to cache: ${imageUrl}`, error);
            }
          });

          await Promise.all(cachePromises);
          console.log(`🎵 All ${allImageUrls.length} images cached for offline use!`);
        } catch (error) {
          console.error('Failed to cache images:', error);
        }
      }
    };

    // Start caching after a short delay
    const cacheTimer = setTimeout(cacheImagesForOffline, 1000);

    return () => clearTimeout(cacheTimer);
  }, []);

  return null; // This component doesn't render anything
}
