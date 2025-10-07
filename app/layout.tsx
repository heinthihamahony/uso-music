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
import SongsImagePreloader from "./compounent/ui/songs-image-preloader";
import ImmediateImageLoader from "./compounent/ui/immediate-image-loader";
import OfflineImageCache from "./compounent/ui/offline-image-cache";
import FloatingFeedbackButton from "./compounent/ui/floating-feedback-button";
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
        <link
          rel="preload"
          as="image"
          href="https://lh3.google.com/u/0/d/1p5pYU4CkMt_icS1f11dNhoRQGK9VbUEl=w542-h406-p-k-nu-iv1"
        />
        <link rel="preload" as="image" href="/IMG/Yee Mon Khant.jpg" />
        <link rel="preload" as="image" href="/IMG/heinthiha.png" />
        <link rel="preload" as="image" href="/IMG/Hsu Pyae Aung.png" />
        <link rel="preload" as="image" href="/IMG/Lin Htet.jpg" />
        <link rel="preload" as="image" href="/IMG/Kyaw Htut.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ProfileProvider>
            <AudioProvider>
              <ServiceWorkerRegistration />
              <ImmediateImageLoader />
              <CriticalImagePreloader />
              <SongsImagePreloader />
              <OfflineImageCache />
              <ImagePreloader />
              <AudioPreloader />
              {children}
              <BottomPlayer />
              <FloatingFeedbackButton />
            </AudioProvider>
          </ProfileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
