"use client";
import { useEffect } from "react";

// All profile pictures and images to preload for instant display
const IMAGES_TO_PRELOAD = [
  // Profile pictures
  "https://lh3.google.com/u/0/d/1p5pYU4CkMt_icS1f11dNhoRQGK9VbUEl=w542-h406-p-k-nu-iv1", // Muso Music Logo
  "https://lh3.google.com/u/0/d/1HcAsKiC_2bNmRKgNrEWU2uhy7PI2CY9m=w542-h406-p-k-nu-iv1", // Yee Mon Khant
  "https://lh3.google.com/u/0/d/1J5c32EHpGaTZypllg0gkH6HlIZJUYueO=w2378-h1624-iv1?auditContext=forDisplay", // Hein Thiha
  "https://lh3.google.com/u/0/d/1reIwZsi0tIOZOmRDW7nlT5PcbJA5c1Iw=w542-h406-p-k-nu-iv1", // Lin Htet
  "https://lh3.google.com/u/0/d/1GjzdUaSOrnKkneVLoyCrqVc5g6BIuK9K=w542-h406-p-k-nu-iv2", // Kyaw Htut
  "https://lh3.google.com/u/0/d/1IdNnlhWav4YMgMxUNqxrUrF0FyYtJMvO=w2378-h1624-iv1?auditContext=prefetch", // Default Avatar
  "https://lh3.google.com/u/0/d/1JyiGE9iw7JZ-aix9pzV6QytGL3-NhPGQ=w2378-h1624-iv1?auditContext=forDisplay", // Adventure 1
  "https://lh3.google.com/u/0/d/1aGA-wzMTGBKQegON76csQCJA-a4E0XsW=w2378-h1624-iv1?auditContext=forDisplay", // Adventure 3
  // Add more profile pictures as needed
];

export default function ImagePreloader() {
  useEffect(() => {
    // Preload all images for instant display
    const preloadImages = () => {
      IMAGES_TO_PRELOAD.forEach((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          console.log(`Preloaded image: ${imageUrl}`);
        };
        img.onerror = () => {
          console.warn(`Failed to preload image: ${imageUrl}`);
        };
      });
    };

    // Start preloading after a short delay to not block initial page load
    const preloadTimer = setTimeout(preloadImages, 500);

    return () => clearTimeout(preloadTimer);
  }, []);

  return null; // This component doesn't render anything
}
