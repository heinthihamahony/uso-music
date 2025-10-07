"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@nextui-org/react";
import PlayIcon from "./play-icon";
import PauseIcon from "./pause-icon";
import { useAudio } from "../../context/audio-context";

interface AudioPlayerProps {
  audioFile: string;
  songTitle: string;
  artist: string;
  songId: number;
  className?: string;
}

export default function AudioPlayer({
  audioFile,
  songTitle,
  artist,
  songId,
  className = "",
}: AudioPlayerProps) {
  const { currentSongId, isPlaying, playSong, pauseSong } = useAudio();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const isCurrentlyPlaying = currentSongId === songId && isPlaying;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Add data attribute for global audio management
    audio.setAttribute("data-song-id", songId.toString());

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("canplay", handleCanPlay);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("canplay", handleCanPlay);
    };
  }, [songId]);

  const togglePlayPause = () => {
    if (isCurrentlyPlaying) {
      pauseSong();
    } else {
      playSong(songId);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <audio ref={audioRef} src={audioFile} preload="metadata" />

      <Button
        className={`text-tiny p-0 rounded-full w-12 h-12 min-w-12 backdrop-blur-sm transition-all duration-300 ${
          isCurrentlyPlaying
            ? "bg-green-500/80 hover:bg-green-500/90 shadow-lg shadow-green-500/30"
            : "bg-white/20 hover:bg-white/30"
        }`}
        size="sm"
        isIconOnly
        onClick={togglePlayPause}
        isLoading={isLoading}
        disabled={isLoading}
      >
        {!isLoading && (isCurrentlyPlaying ? <PauseIcon /> : <PlayIcon />)}
      </Button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p
            className={`font-medium text-sm truncate transition-colors duration-300 ${
              isCurrentlyPlaying ? "text-green-400" : "text-white"
            }`}
          >
            {songTitle}
          </p>
          {isCurrentlyPlaying && (
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              <div
                className="w-1 h-1 bg-green-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1 h-1 bg-green-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <span className="text-green-400 text-xs font-medium ml-1">
                NOW PLAYING
              </span>
            </div>
          )}
        </div>
        <p className="text-zinc-400 text-xs truncate">{artist}</p>
        {duration > 0 && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-zinc-500 text-xs">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1 bg-zinc-700 rounded-full h-1">
              <div
                className="bg-white h-1 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    duration > 0 ? (currentTime / duration) * 100 : 0
                  }%`,
                }}
              />
            </div>
            <span className="text-zinc-500 text-xs">
              {formatTime(duration)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
