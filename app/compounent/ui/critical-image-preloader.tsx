"use client";
import { useEffect } from "react";

// CRITICAL images that must load FIRST - these appear on the main page
const CRITICAL_IMAGES = [
  "https://lh3.google.com/u/0/d/1p5pYU4CkMt_icS1f11dNhoRQGK9VbUEl=w542-h406-p-k-nu-iv1", // Muso Music Logo (Navbar)
  "/IMG/Yee Mon Khant.jpg", // Yee Mon Khant (Local Image)
  "/IMG/heinthiha.png", // Hein Thiha (Local Image)
  "/IMG/Hsu Pyae Aung.png", // Hsu Pyae Aung (Local Image)
  "/IMG/Lin Htet.jpg", // Lin Htet (Local Image)
  "/IMG/Kyaw Htut.jpg", // Kyaw Htut (Local Image)
];

export default function CriticalImagePreloader() {
  useEffect(() => {
    // Preload CRITICAL images IMMEDIATELY - these are visible on first page load
    const preloadCriticalImages = () => {
      console.log("🔥 Preloading CRITICAL images for instant display...");
      CRITICAL_IMAGES.forEach((imageUrl, index) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          console.log(
            `⚡ Critical image ${index + 1}/${
              CRITICAL_IMAGES.length
            } loaded: ${imageUrl}`
          );
        };
        img.onerror = () => {
          console.warn(`❌ Failed to preload critical image: ${imageUrl}`);
        };
      });
    };

    // Start preloading CRITICAL images IMMEDIATELY - no delay!
    preloadCriticalImages();
  }, []);

  return null; // This component doesn't render anything
}
