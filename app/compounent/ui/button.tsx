"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import HeartIcon from "./heart-icon";
import PlayIcon from "./play-icon";
import PauseIcon from "./pause-icon";
import { useAudio } from "../../context/audio-context";
import { songsData } from "../../data/songs";

// Component for avatar with play icon
function AvatarWithPlayIcon({
  songId,
  avatar,
  title,
  artist,
}: {
  songId: number;
  avatar: string;
  title: string;
  artist: string;
}) {
  const { currentSongId, isPlaying, playSong, pauseSong } = useAudio();
  const isCurrentlyPlaying = currentSongId === songId && isPlaying;

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent button click
    if (isCurrentlyPlaying) {
      pauseSong();
    } else {
      playSong(songId);
    }
  };

  return (
    <div className="relative">
      <Avatar
        isBordered
        radius="sm"
        src={avatar}
        className="w-16 h-16"
        name={artist.charAt(0).toUpperCase()}
        classNames={{
          img: "object-cover object-center",
          name: "text-white font-bold",
        }}
        onError={() => {
          // Fallback handled by NextUI Avatar component
        }}
      />
      <button
        onClick={handlePlayPause}
        className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-sm hover:bg-black/70 transition-colors"
      >
        {isCurrentlyPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
}

export default function GuessButtonComponent() {
  // Get songs from "You hope you like it" category
  const hopeYouLikeItSongs = songsData.filter(
    (song) => song.category === "You hope you like it"
  );

  // Split songs into two columns (3:3 layout)
  const firstColumn = hopeYouLikeItSongs.slice(0, 3);
  const secondColumn = hopeYouLikeItSongs.slice(3, 6);

  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
      {/* First Column - 3 songs */}
      <div className="space-y-4 w-[320px] flex-shrink-0">
        {firstColumn.map((song) => (
          <Button
            key={song.id}
            className="theme-bg-tertiary theme-text-primary py-11 w-full"
          >
            <div className="flex items-center gap-4">
              <div className="">
                <AvatarWithPlayIcon
                  songId={song.id}
                  avatar={song.avatar}
                  title={song.title}
                  artist={song.artist}
                />
              </div>
              <div className="text-left">
                <p className="theme-text-primary">{song.title}</p>
                <p className="theme-text-primary text-xs">{song.artist}</p>
              </div>
            </div>
            <div className="ml-auto">
              <HeartIcon />
            </div>
          </Button>
        ))}
      </div>

      {/* Second Column - 3 songs */}
      <div className="space-y-4 w-[320px] flex-shrink-0">
        {secondColumn.map((song) => (
          <Button
            key={song.id}
            className="theme-bg-tertiary theme-text-primary py-11 w-full"
          >
            <div className="flex items-center gap-4">
              <div className="">
                <AvatarWithPlayIcon
                  songId={song.id}
                  avatar={song.avatar}
                  title={song.title}
                  artist={song.artist}
                />
              </div>
              <div className="text-left">
                <p className="theme-text-primary">{song.title}</p>
                <p className="theme-text-primary text-xs">{song.artist}</p>
              </div>
            </div>
            <div className="ml-auto">
              <HeartIcon />
            </div>
          </Button>
        ))}
      </div>

      {/* Hidden audio elements for each song */}
      {hopeYouLikeItSongs.map(
        (song) =>
          song.audioFile && (
            <audio
              key={`audio-${song.id}`}
              data-song-id={song.id}
              src={song.audioFile}
              preload="metadata"
              style={{ display: "none" }}
            />
          )
      )}
    </div>
  );
}
