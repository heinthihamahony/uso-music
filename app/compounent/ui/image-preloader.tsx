"use client";
import { useEffect } from "react";

// ALL images used in the website - preload for instant display with ZERO delays!
const IMAGES_TO_PRELOAD = [
  // Logo and main images
  "https://lh3.google.com/u/0/d/1p5pYU4CkMt_icS1f11dNhoRQGK9VbUEl=w542-h406-p-k-nu-iv1", // Muso Music Logo
  
  // Artist profile pictures
  "https://lh3.google.com/u/0/d/1HcAsKiC_2bNmRKgNrEWU2uhy7PI2CY9m=w542-h406-p-k-nu-iv1", // Yee Mon Khant
  "https://lh3.google.com/u/0/d/1J5c32EHpGaTZypllg0gkH6HlIZJUYueO=w2378-h1624-iv1?auditContext=forDisplay", // Hein Thiha
  "https://lh3.google.com/u/0/d/1reIwZsi0tIOZOmRDW7nlT5PcbJA5c1Iw=w542-h406-p-k-nu-iv1", // Lin Htet
  "https://lh3.google.com/u/0/d/1GjzdUaSOrnKkneVLoyCrqVc5g6BIuK9K=w542-h406-p-k-nu-iv2", // Kyaw Htut
  "https://lh3.google.com/u/0/d/15i2DH_ZubPoGHJIVCmxUnauI_udGilo4=w542-h406-p-k-nu-iv1", // Artist 5
  
  // Adventure and UI images
  "https://lh3.google.com/u/0/d/1IdNnlhWav4YMgMxUNqxrUrF0FyYtJMvO=w2378-h1624-iv1?auditContext=prefetch", // Default Avatar
  "https://lh3.google.com/u/0/d/1JyiGE9iw7JZ-aix9pzV6QytGL3-NhPGQ=w2378-h1624-iv1?auditContext=forDisplay", // Adventure 1
  "https://lh3.google.com/u/0/d/1aGA-wzMTGBKQegON76csQCJA-a4E0XsW=w2378-h1624-iv1?auditContext=forDisplay", // Adventure 3
];

export default function ImagePreloader() {
  useEffect(() => {
    // Preload all images IMMEDIATELY for instant display - no delays!
    const preloadImages = () => {
      console.log('🚀 Starting aggressive image preloading...');
      IMAGES_TO_PRELOAD.forEach((imageUrl, index) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          console.log(`✅ Preloaded image ${index + 1}/${IMAGES_TO_PRELOAD.length}: ${imageUrl}`);
        };
        img.onerror = () => {
          console.warn(`❌ Failed to preload image: ${imageUrl}`);
        };
      });
    };

    // Start preloading IMMEDIATELY - no delay!
    preloadImages();
    
    // Also preload again after a short delay to ensure everything is cached
    const preloadTimer = setTimeout(preloadImages, 100);

    return () => clearTimeout(preloadTimer);
  }, []);

  return null; // This component doesn't render anything
}
