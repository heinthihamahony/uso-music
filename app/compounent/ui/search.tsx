"use client";
import { Input, Avatar, Button } from "@nextui-org/react";
import { useState, useMemo } from "react";
import PlayIcon from "./play-icon";
import PauseIcon from "./pause-icon";
import { songsData } from "../../data/songs";
import { useAudio } from "../../context/audio-context";

export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const { currentSongId, isPlaying, playSong, pauseSong } = useAudio();

  // Filter songs based on search input (only by title and only songs with audio files)
  const filteredSongs = useMemo(() => {
    if (!searchValue.trim()) return [];

    const searchLower = searchValue.toLowerCase();
    return songsData.filter(
      (song) => song.title.toLowerCase().includes(searchLower) && song.audioFile
    );
  }, [searchValue]);

  const handlePlayPause = (songId: number) => {
    if (currentSongId === songId && isPlaying) {
      pauseSong();
    } else {
      playSong(songId);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center bg-linear-to-tr rounded-full">
        <Input
          isClearable
          value={searchValue}
          onValueChange={setSearchValue}
          classNames={{
            label: "text-black/50",
            input: [
              "bg-transparent",
              "text-white !important",
              "placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-sm",
              "bg-default-700/60",
              "dark:bg-default/600",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "cursor-text!",
            ],
          }}
          label=""
          placeholder="Search..."
          radius="lg"
          startContent={
            <SearchIcon className="text-white/60 mb-0.5 pointer-events-none shrink-0" />
          }
        />
      </div>

      {/* Search Results */}
      {searchValue && (
        <div className="mt-4 max-h-96 overflow-y-auto">
          {filteredSongs.length > 0 ? (
            <div className="space-y-2">
              {filteredSongs.map((song) => (
                <div
                  key={song.id}
                  className="flex items-center gap-3 p-3 theme-bg-secondary rounded-lg hover:opacity-80 transition-colors"
                >
                  <Avatar
                    src={song.avatar}
                    alt={song.title}
                    className="w-12 h-12 flex-shrink-0"
                    classNames={{
                      img: "object-cover object-center",
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="theme-text-primary font-medium text-sm truncate">
                      {song.title}
                    </p>
                    <p className="theme-text-secondary text-xs truncate">
                      {song.artist}
                    </p>
                  </div>
                  <Button
                    isIconOnly
                    size="sm"
                    className="theme-bg-tertiary hover:opacity-80 theme-text-primary"
                    onClick={() => handlePlayPause(song.id)}
                  >
                    {currentSongId === song.id && isPlaying ? (
                      <PauseIcon />
                    ) : (
                      <PlayIcon />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="theme-text-secondary text-sm">
                No songs found for "{searchValue}"
              </p>
            </div>
          )}
        </div>
      )}

      {/* Hidden audio elements for search results */}
      {filteredSongs.map(
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
