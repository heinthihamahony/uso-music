import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProfileProvider } from "./compounent/ui/profile-context";
import { AudioProvider } from "./context/audio-context";
import { ThemeProvider } from "./context/theme-context";
import BottomPlayer from "./compounent/ui/bottom-player";
import AudioPreloader from "./compounent/ui/audio-preloader";
import ImagePreloader from "./compounent/ui/image-preloader";
import CriticalImagePreloader from "./compounent/ui/critical-image-preloader";
import ServiceWorkerRegistration from "./compounent/ui/service-worker-registration";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muso Music",
  description:
    "Discover and listen to your favorite music with Muso Music - the ultimate music streaming experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images for instant display */}
        <link rel="preload" as="image" href="https://lh3.google.com/u/0/d/1p5pYU4CkMt_icS1f11dNhoRQGK9VbUEl=w542-h406-p-k-nu-iv1" />
        <link rel="preload" as="image" href="https://lh3.google.com/u/0/d/1HcAsKiC_2bNmRKgNrEWU2uhy7PI2CY9m=w542-h406-p-k-nu-iv1" />
        <link rel="preload" as="image" href="https://lh3.google.com/u/0/d/1J5c32EHpGaTZypllg0gkH6HlIZJUYueO=w2378-h1624-iv1?auditContext=forDisplay" />
        <link rel="preload" as="image" href="https://lh3.google.com/u/0/d/1reIwZsi0tIOZOmRDW7nlT5PcbJA5c1Iw=w542-h406-p-k-nu-iv1" />
        <link rel="preload" as="image" href="https://lh3.google.com/u/0/d/1GjzdUaSOrnKkneVLoyCrqVc5g6BIuK9K=w542-h406-p-k-nu-iv2" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ProfileProvider>
            <AudioProvider>
              <ServiceWorkerRegistration />
              <CriticalImagePreloader />
              <ImagePreloader />
              <AudioPreloader />
              {children}
              <BottomPlayer />
            </AudioProvider>
          </ProfileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
