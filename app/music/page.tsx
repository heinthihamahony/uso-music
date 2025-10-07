"use client";
import {
  Card,
  CardFooter,
  Image,
  Button,
  CardHeader,
  Avatar,
} from "@nextui-org/react";
import PlayIcon from "../compounent/ui/play-icon";
import PauseIcon from "../compounent/ui/pause-icon";
import RightArrowWhite from "../compounent/ui/right-arrow-white";
import HeartIcon from "../compounent/ui/heart-icon";
import NavbarComponent from "../compounent/ui/tableleft";
import { songsData } from "../data/songs";
import { useAudio } from "../context/audio-context";

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
    e.stopPropagation();
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
          name: "text-white font-bold"
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

export default function MusicPage() {
  // Get songs by category
  const editorChoiceSongs = songsData.filter(
    (song) => song.category === "Editor's Choice"
  );
  const newAlbumSongs = songsData.filter(
    (song) => song.category === "New Album"
  );
  const hopeYouLikeItSongs = songsData.filter(
    (song) => song.category === "You hope you like it"
  );
  const vipSongs = songsData.filter((song) => song.category === "VIP Songs");
  const internationalSongs = songsData.filter(
    (song) => song.category === "International song"
  );
  const topChartsSongs = songsData.filter(
    (song) => song.category === "Top Charts"
  );
  return (
    <div className="min-h-screen px-4 py-3 theme-bg-primary">
      <NavbarComponent />

      {/* Header */}
      <div className="mb-8 mt-5">
        <h1 className="text-3xl font-bold theme-text-primary mb-2">
          All Music
        </h1>
        <p className="theme-text-secondary">
          Discover and listen to all your favorite songs
        </p>
      </div>

      {/* Top Charts Section */}
      {topChartsSongs.length > 0 && (
        <div className="mb-12">
          <div className="my-3 mt-8 flex items-center gap-2">
            <h2 className="text-xl theme-text-primary font-bold">Top Charts</h2>
            <RightArrowWhite />
          </div>
          <div className="space-y-2">
            {topChartsSongs.map((song) => (
              <Button
                key={song.id}
                className="theme-bg-tertiary theme-text-primary py-4 w-full h-auto"
              >
                <div className="flex items-center gap-4 w-full">
                  <AvatarWithPlayIcon
                    songId={song.id}
                    avatar={song.avatar}
                    title={song.title}
                    artist={song.artist}
                  />
                  <div className="text-left flex-1">
                    <p className="theme-text-primary font-medium">
                      {song.title}
                    </p>
                    <p className="theme-text-secondary text-sm">
                      {song.artist}
                    </p>
                  </div>
                  <div className="theme-text-tertiary text-sm">
                    {song.duration || "3:45"}
                  </div>
                </div>
                <div className="ml-auto">
                  <HeartIcon />
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Editor's Choice Section */}
      {editorChoiceSongs.length > 0 && (
        <div className="">
          <div className="my-3 mt-8 flex items-center gap-2">
            <h2 className="text-xl theme-text-primary font-bold">
              Editor's Choice
            </h2>
            <RightArrowWhite />
          </div>
          <div className="space-y-2">
            {editorChoiceSongs.map((song) => (
              <Button
                key={song.id}
                className="theme-bg-tertiary theme-text-primary py-4 w-full h-auto"
              >
                <div className="flex items-center gap-4 w-full">
                  <AvatarWithPlayIcon
                    songId={song.id}
                    avatar={song.avatar}
                    title={song.title}
                    artist={song.artist}
                  />
                  <div className="text-left flex-1">
                    <p className="theme-text-primary font-medium">
                      {song.title}
                    </p>
                    <p className="theme-text-secondary text-sm">
                      {song.artist}
                    </p>
                  </div>
                  <div className="theme-text-tertiary text-sm">
                    {song.duration || "3:45"}
                  </div>
                </div>
                <div className="ml-auto">
                  <HeartIcon />
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* New Album Section */}
      {newAlbumSongs.length > 0 && (
        <div className="mb-12">
          <div className="my-3 mt-8 flex items-center gap-2">
            <h2 className="text-xl theme-text-primary font-bold">New Album</h2>
            <RightArrowWhite />
          </div>
          <div className="space-y-2">
            {newAlbumSongs.map((song) => (
              <Button
                key={song.id}
                className="theme-bg-tertiary theme-text-primary py-4 w-full h-auto"
              >
                <div className="flex items-center gap-4 w-full">
                  <AvatarWithPlayIcon
                    songId={song.id}
                    avatar={song.avatar}
                    title={song.title}
                    artist={song.artist}
                  />
                  <div className="text-left flex-1">
                    <p className="theme-text-primary font-medium">
                      {song.title}
                    </p>
                    <p className="theme-text-secondary text-sm">
                      {song.artist}
                    </p>
                  </div>
                  <div className="theme-text-tertiary text-sm">
                    {song.duration || "3:45"}
                  </div>
                </div>
                <div className="ml-auto">
                  <HeartIcon />
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* We Hope You Like It Section */}
      {hopeYouLikeItSongs.length > 0 && (
        <div className="mb-12">
          <div className="my-3 mt-8 flex items-center gap-2">
            <h2 className="text-xl theme-text-primary font-bold">
              We Hope You Like It
            </h2>
            <RightArrowWhite />
          </div>
          <div className="space-y-2">
            {hopeYouLikeItSongs.map((song) => (
              <Button
                key={song.id}
                className="theme-bg-tertiary theme-text-primary py-4 w-full h-auto"
              >
                <div className="flex items-center gap-4 w-full">
                  <AvatarWithPlayIcon
                    songId={song.id}
                    avatar={song.avatar}
                    title={song.title}
                    artist={song.artist}
                  />
                  <div className="text-left flex-1">
                    <p className="theme-text-primary font-medium">
                      {song.title}
                    </p>
                    <p className="theme-text-secondary text-sm">
                      {song.artist}
                    </p>
                  </div>
                  <div className="theme-text-tertiary text-sm">
                    {song.duration || "3:45"}
                  </div>
                </div>
                <div className="ml-auto">
                  <HeartIcon />
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* VIP Songs Section */}
      {vipSongs.length > 0 && (
        <div className="mb-12">
          <div className="my-3 mt-8 flex items-center gap-2">
            <h2 className="text-xl theme-text-primary font-bold">VIP Songs</h2>
            <RightArrowWhite />
          </div>
          <div className="space-y-2">
            {vipSongs.map((song) => (
              <Button
                key={song.id}
                className="theme-bg-tertiary theme-text-primary py-4 w-full h-auto"
              >
                <div className="flex items-center gap-4 w-full">
                  <AvatarWithPlayIcon
                    songId={song.id}
                    avatar={song.avatar}
                    title={song.title}
                    artist={song.artist}
                  />
                  <div className="text-left flex-1">
                    <p className="theme-text-primary font-medium">
                      {song.title}
                    </p>
                    <p className="theme-text-secondary text-sm">
                      {song.artist}
                    </p>
                  </div>
                  <div className="theme-text-tertiary text-sm">
                    {song.duration || "3:45"}
                  </div>
                </div>
                <div className="ml-auto">
                  <HeartIcon />
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* International Songs Section */}
      {internationalSongs.length > 0 && (
        <div className="pb-36">
          <div className="my-3 mt-8 flex items-center gap-2">
            <h2 className="text-xl theme-text-primary font-bold">
              International Songs
            </h2>
            <RightArrowWhite />
          </div>
          <div className="space-y-2">
            {internationalSongs.map((song) => (
              <Button
                key={song.id}
                className="theme-bg-tertiary theme-text-primary py-4 w-full h-auto"
              >
                <div className="flex items-center gap-4 w-full">
                  <AvatarWithPlayIcon
                    songId={song.id}
                    avatar={song.avatar}
                    title={song.title}
                    artist={song.artist}
                  />
                  <div className="text-left flex-1">
                    <p className="theme-text-primary font-medium">
                      {song.title}
                    </p>
                    <p className="theme-text-secondary text-sm">
                      {song.artist}
                    </p>
                  </div>
                  <div className="theme-text-tertiary text-sm">
                    {song.duration || "3:45"}
                  </div>
                </div>
                <div className="ml-auto">
                  <HeartIcon />
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Hidden audio elements for all songs */}
      {songsData.map(
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
