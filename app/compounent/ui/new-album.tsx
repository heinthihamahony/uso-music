import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";
import PlayIcon from "./play-icon";
import RightArrowWhite from "./right-arrow-white";
import AudioPlayer from "./audio-player";
import { Song, songsData } from "../../data/songs";
import { useAudio } from "../../context/audio-context";

interface NewAlbumComponentProps {
  songs?: Song[];
  title?: string;
}

export default function NewAlbumComponent({
  songs = [],
  title = "New Album",
}: NewAlbumComponentProps) {
  const { currentSongId, isPlaying } = useAudio();

  // Get New Album songs from the main data
  const newAlbumSongs = songsData.filter(
    (song) => song.category === "New Album"
  );
  const songsToDisplay = songs.length > 0 ? songs : newAlbumSongs;
  return (
    <div className="">
      <div className="my-3 mt-8 flex items-center gap-2">
        <p className="text-xl">{title}</p>
        <RightArrowWhite />
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 my-3">
        {songsToDisplay.map((song) => {
          const isCurrentlyPlaying = currentSongId === song.id && isPlaying;

          return (
            <Card
              key={song.id}
              isFooterBlurred
              className={`w-[300px] h-[300px] flex-shrink-0 transition-all duration-300 ${
                isCurrentlyPlaying
                  ? "ring-2 ring-green-500/50 shadow-lg shadow-green-500/20"
                  : ""
              }`}
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-lg text-white font-bold">{song.title}</p>
                <h4 className="text-zinc-500 font-bold text-sm">
                  {song.artist}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt={`${song.title} by ${song.artist}`}
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={song.avatar}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                {song.audioFile ? (
                  <div className="flex-1">
                    <AudioPlayer
                      audioFile={song.audioFile}
                      songTitle={song.title}
                      artist={song.artist}
                      songId={song.id}
                      className="text-black"
                    />
                  </div>
                ) : (
                  <>
                    <div>
                      <p className="text-black text-tiny">Available soon.</p>
                      <p className="text-black text-tiny">Get notified.</p>
                    </div>
                    <Button
                      className="text-tiny p-0 rounded-full w-12 h-12 min-w-12 bg-white/20 backdrop-blur-sm"
                      size="sm"
                      isIconOnly
                    >
                      <PlayIcon />
                    </Button>
                  </>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* Hidden audio elements for New Album songs */}
      {songsToDisplay.map(
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
