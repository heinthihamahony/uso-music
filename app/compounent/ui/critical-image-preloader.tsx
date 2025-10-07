"use client";
import { useEffect } from "react";

// CRITICAL images that must load FIRST - these appear on the main page
const CRITICAL_IMAGES = [
  "https://lh3.google.com/u/0/d/1p5pYU4CkMt_icS1f11dNhoRQGK9VbUEl=w542-h406-p-k-nu-iv1", // Muso Music Logo (Navbar)
  "https://lh3.google.com/u/0/d/1HcAsKiC_2bNmRKgNrEWU2uhy7PI2CY9m=w542-h406-p-k-nu-iv1", // Yee Mon Khant (Top Charts)
  "/IMG/heinthiha.png", // Hein Thiha (Local Image)
  "https://lh3.google.com/u/0/d/1reIwZsi0tIOZOmRDW7nlT5PcbJA5c1Iw=w542-h406-p-k-nu-iv1", // Lin Htet (Top Charts)
  "https://lh3.google.com/u/0/d/1GjzdUaSOrnKkneVLoyCrqVc5g6BIuK9K=w542-h406-p-k-nu-iv2", // Kyaw Htut (Top Charts)
];

export default function CriticalImagePreloader() {
  useEffect(() => {
    // Preload CRITICAL images IMMEDIATELY - these are visible on first page load
    const preloadCriticalImages = () => {
      console.log('🔥 Preloading CRITICAL images for instant display...');
      CRITICAL_IMAGES.forEach((imageUrl, index) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          console.log(`⚡ Critical image ${index + 1}/${CRITICAL_IMAGES.length} loaded: ${imageUrl}`);
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
