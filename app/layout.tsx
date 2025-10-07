import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProfileProvider } from "./compounent/ui/profile-context";
import { AudioProvider } from "./context/audio-context";
import { ThemeProvider } from "./context/theme-context";
import BottomPlayer from "./compounent/ui/bottom-player";

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
      <body className={inter.className}>
        <ThemeProvider>
          <ProfileProvider>
            <AudioProvider>
              {children}
              <BottomPlayer />
            </AudioProvider>
          </ProfileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
