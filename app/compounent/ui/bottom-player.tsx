"use client";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import PlayIcon from "./play-icon";
import PauseIcon from "./pause-icon";
import { useAudio } from "../../context/audio-context";
import { songsData } from "../../data/songs";

export default function BottomPlayer() {
  const {
    currentSongId,
    isPlaying,
    isLoading,
    playSong,
    pauseSong,
    currentAudio,
    currentTime,
    duration,
  } = useAudio();
  const [isDragging, setIsDragging] = useState(false);

  // Find the current song details
  const currentSong = currentSongId
    ? songsData.find((song) => song.id === currentSongId)
    : null;

  // Check if current song is from one of the specified categories
  const targetCategories = [
    "Editor's Choice",
    "You hope you like it",
    "New Album",
    "International song",
    "VIP Songs",
    "Top Charts",
  ];
  const shouldShowPlayer =
    currentSong &&
    targetCategories.includes(currentSong.category) &&
    currentSongId !== null;

  // Debug logging and force re-render
  useEffect(() => {
    console.log("Bottom Player Debug:", {
      currentSongId,
      isPlaying,
      currentTime,
      duration,
      currentSong: currentSong?.title,
      shouldShowPlayer,
    });
  }, [
    currentSongId,
    isPlaying,
    currentTime,
    duration,
    currentSong,
    shouldShowPlayer,
  ]);

  // Force slider to update by using a state that changes with currentTime
  const [sliderKey, setSliderKey] = useState(0);
  useEffect(() => {
    setSliderKey((prev) => prev + 1);
  }, [currentTime]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    console.log("Slider change:", { newTime, currentAudio: !!currentAudio });
    if (currentAudio && !isNaN(newTime)) {
      currentAudio.currentTime = newTime;
    }
  };

  const handleSliderMouseDown = () => {
    setIsDragging(true);
  };

  const handleSliderMouseUp = () => {
    setIsDragging(false);
  };

  const handleSliderClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!currentAudio || !duration) {
      console.log("Slider click failed:", {
        currentAudio: !!currentAudio,
        duration,
      });
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;

    console.log("Slider click:", { clickX, percentage, newTime, duration });

    if (newTime >= 0 && newTime <= duration) {
      currentAudio.currentTime = newTime;
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseSong();
    } else {
      if (currentSongId) {
        playSong(currentSongId);
      }
    }
  };

  if (!shouldShowPlayer || !currentSong) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-gray-800 z-50">
      <div className="px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Song Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-medium text-sm truncate">
              {currentSong.title}
            </h3>
            <p className="text-gray-400 text-xs truncate">
              {currentSong.artist}
            </p>
          </div>

          {/* Play/Pause Button */}
          <Button
            className="text-tiny p-0 rounded-full w-10 h-10 min-w-10 bg-green-500/80 hover:bg-green-500/90 shadow-lg shadow-green-500/30"
            size="sm"
            isIconOnly
            onClick={togglePlayPause}
            isLoading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}
          </Button>

          {/* Time Display */}
          <div className="text-white text-xs font-mono min-w-[80px] text-right">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        {/* Progress Slider */}
        <div className="mt-3">
          <input
            key={sliderKey}
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime || 0}
            onChange={handleSliderChange}
            onMouseDown={handleSliderMouseDown}
            onMouseUp={handleSliderMouseUp}
            onClick={handleSliderClick}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider transition-all duration-100"
            style={{
              background: `linear-gradient(to right, #10b981 0%, #10b981 ${
                duration && duration > 0
                  ? ((currentTime || 0) / duration) * 100
                  : 0
              }%, #374151 ${
                duration && duration > 0
                  ? ((currentTime || 0) / duration) * 100
                  : 0
              }%, #374151 100%)`,
            }}
          />
          {/* Debug info */}
          <div className="text-xs text-gray-500 mt-1">
            Debug: Time: {currentTime.toFixed(1)}s / Duration:{" "}
            {duration.toFixed(1)}s / Progress:{" "}
            {duration ? ((currentTime / duration) * 100).toFixed(1) : 0}%
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: all 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }

        .slider::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: all 0.2s ease;
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }

        .slider::-webkit-slider-track {
          background: transparent;
        }

        .slider::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}
