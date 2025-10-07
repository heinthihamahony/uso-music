"use client";
import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import PlayIcon from "../../compounent/ui/play-icon";
import PauseIcon from "../../compounent/ui/pause-icon";
import HeartIcon from "../../compounent/ui/heart-icon";
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
    e.stopPropagation();
    if (isCurrentlyPlaying) {
      pauseSong();
    } else {
      playSong(songId);
    }
  };

  return (
    <div className="relative">
      <Avatar isBordered radius="sm" src={avatar} className="w-16 h-16" />
      <button
        onClick={handlePlayPause}
        className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-sm hover:bg-black/70 transition-colors"
      >
        {isCurrentlyPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
}

export default function YeeMonKhantPage() {
  // Get all songs by Yee Mon Khant
  const yeeMonKhantSongs = songsData.filter(
    (song) => song.artist === "Yee Mon Khant"
  );

  return (
    <div className="min-h-screen px-4 py-3 bg-black">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-6 mb-6">
          <Avatar
            src="https://lh3.google.com/u/0/d/1HcAsKiC_2bNmRKgNrEWU2uhy7PI2CY9m=w542-h406-p-k-nu-iv1"
            className="w-32 h-32"
            isBordered
            radius="lg"
          />
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Yee Mon Khant
            </h1>
            <p className="text-zinc-400 text-lg">
              {yeeMonKhantSongs.length} songs
            </p>
            <p className="text-zinc-500 text-sm">Artist</p>
          </div>
        </div>
      </div>

      {/* Albums Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Albums</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <Image
                alt="New Album"
                className="object-cover"
                height={200}
                src="https://lh3.google.com/u/0/d/1HcAsKiC_2bNmRKgNrEWU2uhy7PI2CY9m=w542-h406-p-k-nu-iv1"
                width="100%"
              />
            </CardHeader>
            <CardFooter className="pt-2 px-4 pb-4">
              <div className="w-full">
                <h4 className="font-bold text-white text-lg">New Album</h4>
                <p className="text-zinc-400 text-sm">Yee Mon Khant</p>
                <p className="text-zinc-500 text-xs mt-1">
                  2024 • {yeeMonKhantSongs.length} songs
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Popular Songs Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Popular Songs</h2>
        <div className="space-y-2">
          {yeeMonKhantSongs.map((song) => (
            <div key={song.id}>
              <Button className="bg-black text-white py-4 w-full h-auto">
                <div className="flex items-center gap-4 w-full">
                  <div className="">
                    <AvatarWithPlayIcon
                      songId={song.id}
                      avatar={song.avatar}
                      title={song.title}
                      artist={song.artist}
                    />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-white font-medium">{song.title}</p>
                    <p className="text-zinc-400 text-sm">{song.artist}</p>
                  </div>
                  <div className="text-zinc-500 text-sm">
                    {song.duration || "3:45"}
                  </div>
                </div>
                <div className="ml-auto">
                  <HeartIcon />
                </div>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Hidden audio elements for each song */}
      {yeeMonKhantSongs.map(
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
